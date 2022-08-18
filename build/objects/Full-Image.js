"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Image_1 = __importDefault(require("./Image"));
class FullImage extends Image_1.default {
    constructor(imageName, imageType, directory, width, height) {
        super(imageName, imageType, directory);
        this.targetWidth = width;
        this.targetHeight = height;
    }
}
exports.default = FullImage;
