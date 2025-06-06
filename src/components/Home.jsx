import SocialMediaBar from "./ScocialMediaBar";
import TypingAnimation from "./TypingAnimation"
import '../App.css';
const Home = () => {

    const messages = [
    "Full Stack Developer!",
    "CSS + HTML & JS ",
    "React + Tailwind",
    "Node.js + Express & Mongoose",
    "Let's build something cool!"
  ];


  return (
    <>
    
    <div className='w-full h-screen  text-text flex items-center justify-center flex-col'>
<p className='text-4xl  font2 text-gray-900'>HI, I am</p>

<h1 className='md:text-8xl text-6xl font-extrabold  text-blue-500 drop-shadow-md  font1'>RASHMIKA</h1>

<hr className='w-1/4 my-4 border-t-2 border-gray-100 ' /> 

<TypingAnimation texts={messages} speed={100} pause={1000}></TypingAnimation>

<SocialMediaBar></SocialMediaBar>
<p className='font3 text-gray-200 text-sm p-5 pb-0 wrap-break-word mt-4 text-center'> A passionate <span className='text-blue-500 font-semibold'>Full Stack Developer</span> from Sri Lanka.</p>
<p className='font3 text-gray-200 text-sm mt-2 text-center'>I love to create beautiful and functional web applications.</p> 


 </div>

    </>
  )
}





export default Home;