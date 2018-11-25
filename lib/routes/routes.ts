import {Request, Response} from "express";

import { UserController } from '../controllers/userController';

export class Routes {       

	public userController: UserController = new UserController();

    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Welcome to my world of TS...'
            })
        })  

        app.route('/users')
        .get((req: Request, res: Response) => {            
            this.userController.getUsers(req, res);
        })
        .post((req: Request, res: Response) => {            
			this.userController.addNewUser(req, res);            
        })

        app.route('/users/:id')
        .get((req: Request, res: Response) => {
        	this.userController.getUserById(req, res);
        })
        .put((req: Request, res: Response) => {
        	this.userController.updateUser(req, res);
        })
        .delete((req: Request, res: Response) => {
        	this.userController.deleteUser(req, res);
        })
    }

}