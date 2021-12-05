const User = (state = {}, {type, payload}) => {
    switch (type) {
        case 'LOGIN':
            console.log(payload);
            return payload.user;
        case 'LOGOUT':
            return {auth: false, profile: {}};
        default:
            return state;
    }
}
export default User;