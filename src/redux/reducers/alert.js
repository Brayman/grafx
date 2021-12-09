const Alert = (state = {}, {type, payload}) => {
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
export default Alert;