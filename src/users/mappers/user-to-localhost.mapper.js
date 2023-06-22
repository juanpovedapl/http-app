import { User } from '../models/users';

/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = ( User ) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = User;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }

}