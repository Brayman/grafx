function Month(workers, time, last) {
    const date = new Date(time)
    this.date = new Date(date.getFullYear(),date.getMonth(),1);
    workers.reduce((acc,el,i) => {
        const day = returnDay(acc)
        this[el] = {
            days: [day],
            hours: 0
        }
        return day.type
    },last)
    const day = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()-1
    for (let i = 0; i < day; i++) {
        workers.reduce((acc,el,i) => {
            const day = returnDay(acc)
            this[el].days.push(day);
            return day.type
        },this[workers[4]].days[i].type)
    }
    workers.reduce((acc,el,i) => {
        this[el].hours = this[el].days.reduce((acc, el, index, arr) => {
            return acc + el.hours
        },0)
    
    },0)
    

}
function returnDay(last) {
    switch (last) {
        case 1:
            return {
                type: 1,
                hours: 11
            }
        case 'first-day':
            return {
                type: 'second-day',
                hours: 11
            }
        case 'second-day':
            return {
                type: 'first-weekend',
                hours: 0
            }
        case 'first-weekend':
            return {
                type: 'second-weekend',
                hours: 0
            }
        case 'second-weekend':
            return {
                type: 'last-weekend',
                hours: 0
            }
        case 'last-weekend':
            return {
                type: 'night',
                hours: 10
            }
        case 'night':
                return {
                    type: 'first-day',
                    hours: 11
                }
        default:
            return {
                type: 'empty',
                hours: null
            }
    }
}

export default Month;