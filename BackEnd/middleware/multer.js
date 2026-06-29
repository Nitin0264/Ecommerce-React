import multer from 'multer';

// Define how and where files should be temporarily saved on the server disk
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        // Keeps the original filename unique by appending timestamps if needed
        callback(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({ storage });

export default upload;