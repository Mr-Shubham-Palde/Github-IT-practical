import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true,
        },
},
{
    timestamps:true,
    // the main purpose of this is to add createdAt and updatedAt fields to the schema
}
)

export const Book = mongoose.model('Book',bookSchema)