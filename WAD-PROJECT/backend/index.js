import express from 'express';
import {PORT,mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'

import booksRoutes from './routes/booksRoutes.js';
import cors from 'cors';


const app = express();
// ha middleware hai jo request ko process karne se pehle use hota hai
app.use(express.json());
// ye middleware hai jo cors ko enable karta hai
//allows all the origin to access the server

app.use(cors());

app.get('/',(req,res)=>{
    console.log(req);
    res.send("This is my first route");
})

app.use('/books',booksRoutes)



mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("MongoDB is connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      } );
})
.catch((error)=>{
    console.log("Error while connecting to MongoDB",error.message)
});