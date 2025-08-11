import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './App.css';
import Experience from './Components/Experience';
import Summary from './Components/Summary';
import Header from './Components/Header';
import dataExperiences from './data/experiences';
import summary from './data/summary';

function App() {
  const [experiences,setExperiences] = useState([])

  useEffect(()=> {
    setExperiences(dataExperiences)
  },[])

  const openLink = (url) => {
    console.log("opening new window")
    window.open(url,'_blank')
  }

  return (
    <div style={{display: 'flex', height: '100vh', width: '100vw',textAlign: 'center', boxSizing: 'border-box' , border:'solid 0px green'}}>
      <div style={{width : '50%'}}>
        <Header props={{name: 'Chen Zalman', title: 'Android & Full-Stack Developer'}}/>
        <FaLinkedin style={{cursor:'pointer', margin:'10px'}} size={40} onClick={() => openLink(process.env.REACT_APP_LINKEDINURL)}/>
        <FaGithub style={{cursor:'pointer', margin:'10px'}} size={40} onClick={() => openLink(process.env.REACT_APP_GITHUBURL)}/>
      </div>
      <div style={{padding:'20px', flexDirection : 'column', justifyItems: 'center', width: '50%', border: ' solid 0px red'}}>
        <div style={{ height:'20%', border: ' solid 0px '}}>
          <Summary props={{text: summary}} />
        </div>
        <div style={{textAlign:'left', overflowY: 'scroll', height:'80%', border: ' solid 0px blue' }}>
          {
            experiences.map(
              (item,i) =>(
                <>
                {i > 0 && <hr/>}
                <div style={{}}>
                  <Experience key={i}
                    props = {{
                      title : item.title,
                      instatutionName:item.instatute,
                      duration: item.duration,
                      description: item.description
                    }
                  }
                  />
                  </div>
                </>
              )
           )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
