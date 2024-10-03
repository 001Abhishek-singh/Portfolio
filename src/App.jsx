import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/About/Navbar.jsx';
import About from './Components/About/About.jsx';
import { useTypewriter } from 'react-simple-typewriter';
import SkillsBox from './Components/Skills/SkillsBox.jsx';
import ExperienceBox from './Components/EduAndExperi/ExperienceBox.jsx';
import Activity from './Components/Skills/Activity.jsx';
import ProjectBox from './Components/Project/ProjectBox.jsx';
import ContactBox from './Components/Contact/ContactBox.jsx';
import SocialMedia from './Components/Contact/SocialMedia.jsx';

function App() {

  // // creating the list of skills
  // const skills = ['c language', 'python', 'java', 'html5', 'css3','bootstrap', 'javascript', 'react js', 'sql', 'mysql', 'django', 'git/github', 'iot', 'Electrical Engineering', 'dsa'];
  // for changing the theme dark or light mode
    const currentState = localStorage.getItem('currentState');
    const [lightMode, setlightMode] = useState(currentState? currentState: 'light');

    useEffect(() => {
      localStorage.setItem('currentState',lightMode);
    },[lightMode]);

    // for video play and pause
    // const currentPlay = localStorage.getItem('currentPlay');
    const [playmode, setplaymode] = useState('pause');

    // useEffect(() =>{
    //   localStorage.setItem('currentPlay', playmode);
    // },[playmode]);

    // creating a useTypeWriter and Cursor
    const [text] = useTypewriter({words:['Electrical Engineer', 'Frontend Developer', 'Full Stack Developer', 'Python Developer'],loop:{}, typeSpeed:120,deleteSpeed:60});
    return (
      <>
    <div className={`App_container ${lightMode}`}>
      <Navbar lightMode={lightMode} setlightMode={setlightMode}></Navbar>
      <About playmode={playmode} setplaymode={setplaymode} text={text}></About>
      <Activity>
        <SkillsBox></SkillsBox>
      </Activity>
      <ExperienceBox></ExperienceBox>
      <ProjectBox></ProjectBox>
      <ContactBox></ContactBox>
      <SocialMedia></SocialMedia>
    </div>
    </>
  )
}

export default App
