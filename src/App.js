import { useEffect, useState } from 'react';
import './App.css';
import Experience from './Components/Experience';
import Summary from './Components/Summary';
import Header from './Components/Header';
import dataExperiences from './data/experiences';
import summary from './data/summary';
import dataProjects from './data/projects';
import Project from './Components/Project';
import Links from './Components/Links';

function App() {
  const [experiences, setExperiences] = useState([])
  const [projects, setpProjects] = useState([])

  useEffect(() => {
    setExperiences(dataExperiences)
    setpProjects(dataProjects)
  }, [])



  return (
    <div className='main-screen'>
      {/* Top of page */}
      <div className='top'>
        <div className='top-left'>
          <Header props={{ name: 'Chen Zalman', title: 'Android & Full-Stack Developer' }} />
          <div className='links'>
            <Links />
          </div>

        </div>
        <div className='top-right'>
          <Summary props={{ text: summary }} />
        </div>
      </div>
      {/* Bottom of page */}
      <div className='bottom'>
        <div className='bottom-left'>
          <h1> Projects:</h1>
          <div className='projects'>
            {
              projects.map(
                (item, i) => (
                  <>
                    {i > 0 && <hr/>}
                    <div style={{ width: '500px', flexShrink: 0, boxSizing: 'border-box', border: 'solid 0px' }}>
                      <Project key={i}
                        props={{
                          title: item.title,
                          image: item.image,
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
        <hr />
        <div className='bottom-right'>
          <h1>Experience:</h1>
          {
            experiences.map(
              (item, i) => (
                <>
                  {i > 0 && <hr />}
                  <div>
                    <Experience key={i}
                      props={{
                        title: item.title,
                        instatutionName: item.instatute,
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
