import bild1 from "../images/bild1.png";
import {TypeAnimation} from 'react-type-animation';



export const MainPage = () => {
    return (
        <div id="main">
  <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={bild1} alt="mig"/>
  <div className="w-full h-screen absolute top-0 left-0">
    <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center"> 
        <h1 className="sm:text-5xl text-4xl font-bold text-[#001b5e] bg-white/40 mt-60">Rikke Kristiansen</h1>
        <h2 className="flex sm:text-3xl text-2xl pb-2 text-gray-800 bg-white/40"> Jag jobbar med
        <TypeAnimation
      sequence={[
        'HTML och CSS',
        1000,
        'JavaScript och TypeScript',
        1000,
        'React och Node',
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
      repeat={Infinity}
    />
 </h2>

 </div>
 </div>
 </div>
    )
}
