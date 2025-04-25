import React, { useState } from 'react';
import { Button } from '../Button';

export const Team = () => {

    //Members information
    const members = [
        {
            img: "Alcaraz.png",
            name: "Geruel H. Alcaraz Jr.",
            role: "Fullstack Developer",
            skills: ["html", "css", "js", "bootstrap", "tailwind", "react", "react router", "php", "mysql", "git", "github", "database", "figma"],
            socials: ["facebook", "github"],
            link: ["https://web.facebook.com/geruel.hilado/", "https://github.com/geruel39"],
            bio: "The longer you wait to do the work, the older you'll be — therefore, more mature and wise."
        },
        {
            img: "Olaira.png",
            name: "Ferdinand Olaira Jr.",
            role: "Backend Developer",
            skills: ["html", "css", "js", "bootstrap", "php", "mysql", "git", "github", "database"],
            socials: ["facebook", "github"],
            link: ["https://web.facebook.com/ferdinandolaira.jr#", "https://github.com/Ferdabol"],
            bio: "A foolish man complains about his torn pocket. But a wise man uses it to scratch his balls."
        },
        {
            img: "Dimao.png",
            name: "Walid Binsaid Dimao", 
            role: "UI/UX Designer", 
            skills: ["html", "css", "bootstrap", "mysql", "git", "github", "database", "figma"], 
            socials: ["facebook"],
            link: ["https://web.facebook.com/waliddimao45#"],
            bio: `You can't say "I gave up" without saying "I gay". So don't give up.`
        },
        {
            img: "Rosales.png", 
            name: "Kane Ira Rosales", 
            role: "Frontend Developer", 
            skills: ["html", "css", "js", "bootstrap", "mysql", "git", "github", "database"], 
            socials: ["facebook"],
            link: ["https://web.facebook.com/kaneira.rosales#"],
            bio: "If you feeling depressed, bad, sick, or whatever. I just want you to know that I feel pretty good."
        },
        {
            img: "Mariano.png", 
            name: "Matthew Keane Mariano", 
            role: "Frontend Developer", 
            skills: ["html", "css", "bootstrap", "mysql", "git", "github", "database"], 
            socials: ["facebook"],
            link: ["https://web.facebook.com/KeaneYap76#"],
            bio: "To meet a girl in a park is good. But to park a meat in a girl is better."
        },
    ]

    const [info, setInfo] = useState(true);
    const [member, setMember] = useState(0)

    return <div>

                <div className={`min-h-screen w-full flex flex-col items-center justify-center fading ${info ? 'visible' : 'hidden'}`}>

                    <h1 className="text-7xl tracking-widest text-yellow-500 text-center mb-5 mt-16">PAMKIN</h1>
                    <h3 className="text-1xl uppercase tracking-widest text-yellow-200 text-center mb-10">Team Members</h3>
                    <div className='w-full flex flex-wrap justify-evenly'>
                        {members.map((member, index) => (
                            <div key={index} onClick={() => {setMember(index); setInfo(false)}}
                                className={`card-member relative z-1 cursor-pointer border-opacity-0 border-double border-3 border-yellow-500 m-5`}>

                                <img src={`/profile/${member.img}`} alt={member.name} className={`w-[180px] h-[175px] object-cover bg-[url(/endless-constellation.svg)] border-b border-yellow-500 border-opacity-0 shadow-inner shadow-yellow-900`}/>
                                <p className='bg-[rgba(10,10,10,.8)] w-full text-center text-sm text-yellow-500'>{member.name}</p>
                                <p className='bg-[rgba(10,10,10,.8)] w-full text-xs uppercase text-center text-yellow-600'>{member.role}</p>

                            </div>
                        ))}
                    </div>

                </div>

                <div className={`min-h-screen w-full flex flex-col fading ${info ? 'hidden' : 'visible'}`}>

                    <div className='fixed left-4 top-16'>
                        <Button text={`CLOSE`} click={() => {setInfo(true)}}/>
                    </div>


                    <div className='h-screen'>

                        <div className='w-full h-72 flex flex-col items-center justify-end border-b border-yellow-600'>

                            <p className='text-yellow-500 text-2xl bg-[rgba(10,10,10,.2)] px-5'>PAMKIN MEMBER</p>

                            <div className='rounded translate-y-1/2 info-img'>
                                <img src={`/profile/${members[member].img}`} alt={members[member].name} className='w-[200px] h-[200px] object-cover bg-[url(/endless-constellation.svg)]' />
                            </div>

                        </div>

                        <div className='w-full h-80 flex flex-col justify-center items-center'>

                            <p className='text-5xl text-yellow-500 text-center mt-[20px]'>{members[member].name}</p>
                            <p className='text-xl uppercase text-yellow-600'>{members[member].role}</p>
                            <p className='text-xs text-yellow-700 translate-y-2/2 mx-5 text-center'>"{members[member].bio}"</p>

                        </div>

                    </div>

                    <div className="px-20 my-20">

                        <h1 className='text-5xl text-yellow-500'>SKILLS:</h1>

                        <div className="w-full p-5 my-5 bg-[rgba(10,10,10,.5)] rounded flex flex-wrap justify-center items-center">
                            
                            {members[member].skills.map((skill, index) => (

                                <div key={index} className='flex flex-col items-center m-5'>
                                    <img src={`/skills/${skill}.svg`} alt={skill} className='w-[100px] h-[auto]'/>
                                    <p className='uppercase text-sm py-2'>{skill}</p>
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="px-20 my-20">

                        <h1 className='text-5xl text-yellow-500'>SOCIALS:</h1>

                        <div className="w-full p-5 my-5 bg-[rgba(10,10,10,.5)] rounded flex flex-wrap justify-center items-center">

                        {members[member].socials.map((social, index) => (

                            <a key={index} className='flex flex-col items-center m-5 cursor-pointer transition duration-300 hover:scale-110' href={members[member].link[index]} target="_blank" rel="noopener noreferrer">
                                <img src={`/socials/${social}.svg`} alt={social} className='w-[75px] h-[auto]'/>
                                <p className='uppercase text-sm py-2'>{social}</p>
                            </a>

                        ))}

                        </div>

                    </div>

                </div>

            </div>

}