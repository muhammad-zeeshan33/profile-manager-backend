const router = require('express').Router();

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

const authMiddleware = require('./middlewares/authMiddleware');

router.use('/auth', authRoutes);
router.use('/profile', authMiddleware, profileRoutes);


module.exports = router;