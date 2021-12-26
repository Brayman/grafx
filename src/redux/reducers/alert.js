const Alert = (state = {}, {type, payload}) => {
    switch (type) {
        case 'LOGIN_FAIL':
            return {
                type: 'error',
                message: payload.error
            }
        case 'CLOSE_ALERT':
            return {}
        case 'FAIL_GET_TEAM':
            return {
                type: 'error',
                message: payload.error
            }
        default:
            return state;
    }
}
export default Alert;