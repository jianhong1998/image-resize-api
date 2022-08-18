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
const image_resize_1 = __importDefault(require("../image-resize/image-resize"));
const router = (0, express_1.Router)();
router.get('/images', (req, res) => {
    res.send('<h1>api/images Access Successful</h1>');
});
router.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ext = yield image_resize_1.default
        .getImageNameAndType({ imageName: 'anya.jpg', height: 400, width: 400 }, './assets/image_src/full')
        .catch((error) => {
        console.error(error);
    });
    res.send(ext);
}));
exports.default = router;
