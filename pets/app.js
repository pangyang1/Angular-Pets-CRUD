// require the needed modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8888;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/dist')));

// set up mongo
mongoose.connect('mongodb://localhost/pets');

mongoose.Promise = global.Promise;

// set up mongoose schema
const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [2, "Name must be at least 2 characters"]},
    type: {type: String, required: [true, 'Please enter a type'], maxlength: 1},
}, {timestamps: true});

mongoose.model('Pets', PetSchema);
const Pet = mongoose.model('Pet');


// route for the CRUD operations

// index
app.get('/pets', (req, res)=>{
    Pet.find({}, (err, pet)=>{
        if(err){
            res.json({message: 'error', errors: err});
        } else {
            res.json({message: 'success', pet: pet});
        }
    })
})

// create
app.post('/pets', (req, res)=>{
    console.log(req.body);
    const newPet = new Pets(req.body);
    newDeer.save((err, pet)=>{
        if(err){
            console.log(err);

            res.json({message: 'error', errors: err.errors});
        } else {
            console.log('line 52 success', pet);
            res.json({messsage: 'success', pet: pet});
        }
    })
})

// show
app.get('/pets/:id', (req, res)=>{
    const id = req.params.id;
    Pet.findOne({_id: id}, (err, pet)=>{
        if(err){
            console.log(err);
            res.json({message: 'error', errors: err});
        } else {
            console.log('line 66 success', pet);
            res.json({messsage: 'success', pet: pet});
        }
    })
})

// update
app.put('/pets/:id', (req, res)=>{
    const id = req.params.id;
    Pet.findById(id, (err, pet)=>{
        if(err){
            res.json({message: 'error', errors: err});
        }
        pet.name = req.body.name;
        pet.type = req.body.type;

        pet.save((err, pet)=>{
            if(err){
                console.log(err);
                res.json({message: 'error', errors: err.errors});
            } else {
                console.log('line 89 success', pet);
                res.json({messsage: 'success', pet: pet});
            }
        })
    })
})

// delete
app.delete('/pets/:id', (req, res)=>{
    const id = req.params.id;
    pet.deleteOne({_id: id}, (err)=>{
        if(err){
            res.json({message: 'error', errors: err});
        } else {
            res.json({message: 'success'});
        }
    })
})

app.all('*', (req, res, next)=>{
    res.sendFile(path.resolve('./public/dist/index.html'));
})

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})
