import express from 'express';
import { register, login, logout } from '../controllers/authController.js';
import verifyToken from '../middleware/protect.js'; // ✅ protect.js

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

export default router;