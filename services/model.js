const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = {
    UsersSchema
}