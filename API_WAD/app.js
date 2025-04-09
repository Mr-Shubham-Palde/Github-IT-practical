const express = require('express');
const app = express();
const mongoose =  require('mongoose')
const bodyParser = require('body-parser');


app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kbtug22004:shubham2004@cluster0.ogxz3pp.mongodb.net/SHUBHAM')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

const KBTSchema = mongoose.Schema({
    name: String,
    marks: Number
});

const KBT = mongoose.model('KBT', KBTSchema);


app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.get('/students',async(req,res)=>{
    const students = await KBT.find();

    res.send(students);

})


app.get('/students/:name', async (req, res) => {
    const { name } = req.params;
    
    const students = await KBT.find({ name });
    res.send(students);
});

app.post('/addstudent', async (req, res) => {
    const { name, marks } = req.body;
    const newStudent = new KBT({ name, marks });
    await newStudent.save();
        
});



app.delete('/delete/:name',async(req,res)=>{
    const{name} = req.params;
    const students = await KBT.findOneAndDelete({name});
})


app.put('/update', async (req, res) => {
    
    const { name,marks } = req.body;
    const updatedStudent = await KBT.findOneAndUpdate(
        { name: name }, // Query to find the student by name
        { marks: marks }, // Update to set the new marks
        { new: true }     // Option to return the updated document
      );
});








app.listen(3000);