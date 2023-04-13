import { UserData } from "./user-data.type";
import { UserRating } from "./user-rating.class";
import { UserRole } from "./user-roles";

export class User {

    private role: UserRole = null;
    private previousRole: UserRole = null;
    private rating: UserRating = null;

    constructor( public data: UserData ) {}

    setRole(role: UserRole) {
        this.previousRole = this.role;
        this.role = role;
    }

    setRating(rating: UserRating) {
        this.rating = rating;
    }

    getRating() {
        return this.rating;
    }



}