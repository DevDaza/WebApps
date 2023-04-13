import { UserData } from "./user-data.type";
import { User } from "./user.class";

export class UserManagement {

    private users: User[];

    constructor() {}

    addUser(user: User) {
        this.users.push(user);
    }

    createUser( userData : UserData ) {
        const user = new User(userData)
        this.addUser(user);
    }

}