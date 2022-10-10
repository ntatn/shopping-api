import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

export default model('product', productSchema)