export default (state = {}, {type, payload}) => {
    switch (type) {
        case 'GET_PREVIOUS_SCHEDULE':
            console.log('gg');
            return payload;
        default:
            return state;
    }
}