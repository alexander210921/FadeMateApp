import { GET_USER } from "../../Types/index";

const initialState = {
    user: null,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
}  