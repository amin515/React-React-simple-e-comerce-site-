
import errorHandle from '../Middlewares/errorHandler.js';
import Product from '../Models/prodectModels.js'


// ceate product controller

/**
 * @status get
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const getAllItems = async (req, res, next) => {

    try {
        const product = await Product.find();
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
    
}
/**
 * @status post
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const createProduct = async (req, res, next) => {
  
    // loop for gallery
    
    let gallery = [];
    for (let i = 0; i < req.files.gallery.length; i++) {
     gallery.push(req.files.gallery[i].filename) 
    }
    

    try {
        const create = await Product.create({
            ...req.body,
            photo : req.files.photo[0].filename,
            gallery : gallery,
            category : req.body.category.split(','),
            tags : req.body.tags.split(',')
        });

        if(create){
          res.status(201).json({
            msg : 'Product added succesful',
          })
        }else{
          next(errorHandle(401, 'product upload failed'))
        }
    } catch (error) {
        next(errorHandle(error))  
    }
   
}


// get single product
export const getSingleProduct = async(req, res, next) => {

    try {
        const { id } = req.params;
        const product = await Product.findOne({ _id : id});
        res.status(200).json(product)
    } catch (error) {
        next(errorHandle(error))
    }
}

// delete product

export const deleteProduct = async(req, res, next) => {

    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);


        if( product ){
            res.status(200).json({
                msg : 'data delete successfull'
            })
        }else{
            next(errorHandle(401, 'data not get for delete'))
        }
        
    } catch (error) {
        next(errorHandle(error))
    }
}

// update product
export const updateProduct = async (req, res, next) => {

    try {
        
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(product){
            res.status(201).json({
                msg : 'product update successful'
            })
        }else {
            next(errorHandle(401, 'product not fund'))
        }

    } catch (error) {
        next(errorHandle(error))
    }
}

