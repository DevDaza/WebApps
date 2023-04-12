import { UserData } from "./user-data.type";
import { UserRole } from "./user-roles";

export class User {

    private role: UserRole = null;
    private previousRole: UserRole = null;

    constructor( public data: UserData ) {}

    setRole(role: UserRole) {
        this.previousRole = this.role;
        this.role = role;
    }




}