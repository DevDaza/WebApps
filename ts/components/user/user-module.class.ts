import { UserManagement } from "./user-management";
import { UserRating } from "./user-rating.class";
import { UserRole } from "./user-roles";
import { User } from "./user.class";

export class UserModule {

    userManagement: UserManagement = null;

    constructor() { }

    public init() {
        const admin = new User({ name: 'Daza', surname: 'Development', age: 33 });
        const adminRole = new UserRole('admin');
        const rating = new UserRating({ description: 'very-good', star: 9.5 });

        adminRole.setPermission('all')
        admin.setRole(adminRole)
        admin.setRating(rating)

        this.userManagement = new UserManagement()
        this.userManagement.addUser(admin)
    }


}