import React from 'react'
import '../App.css';
import './HeroSection.css'

function HeroSection(props) {
  return (
    <div className='section'>
      <div className='section'>
        <h1>CURRENTLY LOOKING FOR</h1>
        <h2>JUNIOR AND ENTRY LEVEL POSITIONS</h2>
      </div>
      <div className='introduction__container'>
        <div className='introduction__wrapper'>
          <div className='section'>
            <h1>ABOUT ME</h1>
            <div className='details__container'>
              <p className='details'>
              I am a Computer Science graduate focused mainly on software engineering, application development and tool creation using C/C++, Java and Python, though I am not limiting myself to just this. 
              I have completed numerous technical projects; some where I collaborated in a team environment following Agile(scrum) methodologies and others where I worked individually. 
              Most of my technical projects are maintained using git version control system and GitHub. 
              I also have experience with using AWS and GCP as well as SQL for database management, though not in a professional environment. 
              </p>
              <p className='details'>
              I am a very self-driven, motivated and resourceful individual with lots of grit when it comes to my work and I enjoy taking new learning opportunitites any chance I get.
              </p>
            </div>
          </div>
        </div>
        <div className='introduction__wrapper'>
        <div className='section'>
            <h1>SKILLS</h1>
            <h2>TECHNICAL SKILLS</h2>
            <div className='list-container'>
              <div className='list-wrapper'>
                <h3>Proficient:</h3>
                <ul className='list'>
                  <li className='list-item'>C/C++</li>
                  <li className='list-item'>Java</li>
                  <li className='list-item'>Python</li>
                  <li className='list-item'>Git</li>
                  <li className='list-item'>GitHub</li>
                  <li className='list-item'>Doxygen Documentation Tool</li>
                </ul>
              </div>
              <div className='list-wrapper'>
                <h3>Familiar:</h3>
                <ul className='list'>
                  <li className='list-item'>Shell Scripting</li>
                  <li className='list-item'>JavaScript</li>
                  <li className='list-item'>CSS</li>
                  <li className='list-item'>HTML</li>
                  <li className='list-item'>React</li>
                  <li className='list-item'>Flutter</li>
                  <li className='list-item'>AWS</li>
                  <li className='list-item'>GCP</li>
                  <li className='list-item'>SQL</li>
                  <li className='list-item'>Visual Basic</li>
                  <li className='list-item'>Android (Android Studio)</li>
                  <li className='list-item'>Assembly</li>
                </ul>
              </div>
            </div>
            <h2>SOFT SKILLS</h2>
            <div className='list-container'>
              <div className='list-wrapper'>
                <ul className='list'>
                  <li className='list-item'>Bilingual Communicator (English, Russian)</li>
                  <li className='list-item'>Mentor</li>
                  <li className='list-item'>Resourcefulness</li>
                  <li className='list-item'>Grit</li>
                  <li className='list-item'>Teamwork</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;