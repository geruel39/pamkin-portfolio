import { useState } from "react"
import { Button } from '../Button';

export const Contact = () => {

    const members = [
        {
            img: "Alcaraz.png",
            name: "Geruel H. Alcaraz Jr.",
            socials: ["phone","gmail", "github"],
            link: ["0968-714-8824", "geruelalcaraz@gmail.com" ,"https://github.com/geruel39"],
        },
        {
            img: "Olaira.png",
            name: "Ferdinand Olaira Jr.",
            socials: ["phone", "gmail", "github"],
            link: ["0920-492-9270", "ferdolaira@gmail.com", "https://github.com/Ferdabol"],
        },
        {
            img: "Dimao.png",
            name: "Walid Binsaid Dimao", 
            socials: ["gmail"],
            link: ["waliddimao@gmail.com"],
        },
        {
            img: "Rosales.png", 
            name: "Kane Ira Rosales", 
            socials: ["gmail"],
            link: ["kanerosales@gmail.com"],
        },
        {
            img: "Mariano.png", 
            name: "Matthew Keane Mariano", 
            socials: ["gmail"],
            link: ["matthewmariano@gmail.com"],
        },
    ]

    const [info, setInfo] = useState(0);
    const [popup, setPopup] = useState(false);


    return <div className="min-h-screen fading">

                <h1 className="w-full text-center text-5xl uppercase text-yellow-500 bg-[rgba(10,10,10,.5)] p-5 mt-16">Contact Us</h1>

                <p className="w-full text-center text-yellow-600 my-10">Click to see contact information</p>

                <div className='w-full flex flex-wrap justify-evenly md:px-10 px-0'>

                        {members.map((member, index) => (
                            <div key={index} onClick={()=>{setInfo(index); setPopup(true);}}
                                className={`card-member relative z-1 cursor-pointer border-opacity-0 shadow-lg shadow-black m-5`}>

                                <img src={`/profile/${member.img}`} alt={member.name} className={`w-[170px] h-[175px] object-cover bg-[url(/endless-constellation.svg)] border-b border-black`}/>
                                <p className='bg-[#121212] w-full text-center text-xs py-1 text-yellow-500'>{member.name}</p>

                            </div>
                        ))}

                </div>

                <div className={`w-8/9 md:h-80 h-8/9 fixed top-1/2 left-1/2 -translate-1/2 bg-[rgba(10,10,10,.9)] p-5 z-100 rounded flex flex-col md:flex-row justify-center fading ${popup ? '' : 'hidden'}`}>

                    <div className='fixed left-5 top-5'>
                        <Button text={`CLOSE`} click={() => setPopup(false)}/>
                    </div>

                    {members[info].socials.map((svg, index) => (
                        <div className="flex items-center mx-auto my-10">
                            <img src={`/socials/${svg}.svg`} className="w-12 lg:w-16 h-auto  mx-5" />
                            <p className="text-xs lg:text-base">{members[info].link[index]}</p>
                        </div>
                    ))}

                </div>
            
            </div>
}