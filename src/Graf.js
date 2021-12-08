import { useEffect, useState } from 'react';
import Menu from './ContextMenu';
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




function Row({month, open}) {
    const date = new Date()
    const numberDay = date.getDate()
    const drawGraf = (element, i) => {
        if (i+1 === numberDay) {
            return <td key={`item${i}`} className={`${element.type} today`}>{element.hours}</td>
        }
        return <td key={`item${i}`} className={element.type} onClick={(e)=>open(e,element.hours)}>{element.hours}</td>
    }
    const elements = []
    for (const key in month) {
        if (key !== 'date') {
            elements.push(<tr>
                <td>{key}</td>
                {
                    month[key].days.map(drawGraf)
                }
                <td>{month[key].hours} </td>
            </tr> )
        }
        
        
    }
    return elements
} 
  


function Graf(params) {
    const date = new Date()
    const [month, setMonth] = useState(new Month(workers,date,'night'))
    const [contextMenu, setContextMenu] = useState({open: false, position: [0,0] ,another: ''});
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
   
    

    

    
    return <div className='table'>
        { contextMenu.open ? <Menu position={contextMenu.position} item={contextMenu.another} close={()=>setContextMenu({open: false})}/> : null}
        <table>
            <tbody>
                <tr>
                    <td>{new Date(month.date).toLocaleDateString('ru-ru', {month: 'long'})}</td>
                    {
                        month.user1.days.map(drawday)
                    }
                </tr>
                
                <Row month={month} open={(e,item)=> {
                    setContextMenu({
                        open: !contextMenu.open,
                        position: [e.target.offsetLeft,e.target.offsetTop+e.target.offsetHeight],
                        another: item,
                    })
                    console.log(e);
                }}/>
               
                
            </tbody>
        </table>
    </div>
}
export default Graf