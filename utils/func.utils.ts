import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads'); // Specify the upload directory
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

export const image_upload = multer({storage})