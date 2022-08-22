import sharp from 'sharp';
import path from 'path';

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

const resizeImage = async (
    request: { filename: string; height: number; width: number },
    pathDetail: { srcDir: string; outDir: string }
) => {
    // start resizeImage()
    const resultPromise = new Promise<{
        resizeImagePath: string;
        resizeImageName: string;
        sharpOutputInfo: sharp.OutputInfo;
    }> (async (resolve, reject) => {
        
        // Check if the input width and height are valid
        if (request.height <= 0 || request.width <= 0) {
            reject('height and width must be greater than 0');
            return;
        }

        
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
