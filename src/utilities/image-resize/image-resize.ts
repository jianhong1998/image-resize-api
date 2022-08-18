import sharp from 'sharp';
import imageType, { ImageFileExtension } from 'image-type';
import { readChunk } from 'read-chunk';
import path from 'path';
import { PathLike } from 'fs';

// Import image info object
import ThumpImage from '../../objects/Thump-Image';
import FullImage from '../../objects/Full-Image';

const getImageNameAndType = async (
    request: { imageName: string; width: number; height: number },
    srcDirPath: string
) => {
    let buffer: Buffer;
    let ext: ImageFileExtension | undefined = undefined;

    // change image name to buffer
    buffer = await readChunk(path.join(srcDirPath, request.imageName), {
        length: 3,
        startPosition: 1,
    }).catch((error) => {
        // If img is not found
        return Promise.reject(error);
    });

    // get image extension
    await imageType(buffer)
        .then((value) => {
            if (value !== undefined) {
                ext = value.ext;
            } else {
                // src file is not image
                return Promise.reject('File extension not image type');
            }
        })
        .catch((reason) => {
            return Promise.reject(reason);
        });

    const nameSplitArray = request.imageName.split('.');
    let imageNameWithoutExt: string = '';

    // get name without extension
    nameSplitArray.forEach((value, index) => {
        if (index != nameSplitArray.length - 1) {
            imageNameWithoutExt += value;
        }
    });

    return Promise.resolve({
        name: imageNameWithoutExt,
        type: ext,
    });
};

const imageResize = async (request: {
    imageName: string;
    width: number;
    height: number;
}) => {};

export default {
    getImageNameAndType,
};
