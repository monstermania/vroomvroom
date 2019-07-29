const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    line: String
},{ timestamps: true});

const superheroSchema = new mongoose.Schema({
    heroname:{ type: String, required: true},
    alias: {type: String, required: true},
    placeOfBirth: {type:String},
    team :{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}, 
    quotes: [quoteSchema]
}, { timestamps: true});