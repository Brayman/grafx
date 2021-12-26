const Users = (state = [], {type, payload}) => {
    switch (type) {
        case 'GET_USERS':
            console.log(payload);
            return payload;
        default:
            return state;
    }
}
export default Users;