import bild1 from "../images/bild1.png";
export const MainPage = () => {
    return (
        <div id="main">
  <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={bild1} />
  <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
    <div>
        <h1>Rikke Kristiansen</h1>
        <h2>I am a
            
        </h2>
    </div>
  </div>
        </div>
    )
}
