import express, { Router } from 'express';

const router = Router();

router.get('/images', (req, res) => {
    res.send('<h1>api/images Access Successful</h1>');
});

export default router;
