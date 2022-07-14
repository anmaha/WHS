const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload');
    },
    filename: function(req, file, callback) {
        const todaysDate = new Date();
        const todaysDataString = `${todaysDate.getFullYear()}-${todaysDate.getMonth() + 1}-${todaysDate.getDate()}`;
        callback(null, `${todaysDataString}-${file.originalname}`);
    },
});
const upload = multer({ storage: storage });

module.exports = upload;