import { useEffect, useState } from 'react';
import './App.css';
const workers = ['user1','user2','user3','user4','user5','user6']

function Month(workers, date, last) {
    this.date = new Date(date.getFullYear(),date.getMonth(),1);
    workers.reduce((acc,el,i) => {
        const day = returnDay(acc)
        this[el] = {
            days: [day],
            hours: 0
        }
        return day.type
    },last)
    const day = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
    for (let i = 0; i < day; i++) {
        workers.reduce((acc,el,i) => {
            const day = returnDay(acc)
            
            this[el].days.push(day);
            return day.type

        },this[workers[4]].days[i].type)
    }
    workers.reduce((acc,el,i) => {
        console.log(el);
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
            break;
    }
}







function Graf(params) {
    const [month, setMonth] = useState(null)
    const date = new Date()
    const numberDay = date.getDate()
    useEffect(()=> {
            setMonth( new Month(workers,date,'night') )   
        },[])
    
    const drawday = (element, i) => {
        const day = new Date(date.getFullYear(),date.getMonth(),i+1).getDay()
        if (i+1 === numberDay) {
            return <td key={`day${i}`} className={`today ${6 === day || 0 === day ? 'weekend' : ''}`}>{i+1}</td>
        }
            return <td key={`day${i}`} className={`${ 6 === day || 0 === day ? 'weekend' : ''}`}>{i+1}</td>
        }
    const drawGraf = (element, i) => {
        if (i+1 === numberDay) {
            return <td key={`item${i}`} className={`${element.type} today`}>{element.hours}</td>
        }
        return <td key={`item${i}`} className={element.type}>{element.hours}</td>
    }
    if (month == null) {
        return <h1>Loading...</h1>
    } else {
        return <table>
            <tbody>
            <tr>
                    <td>{new Date(month.date).toLocaleDateString('ru-ru', {month: 'long'})}</td>
                    {
                        month.user1.days.map(drawday)
                    }
                </tr>
                <tr>
                    <td>user1</td>
                    {
                        month.user1.days.map(drawGraf)
                    }
                    <td>{month.user1.hours}</td>
                </tr>
                <tr>
                    <td>user2</td>
                    {
                        month.user2.days.map(drawGraf)
                    }
                    <td>{month.user2.hours} </td>
                </tr>
                <tr>
                    <td>user3</td>
                    {
                        month.user3.days.map(drawGraf)
                    }
                    <td>{month.user3.hours} </td>
                </tr>
                <tr>
                    <td>user4</td>
                    {
                        month.user4.days.map(drawGraf)
                    }
                    <td>{month.user4.hours} </td>
                </tr>
                <tr>
                    <td>user5</td>
                    {
                        month.user5.days.map(drawGraf)
                    }
                    <td>{month.user5.hours} </td>
                </tr>
                <tr>
                    <td>user6</td>
                    {
                        month.user6.days.map(drawGraf)
                    }
                    <td>{month.user6.hours} </td>
                </tr>
                
            </tbody>
        </table>
    }
}
export default Graf