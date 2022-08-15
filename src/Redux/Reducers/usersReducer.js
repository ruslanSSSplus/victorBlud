import {UsersAPI} from "../../API/usersAPI";


const GET_USERS = 'USERS/GET_USERS';
const PICK_USERS = 'USERS/PICK_USERS';
const DROP_USERS = 'USERS/DROP_USERS';
const PICK_DROP_EXACT_USER = 'USERS/PICK_DROP_EXACT_USER';



let initialState = {
    users: [],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.data}
        case PICK_USERS:
            state.users.map((el) => el.picked = true)
            return {...state}
        case DROP_USERS:
            state.users.map((el) => el.picked = false)
            return {...state}
        case PICK_DROP_EXACT_USER:
            state.users.map((el) => {
                if ( el.id === action.id)
                {
                    el.picked = !el.picked
                    return el
                }return el})
            return {...state}
        default:
            return state;
    }
}



export const getUsersThunkCreater = () => {
    return async (dispatch) => {
        const response = await UsersAPI.getUsers()
        response.map(el=> (el.picked = false))
        dispatch(actions.putUsers(response))
    }
}

export const pickUsersThunkCreater = () => {
    return (dispatch) => {
        dispatch(actions.pickUsers())
    }
}
export const dropUsersThunkCreater = () => {
    return (dispatch) => {
        dispatch(actions.dropUsers())
    }
}
export const pickDropExactUsersThunkCreater = (id) => {
    return (dispatch) => {
        dispatch(actions.pickDropExactUser(id))
    }
}

export const actions = {
    putUsers: (data) => ({
        type: GET_USERS, data
    }),
    pickUsers: () => ({
        type: PICK_USERS,
    }),
    dropUsers: () => ({
        type: DROP_USERS,
    }),
    pickDropExactUser: (id) => ({
        type: PICK_DROP_EXACT_USER,
        id
    }),

}


export default usersReducer;