require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//to keep our api_key & api_secret hidden & secure
cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };