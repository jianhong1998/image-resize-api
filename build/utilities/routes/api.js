"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/images', (req, res) => {
    res.send('<h1>api/images Access Successful</h1>');
});
exports.default = router;
