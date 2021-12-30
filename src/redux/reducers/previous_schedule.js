const previous_schedule = (state = {}, {type, payload}) => {
    switch (type) {
        case 'GET_PREVIOUS_SCHEDULE':
            return payload;
        default:
            return state;
    }
}
export default previous_schedule;