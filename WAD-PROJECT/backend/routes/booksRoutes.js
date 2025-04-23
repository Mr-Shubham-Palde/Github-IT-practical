import express from 'express';

import { Book } from '../models/bookModel.js';

const router = express.Router();





router.post('/',async(req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message:"send all requiered fields:title,author,oublishYear"
            })
        }


        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        };

        const book = await Book.create(newBook)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
        
    }
})

// Route to get all the books from database
router.get('/', async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).json({count:books.length,
        data:books,}
      ); // ✅ use res, not response
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message }); // ✅ also use res here
    }
});


//to get a single book by id (As per the mam teaching)

router.get('/:id', async(req,res)=>{
    
    try {
        const { id } = req.params;

        const book = await Book.findById(id);
        res.status(200).json({count:book.length,
          data:book,}
        ); // ✅ use res, not response
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message }); //  also use res here
      }

})


// to update the book with mongoose

router.put('/:id',async(req,res)=>{

    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message:"send all requiered fields:title,author,oublishYear"
            })
        }


        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).json({message:"Book not found"});
        }

        return res.status(200).json({message:"Book updated successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

})


//delete API for this

router.delete('/:id',async(req,res)=>{
    try {

        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message:"Book not found"});
        }

        return res.status(200).json({message:"Book deleted successfully"});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
        
    }
})


export default router