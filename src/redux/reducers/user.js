const User = (state = {}, {type, payload}) => {
    switch (type) {
        case 'LOGIN':
            return payload.user;
        case 'LOGOUT':
            console.log('logout');
            return {};
        default:
            return state;
    }
}
export default User;