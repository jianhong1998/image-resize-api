import { PathLike } from "fs";
import { ImageTypeResult } from "image-type";

export default interface Image {
    imageName: string;
    imageType: ImageTypeResult;
    directoryPath: PathLike;
};