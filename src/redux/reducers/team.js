const Team = (state = [], {type, payload}) => {
    switch (type) {
        case 'GET_TEAM':
        case 'SET_TEAM':
            return payload;
        default:
            return state;
    }
}
export default Team;