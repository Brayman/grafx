import { useEffect, useState } from 'react';
import Month from './monthCreathor';
import Menu from './ContextMenu';
import './App.css';
const workers = ['user1','user2','user3','user4','user5','user6']

function Row({month, open}) {
    const date = new Date()
    const numberDay = date.getDate()
    const drawGraf = (element, i) => {
        if (i+1 === numberDay) {
            return (
                <td key={`item${i}`}
                    className={`${element.type} today`}
                    
                >
                        {element.hours}
                </td>
            )
                
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
  


function Graf({userDate, lastday}) {
    const date = new Date()
    const [month, setMonth] = useState(new Month(workers,userDate,'night'))
    const [contextMenu, setContextMenu] = useState({open: false, position: [0,0] ,another: ''});
    const numberDay = date.getDate()
    useEffect(()=> {
            setMonth( new Month(workers,userDate,lastday) )   
        },[])
    
    const drawday = (element, i) => {
        const day = new Date(date.getFullYear(),date.getMonth(),i+1).getDay()
        if (i+1 === numberDay) {
            return (
                <td key={`day${i}`}
                    className={`today ${6 === day || 0 === day ? 'weekend' : ''}`}
                >
                    {i+1}
                </td>
                )
        }
            return <td key={`day${i}`} className={`${ 6 === day || 0 === day ? 'weekend' : ''}`}>{i+1}</td>
    }
    
    const Menu = (position) => {
        
        return <div className='menu' style={{left: contextMenu.position[0], top: contextMenu.position[1]}}>
            <p>Замениться</p>
            {contextMenu.another !== 0 ? <p>Убрать смену</p> :<p>Добавить смену</p>}
        </div>
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
export default Graf;