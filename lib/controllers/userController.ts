import * as mongoose from 'mongoose';

import { UserSchema } from '../models/users';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController{


	// Add User

	public addNewUser( req: Request, res: Response){

		let newUser = new User(req.body);

		newUser.save(( err, user ) => {
			if(err){
				res.send(err);
			}

			res.json(user);
		});

	}

	// Get All Users

	public getUsers(req: Request, res: Response){

		User.find({}, (err, users) => {

			if(err){
				res.send(err);
			}

			res.json(users)

		});

	}

	//Get User by Id

	public getUserById(req: Request, res: Response){

		User.findById( req.params.id, (err, user) => {
			if(err){
				res.send(err)
			}

			res.json(user);
		})
	}

	public updateUser (req: Request, res: Response) {           
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }
	

	public deleteUser(req: Request, res: Response) {
		User.remove( {_id: req.params.id}, (err, user) => {

				if(err){
					res.send(err);
				}
				res.json({message: 'User deleted successfully'})

		});
	}




} 