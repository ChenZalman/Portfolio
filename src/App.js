import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './App.css';
import Experience from './Components/Experience';
import Summary from './Components/Summary';
import Header from './Components/Header';
import dataExperiences from './data/experiences';
import summary from './data/summary';
import dataProjects from './data/projects';
import Project from './Components/Project';

function App() {
  const [experiences,setExperiences] = useState([])
  const [projects,setpProjects] = useState([])

  useEffect(()=> {
    setExperiences(dataExperiences)
    setpProjects(dataProjects)
  },[])

  const openLink = (url) => {
    console.log("opening new window")
    window.open(url,'_blank')
  }

  return (
    <div style={{display: 'flex', height: '100vh', width: '100vw',textAlign: 'center', border:'solid 0px', boxSizing: 'border-box'}}>
      {/* Left side of page */}
      <div style={{padding:'20px',width : '50%', border:'solid 0px', boxSizing: 'border-box'}}>
        <div style={{height:'20%', border:'solid 0px', boxSizing: 'border-box'}}>
          <Header props={{name: 'Chen Zalman', title: 'Android & Full-Stack Developer'}}/>
          <div style={{border:'solid 0px', boxSizing: 'border-box'}}>
            <FaLinkedin style={{cursor:'pointer', marginInline:'10px'}} size={40} onClick={() => openLink(process.env.REACT_APP_LINKEDINURL)}/>
            <FaGithub style={{cursor:'pointer', marginInline:'10px'}} size={40} onClick={() => openLink(process.env.REACT_APP_GITHUBURL)}/>
          </div>
        </div>
        <div style={{textAlign:'left', height:'80%', boxSizing:'border-box', border:'solid 0px green'}}>
          <h1 style={{margin:'0px'}}> Projects:</h1>
          <div style={{display:'flex', overflowX:'scroll',height:'95%'}}>
            {
              projects.map(
                (item,i) =>(
                  <>
                    {i > 0 && <hr style={{margin:'15px'}}/>}
                    <div style={{width:'500px', flexShrink:0, boxSizing:'border-box', border:'solid 0px'}}>
                      <Project key={i}
                        props = {{
                          title : item.title,
                          image:item.image,
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
      {/* Right side of page */}
      <div style={{padding:'20px', width: '50%'}}>
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
