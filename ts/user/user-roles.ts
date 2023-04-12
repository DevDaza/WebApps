import { Permission } from "./user-permissons.type";

export class UserRole {

    private id: number = null;
    public permissions: Permission[];

    constructor(
        public name: string
    ) {}

    setPermission(permisson: Permission) {
        this.permissions.push(permisson);
    }

}