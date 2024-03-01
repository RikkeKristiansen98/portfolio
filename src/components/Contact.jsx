import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Transition } from '@headlessui/react';

export const Contact = () => {
    const [showToast, setShowToast] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        const name = form.current.from_name.value;
        const email = form.current.from_email.value;
        const subject = form.current.subject.value;
        const message = form.current.message.value;
    
        if (!name || !email || !subject || !message) {
            alert("Vänligen fyll i alla fält");
            return;
        }
    
        emailjs
            .sendForm('service_8hmu9qw', 'template_bvvy11d', form.current, {
                publicKey: 'Am4r_0oUZ1DlSdMQU',
            })
            .then(
                () => {
                  console.log('SUCCESS!');
                  setShowToast(true);
                  setTimeout(() => {
                      setShowToast(false);
                  }, 3000); // Tiden för toast meddelandet
                  form.current.reset(); // återställer formuläret
                },
                (error) => {
                    console.log('FAILED to send mail...');
                    alert ("Ditt meddelande blev inte skickat, kontakta gärna Rikke.kristiansen@hotmail.com")
                },
            );
    };
      
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Kontakt</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col"> 
                        <label className="uppercase text-sm py-2">Namn</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text"
                        name="from_name"
                        />
                    </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">E-post</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" 
                    type="email" 
                    name="from_email"/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Ämne</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" 
                    type="text" 
                    name="subject"/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Meddelande</label>
                    <textarea className="border-2 rounded-lg p-3 flex border-gray-300" 
                    rows="10" 
                    name="message"></textarea>
                    <div className="flex justify-center items-center">
                    <button className="bg-[#001b5e] text-gray-100 mt-4 p-4 rounded-lg dark:hover:bg-blue-700"style={{ width: "200px", height: "50px" }} type="submit" value="send">Skicka meddelande</button>
                    </div></div>
            </form>
            <Transition
                show={showToast}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-800 text-white p-4 rounded-lg">
                    Ditt meddelande har skickats!
                </div>
            </Transition>
        </div>
    )
}