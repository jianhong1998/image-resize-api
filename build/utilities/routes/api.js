"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageResize_1 = __importDefault(require("../image-resize/imageResize"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('<h1>GET api/ successful</h1>');
});
router.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pathDetails = {
        srcDir: './assets/images_src/full',
        outDir: './assets/images_src/thump',
    };
    // Check if any value is missing in GET Request
    if (req.query.filename === undefined ||
        req.query.height === undefined ||
        req.query.width === undefined) {
        res.send('<h1 style="color: red">filename, height, width are required in the GET request</h1>');
        return;
    }
    const imageRequest = {
        filename: req.query.filename,
        height: parseInt(req.query.height),
        width: parseInt(req.query.width),
    };
    // Check if any value smaller than 0
    if (imageRequest.height <= 0 || imageRequest.width <= 0) {
        res.send('<h1 style="color: red">height and width must be greater than 0</h1>');
        return;
    }
    yield imageResize_1.default
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
}));
exports.default = router;
