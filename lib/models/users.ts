import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema ({

	userId : {
		type: Number
	},

	firstName : {
		type: String,
		required: 'Enter a first name'
	},

	lastName : {
		type: String,
		required: 'Enter a last name'
	},

	email: {
		type: String,
		required: 'Enter your email'	
	},

	phone: {
		type: Number,
	},

	created_Date: {
		type: Date,
		default: Date.now
	}

})