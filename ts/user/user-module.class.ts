import { UserManagement } from "./user-management";
import { UserRole } from "./user-roles";
import { User } from "./user.class";

export class UserModule {

    userManagement: UserManagement = null;

    constructor() { }

    public init() {
        const admin = new User({ name: 'Daza', surname: 'Development', age: 33 })
        const adminRole = new UserRole('admin')

        adminRole.setPermission('all')
        admin.setRole(adminRole)

        this.userManagement = new UserManagement()
        this.userManagement.addUser(admin)

    }


}