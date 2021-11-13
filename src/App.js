import logo from './logo.svg';
import './App.css';

const workers = ['user1','user2','user3','user4','user5','user6']

function Month(workers, date, last) {
    this.date = new Date(date.getFullYear(),date.getMonth(),1);
    workers.reduce((acc,el,i) => {
        const day = returnDay(acc)
        this[el] = [day];
        return day.type
    },last)
    const day = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
    for (let i = 0; i < day; i++) {
        workers.reduce((acc,el,i) => {
            const day = returnDay(acc)
            this[el].push(day);
            return day.type

        },this[workers[5]][i].type)
    }

}

function returnDay(last) {
    switch (last) {
        case 'first-day':
            return {
                type: 'second-day',
                hours: 11
            }
        case 'second-day':
            return {
                type: 'night',
                hours: 10
            }
        case 'night':
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
                type: 'first-day',
                hours: 11
            }
        case 'weekend':
            return {
                type: 'first-day',
                hours: 11
            }
        default:
            break;
    }
}

function App(params) {

  const date = new Date()
  console.log(new Month(workers,date,'weekend'));
  console.log(returnDay('weekend'));
  const numberDay = date.getDate()
  const drawday = (element, i) => {
    const day = new Date(date.getFullYear(),date.getMonth(),i+1).getDay()
   
    if (i+1 === numberDay) {
      return <td className={`today ${day === 6 ? 'weekend' : ''}`}>{i+1}</td>
    }
      return <td className={`${ 6 == day || 0 == day ? 'weekend' : ''}`}>{i+1}</td>
  }
  const drawGraf = (element, i) => {
    if (i+1 === numberDay) {
      return <td className={`${element.type} today`}>{element.hours}</td>
    }
      return <td className={element.type}>{element.hours}</td>
  }
  const month = new Month(workers,date,'weekend')
    return <table>
        <tbody>
            <tr>
                <td>Day</td>
                {
                    month.user1.map(drawday)
                }
            </tr>
            <tr>
                <td>user1</td>
                {
                    month.user1.map(drawGraf)
                }
            </tr>
            <tr>
                <td>user2</td>
                {
                    month.user2.map(drawGraf)
                }
            </tr>
            <tr>
                <td>user3</td>
                {
                    month.user3.map(drawGraf)
                }
            </tr>
            <tr>
                <td>user4</td>
                {
                    month.user4.map(drawGraf)
                }
            </tr>
            <tr>
                <td>user5</td>
                {
                    month.user5.map(drawGraf)
                }
            </tr>
            <tr>
                <td>user6</td>
                {
                    month.user6.map(drawGraf)
                }
            </tr>
        </tbody>
    </table>
}

export default App;
