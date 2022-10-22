

import express from 'express';
import multer from 'multer';
import path, { resolve } from 'path';
import { createBrand, deleteBrand, getAllBrands, getSingleBrand, updateBrand } from '../../Controllers/ProductItemsControllers/BrandController.js';

const __dirname = resolve()
const router = express.Router();

//multer initialise
const storage = multer.diskStorage({
    filename : (req, file, cb ) => {
        cb(null, Date.now() + '_' + file.originalname)
    },
    destination : (req, file, cb)  => {
        cb(null, path.join(__dirname, 'api/public/images/brand/'))
    }
});

const productMulter = multer({
    storage : storage
}).single('photo')


productMulter


router.get('/', getAllBrands);
router.post('/', productMulter, createBrand);
router.get('/:id', getSingleBrand);
router.delete('/:id', deleteBrand);
router.put('/:id', updateBrand)

// export router
export default router;