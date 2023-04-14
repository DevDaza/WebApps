import { Component } from "../component.abstract";
import { UserData } from "./user-data.type";
import { User } from "./user.class";

export class UserManagement extends Component {

    private users: User[];

    constructor() {
        super()
    }

    addUser(user: User) {
        this.users.push(user);
    }

    createUser( userData : UserData ) {
        const user = new User(userData)
        this.addUser(user);
    }

    public doSomething(): void {
        
    }

}