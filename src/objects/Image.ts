import { PathLike } from 'fs';
import { ImageTypeResult } from 'image-type';

export default class Image {
    imageName: string;
    imageType: ImageTypeResult;
    directoryPath: PathLike;

    constructor(
        imageName: string,
        imageType: ImageTypeResult,
        directoryPath: PathLike
    ) {
        this.imageName = imageName;
        this.imageType = imageType;
        this.directoryPath = directoryPath;
    }
}
