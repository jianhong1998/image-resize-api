"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Image_1 = __importDefault(require("./Image"));
class ThumpImage extends Image_1.default {
    constructor(imageName, imageType, directory, width, height) {
        super(imageName, imageType, directory);
        this.width = width;
        this.height = height;
    }
}
exports.default = ThumpImage;
