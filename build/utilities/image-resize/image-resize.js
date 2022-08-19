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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const getImageName = (imageName) => {
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
const resizeImage = (request, pathDetail) => __awaiter(void 0, void 0, void 0, function* () {
    const resultPromise = new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const originalImageName = getImageName(request.filename);
        const resizedImageName = `thump_${originalImageName}.png`;
        const originalImagePath = path_1.default.join(pathDetail.srcDir, request.filename);
        const resizedImagePath = path_1.default.join(pathDetail.outDir, resizedImageName);
        yield (0, sharp_1.default)(originalImagePath)
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
    }));
    return resultPromise;
});
exports.default = {
    getImageName,
    resizeImage,
};
