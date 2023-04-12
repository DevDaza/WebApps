import { UserData } from "./user-data.type";
import { UserRole } from "./user-roles";
import { User } from "./user.class";

export class SuperAdmin extends User {

    visible: string = 'none';
    unique: boolean = true;

    isSuperAdmin: boolean = true;
    canDoEverything: boolean = true;

    constructor(public data: UserData) {
        super(data);
        const role = new UserRole('admin');
        role.setPermission('all');
        this.setRole(role)
    }



}