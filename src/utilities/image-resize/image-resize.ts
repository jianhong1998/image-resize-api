import sharp from 'sharp';
import path from 'path';
import { PathLike } from 'fs';

// Import image info object
import ThumpImage from '../../objects/Thump-Image';
import FullImage from '../../objects/Full-Image';

const getImageName = (imageName: string) => {
    let imageNameWithoutExt = '';

    let tempNameSplitArray = imageName.split('.');

    tempNameSplitArray.forEach((value, index) => {
        if (index !== tempNameSplitArray.length - 1) {
            imageNameWithoutExt += value;
        }
    });

    return imageNameWithoutExt;
};

export default {
    getImageName,
};
