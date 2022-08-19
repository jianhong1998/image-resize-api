import express, { Router } from 'express';
import imageResize from '../image-resize/image-resize';

const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>GET api/ successful</h1>');
});

router.get('/images', async (req, res) => {
    const pathDetails = {
        srcDir: './assets/images_src/full',
        outDir: './assets/images_src/thump',
    };

    if (
        req.query.filename === undefined ||
        req.query.height === undefined ||
        req.query.width === undefined
    ) {
        res.send(
            '<h1 style="color: red">filename, height, width are required in the GET request</h1>'
        );
        return;
    }

    const imageRequest = {
        filename: req.query.filename as string,
        height: parseInt(req.query.height as string),
        width: parseInt(req.query.width as string),
    };

    await imageResize
        .resizeImage(imageRequest, pathDetails)
        .then((result) => {
            const option = {
                root: result.resizeImagePath,
            };
            res.sendFile(result.resizeImageName, option);
        })
        .catch((error) => {
            res.status(404).send(`<h1 style="color: red">${error}</h1>`);
        });
});

export default router;
