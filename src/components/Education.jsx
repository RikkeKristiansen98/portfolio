import { EducationItem } from "./EducationItem"

const data = [
    {
        year: 2023,
       title: "Medieinstitutet - Fullstack developer ",
       time: "2 år",
       details: "Programmering i både frontend och backend med fokus på E-handel. Utbildningen ger mig kunskaper inom: HTML, CSS, JavaScript, React, Node, WordPress, WooCommerce, Git, Parprogrammering, PHP, Agila metoder, SQL och betallösningar."
    },
    {
        year: 2021,
       title: "Högskolan i Halmstad - Häslopedagogiskt program",
       time: "1 år",
       details: "Kurser: Introduktion till hälsovetenskap 15 hp, Introduktion till pedagogik 15 hp, Tillämpat hälsoarbete 15 hp, Etiskt och kritiskt förhållningssätt till hälsopedagogiskt arbete 15 hp."
    },
    {
        year: 2019,
       title: "Tone Lise Akademiet - Hud och kroppsterapeut Cidesco",
       time: "1 år",
       details: "Hud och kroppsterapeut med godkänt internationell Cidesco examen"
    },
    {
        year: 2014,
       title: "Nesodden videregående skole - Gymnasium",
       time: "3 år",
       details: "Media och kommunikation två första åren, sista året utökning av generell studiekompetens."
    },
];
export const Education = () => {
    return (
        <div id="education" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl pb-10 font-bold text-center text-[#001b5e]">Utbildningar</h1>
            {data.map((item, idx) => (
<EducationItem 
key={idx} 
year={item.year} 
title={item.title} 
time={item.time}  
details={item.details}
/>
            ))}
            </div>
    );
};