
import mongoose from "mongoose";

const brandSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    slug : {
        type : String,
        required : true,
        trim : true
    },
    photo : {
        type : String,
        default : 'p.png'
    }

}, {
    timestamps : true
})

export default mongoose.model('brand', brandSchema);