import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const getImageName = (imageName: string) => {
    let imageNameWithoutExt = '';

    let tempNameSplitArray = imageName.split('.');

    tempNameSplitArray.forEach((value, index) => {
        if (index !== tempNameSplitArray.length - 1) {
            // If the index !== 0, then add a '.' string back to the name
            imageNameWithoutExt += (index !== 0 ? '.' : '') + value;
        }
    });

    return imageNameWithoutExt;
};

const checkIsImageExist = async (
    imagePath: string,
    imageName: string
): Promise<boolean> => {
    const promise = new Promise<boolean>((resolve, reject) => {
        const pathWithName = path.join(imagePath, imageName);

        fs.open(pathWithName, (err, fd) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });

    return promise;
};

const resizeImage = async (
    request: { filename: string; height: number; width: number },
    pathDetail: { srcDir: string; outDir: string }
) => {
    const resultPromise = new Promise<{
        resizeImagePath: string;
        resizeImageName: string;
        sharpOutputInfo: sharp.OutputInfo;
    }>(async (resolve, reject) => {
        const originalImageName = getImageName(request.filename);
        const resizedImageName = `thump_${originalImageName}.png`;

        const originalImagePath = path.join(
            pathDetail.srcDir,
            request.filename
        );
        const resizedImagePath = path.join(pathDetail.outDir, resizedImageName);

        await sharp(originalImagePath)
            .resize(request.width, request.height)
            .png()
            .toFile(resizedImagePath)
            .then((value) => {
                resolve({
                    resizeImagePath: pathDetail.outDir,
                    resizeImageName: resizedImageName,
                    sharpOutputInfo: value,
                });
            })
            .catch((error) => {
                reject(error);
            });
    });

    return resultPromise;
};

export default {
    getImageName,
    resizeImage,
};
