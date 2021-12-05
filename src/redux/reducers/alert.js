export default (state = null, {type, payload}) => {
    switch (type) {
        case 'LOGIN_FAIL':
            return {
                type: 'error',
                message: payload.error
            }
        case 'CLOSE_ALERT':
            return {}
        default:
            return state;
    }
}