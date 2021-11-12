import logo from './logo.svg';
import './App.css';
const data = 
    {
      data: 'Ноябрь',
        user1: [
            11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11
        ],
        user2: [
            0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0
        ],
        user3: [
            0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0
        ],
        user4: [
            0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0
        ],
        user5: [
            10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10
        ],
        user6: [
            11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11,10,0,0,0,11,11
        ]
    }



function App(params) {
  const date = new Date()
  const numberDay = date.getDate()
  const drawday = (element, i) => {
    const day = new Date(date.getFullYear(),date.getMonth(),i+1).getDay()
    console.log(day,new Date(date.getFullYear(),date.getMonth(),i+1));
    if (i+1 === numberDay) {
      return <td className={'today '+ day === 6 ? 'weekend' : ''}>{i+1}</td>
    }
      return <td className={ day == 0 ||6 ? 'weekend' : ''}>{i+1}</td>
  }
    return <table>
        <tbody>
            <tr>
                <td>Day</td>
                {
                    data.user1.map(drawday)
                }
            </tr>
            <tr>
                <td>user1</td>
                {
                    data.user1.map((element, i) => {
                      if (i+1 === numberDay) {
                        return <td className={element < 10 ? 'today none' : 'today work'}>{element}</td>
                      }
                        return <td className={element < 10 ? 'none' : 'work'}>{element}</td>
                    })
                }
            </tr>
            <tr>
                <td>user2</td>
                {
                    data.user2.map((element, i) => {
                      if (i+1 === numberDay) {
                        return <td className={element < 10 ? 'today none' : 'today work'}>{element}</td>
                      }
                        return <td className={element < 10 ? 'none' : 'work'}>{element}</td>
                    })
                }
            </tr>
            <tr>
                <td>user3</td>
                {
                    data.user3.map((element, i) => {
                      if (i+1 === numberDay) {
                        return <td className={element < 10 ? 'today none' : 'today work'}>{element}</td>
                      }
                        return <td className={element < 10 ? 'none' : 'work'}>{element}</td>
                    })
                }
            </tr>
            <tr>
                <td>user4</td>
                {
                    data.user4.map((element, i) => {
                        return <td className={element < 10 ? 'none' : 'work'}>{element}</td>
                    })
                }
            </tr>
            <tr>
                <td>user5</td>
                {
                    data.user5.map((element, i) => {
                        return <td className={element < 10 ? 'none' : 'work'}>{element}</td>
                    })
                }
            </tr>
            <tr>
                <td>user6</td>
                {
                    data.user6.map((element, i) => {
                        return <td className={element < 10 ? 'none' : 'work'}>{element}</td>
                    })
                }
            </tr>
        </tbody>
    </table>
}

export default App;
