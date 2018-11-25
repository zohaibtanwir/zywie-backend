import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import {Routes} from "./routes/Routes";


class App {

    public app: express.Application;
    public routes: Routes = new Routes();
    public mongoUrl: string = 'mongodb://zywie:password@localhost/fullstack-dev';



    constructor() {
        this.app = express();
        this.config();     
        this.routes.routes(this.app);   
        this.mongoSetup();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

     private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;