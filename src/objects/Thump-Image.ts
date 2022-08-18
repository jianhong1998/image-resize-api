import { PathLike } from 'fs';
import { ImageTypeResult } from 'image-type';
import Image from './Image';

export default class ThumpImage extends Image {
    width: number;
    height: number;

    constructor(
        imageName: string,
        imageType: ImageTypeResult,
        directory: PathLike,
        width: number,
        height: number
    ) {
        super(imageName, imageType, directory);
        this.width = width;
        this.height = height;
    }
}
