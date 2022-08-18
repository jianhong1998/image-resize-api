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
const image_type_1 = __importDefault(require("image-type"));
const read_chunk_1 = require("read-chunk");
const path_1 = __importDefault(require("path"));
const getImageNameAndType = (request, srcDirPath) => __awaiter(void 0, void 0, void 0, function* () {
    let buffer;
    let ext = undefined;
    // change image name to buffer
    buffer = yield (0, read_chunk_1.readChunk)(path_1.default.join(srcDirPath, request.imageName), {
        length: 3,
        startPosition: 1,
    }).catch((error) => {
        // If img is not found
        return Promise.reject(error);
    });
    // get image extension
    yield (0, image_type_1.default)(buffer)
        .then((value) => {
        if (value !== undefined) {
            ext = value.ext;
        }
        else {
            // src file is not image
            return Promise.reject('File extension not image type');
        }
    })
        .catch((reason) => {
        return Promise.reject(reason);
    });
    const nameSplitArray = request.imageName.split('.');
    let imageNameWithoutExt = '';
    // get name without extension
    nameSplitArray.forEach((value, index) => {
        if (index != nameSplitArray.length - 1) {
            imageNameWithoutExt += value;
        }
    });
    return Promise.resolve({
        name: imageNameWithoutExt,
        type: ext,
    });
});
const imageResize = (request) => __awaiter(void 0, void 0, void 0, function* () { });
exports.default = {
    getImageNameAndType,
};
