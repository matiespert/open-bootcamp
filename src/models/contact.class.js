import { ESTADO } from "./contact.state";




export class Connectivity {
    name = "";
    lastName = "";
    email = "";
    online = false;


    constructor(name, lastName, email, online){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.online = online;

    }
}