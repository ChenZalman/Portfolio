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
    <div style={{display: 'flex', height: '100vh', width: '100vw',textAlign: 'center', border:'solid 1px', boxSizing: 'border-box'}}>
      {/* Left side of page */}
      <div style={{padding:'20px',width : '50%', border:'solid 0px', boxSizing: 'border-box'}}>
        <div style={{height:'25%', border:'solid 0px', boxSizing: 'border-box'}}>
          <Header props={{name: 'Chen Zalman', title: 'Android & Full-Stack Developer'}}/>
          <div style={{border:'solid 0px', boxSizing: 'border-box'}}>
            <FaLinkedin style={{cursor:'pointer', marginInline:'10px'}} size={40} onClick={() => openLink(process.env.REACT_APP_LINKEDINURL)}/>
            <FaGithub style={{cursor:'pointer', marginInline:'10px'}} size={40} onClick={() => openLink(process.env.REACT_APP_GITHUBURL)}/>
          </div>
        </div>
        <div style={{textAlign:'left', height:'75%'}}>
          <h1 style={{}}> Projects:</h1>
        </div>
      </div>
      {/* Right side of page */}
      <div style={{padding:'20px', flexDirection : 'column', justifyItems: 'center', width: '50%'}}>
        <div style={{ height:'25%'}}>
          <Summary props={{text: summary}} />
        </div>
        <div style={{textAlign:'left', overflowY: 'scroll', height:'75%'}}>
          <h1>Experience:</h1>
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
