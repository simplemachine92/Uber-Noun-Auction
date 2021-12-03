pragma solidity ^0.8.6;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import {MultiPartRLEToSVG} from "../nouns_contracts/libs/MultiPartRLEToSVG.sol";
//import {INounsDescriptor} from "../nouns_contracts/interfaces/INounsDescriptor.sol";
import {NFTDescriptor} from "../nouns_contracts/libs/NFTDescriptor.sol";

contract Simple is ERC721 {
    struct SVGParams {
        bytes[] parts;
        string background;
    }

    struct ContentBounds {
        uint8 top;
        uint8 right;
        uint8 bottom;
        uint8 left;
    }

    struct Rect {
        uint8 length;
        uint8 colorIndex;
    }

    struct DecodedImage {
        uint8 paletteIndex;
        ContentBounds bounds;
        Rect[] rects;
    }

    string public daName;

    string public uberSVG;

    string public description;

    string public background;

    // They said gg but it was bg
    string public daBackground;

    bytes[] public gunParts;

    mapping(uint8 => string[]) public gunPalette;

    constructor(
        bytes memory _gunBody,
        bytes memory _gunCessory,
        bytes memory _gunHead,
        bytes memory _gunGlasses,
        string memory _name,
        string memory _description,
        string memory _background,
        string[] memory _palette
    ) ERC721("GTC UBER-NOUN", "GUN") {
        //R U 'RAY' ANON? AAAAAAAAHAHAHHAHAHHAAHAH
        gunParts.push(_gunBody);
        gunParts.push(_gunCessory);
        gunParts.push(_gunHead);
        gunParts.push(_gunGlasses);
        daName = _name;
        description = _description;
        background = _background;
        gunPalette[0] = _palette;
        SVGParams memory params = SVGParams({
            parts: _getPartsForSeed(),
            background: background
        });
        generateSVG(params, gunPalette);
    }

    /* function generateSVGImage() external view returns (string memory) {
        MultiPartRLEToSVG.SVGParams memory params = MultiPartRLEToSVG
            .SVGParams({parts: _getPartsForSeed(), background: background});
        return NFTDescriptor.generateSVGImage(params, palette);
    } */

    function generateSVG(
        SVGParams memory params,
        mapping(uint8 => string[]) storage palettes
    ) internal {
        // prettier-ignore
        uberSVG = string(
            abi.encodePacked(
                '<svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">',
                '<rect width="100%" height="100%" fill="#', params.background, '" />',
                _generateSVGRects(params, palettes),
                '</svg>'
            )
        );
    }

    /**
     * @notice Given RLE image parts and color palettes, generate SVG rects.
     */
    // prettier-ignore
    function _generateSVGRects(SVGParams memory params, mapping(uint8 => string[]) storage palettes)
        private
        view
        returns (string memory svg)
    {
        string[33] memory lookup = [
            '0', '10', '20', '30', '40', '50', '60', '70', 
            '80', '90', '100', '110', '120', '130', '140', '150', 
            '160', '170', '180', '190', '200', '210', '220', '230', 
            '240', '250', '260', '270', '280', '290', '300', '310',
            '320' 
        ];
        string memory rects;
        for (uint8 p = 0; p < params.parts.length; p++) {
            DecodedImage memory image = _decodeRLEImage(params.parts[p]);
            string[] storage palette = palettes[image.paletteIndex];
            uint256 currentX = image.bounds.left;
            uint256 currentY = image.bounds.top;
            uint256 cursor;
            string[16] memory buffer;

            string memory part;
            for (uint256 i = 0; i < image.rects.length; i++) {
                Rect memory rect = image.rects[i];
                if (rect.colorIndex != 0) {
                    buffer[cursor] = lookup[rect.length];          // width
                    buffer[cursor + 1] = lookup[currentX];         // x
                    buffer[cursor + 2] = lookup[currentY];         // y
                    buffer[cursor + 3] = palette[rect.colorIndex]; // color

                    cursor += 4;

                    if (cursor >= 16) {
                        part = string(abi.encodePacked(part, _getChunk(cursor, buffer)));
                        cursor = 0;
                    }
                }

                currentX += rect.length;
                if (currentX == image.bounds.right) {
                    currentX = image.bounds.left;
                    currentY++;
                }
            }

            if (cursor != 0) {
                part = string(abi.encodePacked(part, _getChunk(cursor, buffer)));
            }
            rects = string(abi.encodePacked(rects, part));
        }
        return rects;
    }

    /**
     * @notice Return a string that consists of all rects in the provided `buffer`.
     */
    // prettier-ignore
    function _getChunk(uint256 cursor, string[16] memory buffer) private pure returns (string memory) {
        string memory chunk;
        for (uint256 i = 0; i < cursor; i += 4) {
            chunk = string(
                abi.encodePacked(
                    chunk,
                    '<rect width="', buffer[i], '" height="10" x="', buffer[i + 1], '" y="', buffer[i + 2], '" fill="#', buffer[i + 3], '" />'
                )
            );
        }
        return chunk;
    }

    /**
     * @notice Decode a single RLE compressed image into a `DecodedImage`.
     */
    function _decodeRLEImage(bytes memory image)
        private
        pure
        returns (DecodedImage memory)
    {
        uint8 paletteIndex = uint8(image[0]);
        ContentBounds memory bounds = ContentBounds({
            top: uint8(image[1]),
            right: uint8(image[2]),
            bottom: uint8(image[3]),
            left: uint8(image[4])
        });

        uint256 cursor;
        Rect[] memory rects = new Rect[]((image.length - 5) / 2);
        for (uint256 i = 5; i < image.length; i += 2) {
            rects[cursor] = Rect({
                length: uint8(image[i]),
                colorIndex: uint8(image[i + 1])
            });
            cursor++;
        }
        return
            DecodedImage({
                paletteIndex: paletteIndex,
                bounds: bounds,
                rects: rects
            });
    }

    /**
     * @notice Get all Noun parts for the passed `seed`.
     */
    function _getPartsForSeed() internal view returns (bytes[] memory) {
        bytes[] memory _parts = new bytes[](4);
        _parts[0] = gunParts[0];
        _parts[1] = gunParts[1];
        _parts[2] = gunParts[2];
        _parts[3] = gunParts[3];
        return _parts;
    }
}