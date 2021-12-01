export default (state = {}, {type, payload}) => {
    switch (type) {
        case 'GET_SCHEDULES':
            console.log(payload);
            return payload;
        case 'GET_SCHEDULE':
            return payload;
        case 'SET_SCHEDULE':
            console.log(payload);
            return payload;
        default:
            console.log(payload);
            return state;
    }
}