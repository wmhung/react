import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src='photos/ray.jpg' alt='portrait of ray' />;
}

function Intro() {
  return (
    <div>
      <h1>Ruei-Shi Hung</h1>
      <p>
        I am a conductor, software engineer, and painter. I have an older
        brother named 'YUAN-ZHAI', he is a cat. I enjoy playing hide and seek
        with him every day. I want to invite him to Ray's Bang Bang Philharmonic
        as the first member.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='Paint' emoji='🎨' color='lightgreen' />
      <Skill skill='Piano' emoji='🎹' color='orange' />
      <Skill skill='Conduct' emoji='🫳' color='lightblue' />
      <Skill skill='JavaScript' emoji='🖥️' color='yellow' />
      <Skill skill='Python' emoji='🖥️' color='pink' />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
