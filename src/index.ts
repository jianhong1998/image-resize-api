import server from './utilities/server/server';
import imageResize from './utilities/image-resize/image-resize';

server;

server.get('/test', async (req, res) => {
    const imageFullName = 'anya.jpg';
    const imageName = imageResize.getImageName(imageFullName);
    res.send(`<h1>${imageName}</h1>`);
});
