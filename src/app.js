const express = require('express');
const Note = require("./models/note.models.js");

const app = express();
app.use(express.json());

app.post ('/notes',async(req,res)=>{
    const data = req.body
    const newNote = await Note.create({
        title: data.title,
        description: data.description
    });
    res.status(201).json ({
        message: "Note created successfully",
        note: newNote
    })


    
});

    app.get('/notes',async(req ,res)=>{
        const notes = await Note.find ({})
        res.status(200).json ({
            message: "Notes retrieved successfully",
            notes: notes
        })
       


    })

    app.delete ('/notes/:id', async(req,res)=>{
        const note = req.params.id
        const deleteNote = await Note.findByIdAndDelete(note)
        res.status(200).json ({
            message: "Note deleted successfully",
            note: deleteNote
        })
    })

    app.patch ('/notes/:id',async(req,res)=>{
        const id = req.params.id
        const description = req.body.description

        await Note.findOneAndUpdate( { _id: id }, { description: description })
        res.status(200).json ({
            message: "Note updated successfully",
        
        })
    })

module.exports = app;