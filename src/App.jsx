import bg from './img/bg.jpg'
import './App.css'
import TypingAnimation from './components/TypingAnimation'
import SocialMediaBar from './components/ScocialMediaBar';

function App() {
  const messages = [
    "Full Stack Developer!",
    "CSS + HTML & JS ",
    "React + Tailwind",
    "Node.js + Express & Mongoose",
    "Let's build something cool!"
  ];

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-cover" style={{
        backgroundImage: `url(${bg})`,
      }}>

<div className='bg-gradient-to-bl from-primary/95 to-bg/95 w-full h-screen text-text flex items-center justify-center flex-col'>
<h1 className='text-8xl font-extrabold '>Hello !</h1>
<p className='text-4xl'>I am Rashmika</p>
<hr className='w-1/4 my-4 border-t-2 border-text' />

<TypingAnimation texts={messages} speed={100} pause={1000}></TypingAnimation>

<SocialMediaBar></SocialMediaBar>


 </div>




      </div>
    </>
  )
}

export default App
