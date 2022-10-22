

import express from 'express';
import multer from 'multer';
import  { createProduct, deleteProduct, getAllItems, getSingleProduct, updateProduct } from '../Controllers/productController.js';
import path, { resolve } from 'path';

const __dirname = resolve()
const router = express.Router();

// multer initialise
const storage = multer.diskStorage({
    filename : (req, file, cb ) => {
        cb(null, Date.now() + '_' + file.originalname)
    },
    destination : (req, file, cb)  => {
        cb(null, path.join(__dirname, 'api/public/images/products/'))
    }
});

const productMulter = multer({
    storage : storage
}).fields([
    {
        name : "photo",
        maxCount : 1
    },
    {
        name : "gallery",
        maxCount : 10
    }
])






router.get('/', getAllItems);
router.post('/', productMulter, createProduct);
router.get('/:id', getSingleProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct)

// export router
export default router;