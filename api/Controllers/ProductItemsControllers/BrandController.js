import errorHandle from '../../Middlewares/errorHandler.js';
import Brand from '../../Models/ProductItemModels/brandModels.js'



// get all brands
/**
 * @status get
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const getAllBrands = async(req, res, next) => {
 
    try {
        let brand = await Brand.find();
        res.status(200).json(brand)
    } catch (error) {
        next(error)
    }
    
}


/**
 * @status post
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

// create brand 
export const createBrand = async(req, res, next) => {
   
    console.log(req.file)
    try {
        const create = await Brand.create({
            ...req.body,
            photo : req.file.filename,
        })

        if(create){
            res.status(201).json({
              msg : 'Brand added succesful',
            })
          }else{
            next(errorHandle(401, 'brand upload failed'))
          }
        
    } catch (error) {
        next(errorHandle(error)) 
    }
    
}


// get single brand

export const getSingleBrand = async(req, res, next) => {
   
    try {
        const { id } = req.params;
        const brand = await Brand.findOne({ _id : id});
        res.status(200).json(brand)
    } catch (error) {
        next(errorHandle(error))
    }
}

// delete product

export const deleteBrand = async(req, res, next) => {

    const { id } = req.params;
    try {
        const brand = await Brand.findByIdAndDelete(id);


        if( brand ){
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
export const updateBrand = async (req, res, next) => {

    try {
        
        const { id } = req.params;
        const brand = await Brand.findByIdAndUpdate(id, req.body)

        if(brand){
            res.status(201).json({
                msg : 'data update successful'
            })
        }else {
            next(errorHandle(401, 'data not fund'))
        }

    } catch (error) {
        next(errorHandle(error))
    }
}
