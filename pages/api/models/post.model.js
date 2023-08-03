
import mongoose, { Schema } from "mongoose"

const imageSchema = mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    }
});
const ImageModel = mongoose.model('image', imageSchema)

const postSchema = mongoose.Schema({
    petName:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 15,
        trim: true
    },
    petSpecies:{
        type: String,
        enum: ['gato','perro']
    },
    petSex:{
        type: String,
        required: true,
        enum: ['macho', 'hembra']
    },
    petAge:{
        type: String,
        required: true,
        enum: ['6 meses aprox.', '1 a 2 años', '2 a 5 años', '5+ años']
    },
    actLevel:{
        type: String,
        required: true,
        enum: ['pasivo/a', 'normal', 'travieso/a', 'hiperactivo/a']
    },
    vacc:{ 
        type: String,
        required: true,
        enum: ['desparacitado/a', 'desparacitado/a y vacunado/a', 'ninguna']
    },
    background:{
        type: String,
        required: true,
        minLength: 15,
        maxLength: 80,
        trim: true
    },
    isNeutered:{
        type: Boolean,
        required: true
    },
    felvPositive:{
        type: Boolean,
        required: true    
    },
    petLocation:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 15
    },
    image:{ type:Schema.Types.String, ref: 'image' },

    post_id: { type: Schema.Types.ObjectId, ref: 'post' }
    /*  - See MULTER for image files 
        - See ZIP CODE API */
})

const Post = mongoose.model('post', postSchema)

export { Post, ImageModel }