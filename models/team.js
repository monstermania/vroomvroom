const mongoose = ('mongoose');

const teamSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    members: [{ type: mongoose.Schema.Types.ObjcetId, ref: 'Superhero'}]
}, {timestamps: true});

module.exports = mongoose.model('Team', teamSchema);
