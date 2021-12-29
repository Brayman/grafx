export default (state = [], {type, payload}) => {
    switch (type) {
        case 'GET_SCHEDULES':
            return payload;
        case 'SET_SCHEDULE':
            return payload;
        case 'GET_SCHEDULE':
            return payload;
        default:
            return state;
    }
}