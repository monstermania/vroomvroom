mongoose = require ('mongoose')

const teamSchema = mongoose.Schema({
    name: String,
    members: [{ type: mongoose.Scjema.Types.ObjectId, ref: 'Superhero'}]
}, {timestamps: true});

module.exports = mongoose.model('Team', teamSchema);