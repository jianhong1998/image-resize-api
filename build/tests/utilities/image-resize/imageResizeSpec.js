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
const imageResize_1 = __importDefault(require("../../../utilities/image-resize/imageResize"));
describe('Test getImageName() function', () => {
    it('getImageName("anya.jpg") should return "anya"', () => {
        expect(imageResize_1.default.getImageName('anya.jpg')).toBe('anya');
    });
    it('getImageName("anya.1.0.0.jpg") should return "anya.1.0.0"', () => {
        expect(imageResize_1.default.getImageName('anya.1.0.0.jpg')).toBe('anya.1.0.0');
    });
    it('getImageName("anya_1.0.0.jpg") should return "anya_1.0.0"', () => {
        expect(imageResize_1.default.getImageName('anya_1.0.0.jpg')).toBe('anya_1.0.0');
    });
});
describe('Test resizeImage() function', () => {
    it('input nagetive value should return a rejected promise with message "height and width must be greater than 0"', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(imageResize_1.default.resizeImage({ filename: 'anya.jpg', height: -1, width: 100 }, { srcDir: '', outDir: '' })).toBeRejectedWith('height and width must be greater than 0');
    }));
    it('input not exist file name should return a rejected promise', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(imageResize_1.default.resizeImage({ filename: 'anya1.jpg', height: 1000, width: 1000 }, {
            srcDir: './assets/images_src/full',
            outDir: './assets/images_src/thump',
        })).toBeRejected();
    }));
});
