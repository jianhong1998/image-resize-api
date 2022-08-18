import { PathLike } from 'fs';
import { ImageTypeResult } from 'image-type';
import Image from './Image';

export default class FullImage extends Image {
    targetWidth: number;
    targetHeight: number;

    constructor(
        imageName: string,
        imageType: ImageTypeResult,
        directory: PathLike,
        width: number,
        height: number
    ) {
        super(imageName, imageType, directory);
        this.targetWidth = width;
        this.targetHeight = height;
    }
}
