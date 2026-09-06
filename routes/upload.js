const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    cb(null, `img-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) return cb(null, true);
    cb(new Error('Images only!'));
  }
});

// @route   POST /api/upload
router.post('/', upload.array('images', 5), (req, res) => {
  try {
    const files = req.files.map(file => `http://localhost:${process.env.PORT || 5000}/uploads/${file.filename}`);
    res.json({ success: true, images: files });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;