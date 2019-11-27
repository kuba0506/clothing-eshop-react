import { UserActionTypes} from './user.types';

export default function(user) {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    };
}
