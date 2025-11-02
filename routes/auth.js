import createMahasiswa from "../controllers/MahasiswaController.js";
import express from 'express';

const router = express.Router();

router.post('/auth/register', createMahasiswa);

export default router;