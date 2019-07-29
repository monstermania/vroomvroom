// Require mongoose
const mongoose = require('mongoose');

// Create Model/Schema:
const carSchema = mongoose.Schema({
make: {
    type: String,
    required: [true, 'Car Make is required']
},
model: {
    type: String,
    required: [true, 'Car Model is required']
},
year: {
    type: Number,
    required: [true, 'Car Year is required']
},
price: {
    type: Number,
},
style: {
    type: String,
} 
}, {timestamps: true})

// Export constants and models:
const Car = mongoose.model('Car', carSchema);

module.exports = Car;