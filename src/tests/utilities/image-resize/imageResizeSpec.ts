import imageResize from '../../../utilities/image-resize/imageResize';

describe('Test getImageName() function', () => {
    it('getImageName("anya.jpg") should return "anya"', () => {
        expect(imageResize.getImageName('anya.jpg')).toBe('anya');
    });

    it('getImageName("anya.1.0.0.jpg") should return "anya.1.0.0"', () => {
        expect(imageResize.getImageName('anya.1.0.0.jpg')).toBe('anya.1.0.0');
    });

    it('getImageName("anya_1.0.0.jpg") should return "anya_1.0.0"', () => {
        expect(imageResize.getImageName('anya_1.0.0.jpg')).toBe('anya_1.0.0');
    });
});

describe('Test resizeImage() function', () => {
    it('input nagetive value should return a rejected promise with message "height and width must be greater than 0"', async () => {
        await expectAsync(
            imageResize.resizeImage(
                { filename: 'anya.jpg', height: -1, width: 100 },
                { srcDir: '', outDir: '' }
            )
        ).toBeRejectedWith('height and width must be greater than 0');
    });

    it('input not exist file name should return a rejected promise', async () => {
        await expectAsync(
            imageResize.resizeImage(
                { filename: 'anya1.jpg', height: 1000, width: 1000 },
                {
                    srcDir: './assets/images_src/full',
                    outDir: './assets/images_src/thump',
                }
            )
        ).toBeRejected();
    });
});
