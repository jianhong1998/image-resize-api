import express, { Router } from 'express';
import imageResize from '../image-resize/image-resize';

const router = Router();

router.get('/images', (req, res) => {
    res.send('<h1>api/images Access Successful</h1>');
});

router.get('/test', async (req, res) => {
    const ext = await imageResize
        .getImageNameAndType(
            { imageName: 'anya.jpg', height: 400, width: 400 },
            './assets/image_src/full'
        )
        .catch((error) => {
            console.error(error);
        });

    res.send(ext);
});

export default router;
