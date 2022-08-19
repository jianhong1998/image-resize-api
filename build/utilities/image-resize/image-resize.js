"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getImageName = (imageName) => {
    let imageNameWithoutExt = '';
    let tempNameSplitArray = imageName.split('.');
    tempNameSplitArray.forEach((value, index) => {
        if (index !== tempNameSplitArray.length - 1) {
            imageNameWithoutExt += value;
        }
    });
    return imageNameWithoutExt;
};
exports.default = {
    getImageName,
};
