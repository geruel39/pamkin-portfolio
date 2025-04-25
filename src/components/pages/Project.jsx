import { useState } from "react"
import { Button } from "../Button";

export const Project = () => {

    //Projects List
    const projects = [
        {
            img: ["temsiz2.jpg", "tmz.jpeg", "tmz1.jpeg", "tmz2.jpeg", "tmz3.jpeg",],
            title : "Temsiz",
            desc: "Temsiz is a streamlined employee task management system designed to help teams assign, track, and manage tasks efficiently. With features like real-time updates, progress tracking, and collaboration tools, Temsiz enhances productivity and keeps everyone aligned.",
            tech: ["html", "css", "php", "js"]
        },
        {
            img: ["Ms Bilao.png", "Ms Bilao1.png", "Ms Bilao2.png", "Ms Bilao3.png", "Ms Bilao4.png", "Ms Bilao5.png", "Ms Bilao6.png",],
            title : "M's Bilao",
            desc: "Ms. Bilao is a food ordering system that allows customers to browse menus, place orders, and schedule deliveries or pickups with ease. Designed for local food businesses, it streamlines the ordering process and enhances the customer experience through a simple, user-friendly interface.",
            tech: ["html", "css", "php", "js"]
        },
        {
            img: ["ISCP1.jpg", "ISCP2.jpg", "ISCP3.jpg", "ISCP4.jpg", "ISCP5.jpg",],
            title : "International State College of the Philippines",
            desc: "International State College of the Philippines is an enrollment management system designed to streamline the student registration process. It handles applications, course enrollment, student records, and administrative tasks—making academic management more efficient for both students and staff.",
            tech: ["html", "css", "php"]
        },
        {
            img: ["King Arthur.jpeg"],
            title : "King Arthur",
            desc: "King Arthur is a text-based adventure and combat game developed in C++. Set in a medieval world of knights and legends, players embark on quests, make choices that shape their journey, and engage in turn-based battles—all within a richly narrated console interface.",
            tech: ["c++"]
        },
        {
            img: ["Red Rooms.jpeg","Red Room1.png", "Red Room2.png", "Red Room3.png", "Red Room4.png", "Red Room5.png", "Red Room6.png"],
            title : "Red Rooms",
            desc: "Red Rooms is a room booking system designed specifically for apartment complexes. It allows residents to easily reserve shared spaces—like lounges, meeting rooms, or event halls—through a user-friendly interface, ensuring fair and efficient use of community facilities.",
            tech: ["java"]
        },
        {
            img: ["A4 College University.jpeg", "A4 College University.png"],
            title : "A4 College University",
            desc: "A4 College University is an online platform designed to help students explore and compare colleges and universities. It provides detailed information about institutions, programs, admissions, and more—making it easier for users to find the right school for their academic journey.",
            tech: ["css", "html"]
        },
        {
            img: ["Karaoke.jpeg", "Karaoke Machine.png"],
            title : "Karaoke Machine",
            desc: "A user-friendly karaoke machine built with Python and the Tkinter library. It features a simple graphical interface that allows users to load songs with synced lyrics, play music, and sing along in real time. Ideal for parties or solo jam sessions!",
            tech: ["python"]
        },
    ]

    const [project, setProject] = useState(0);
    const [view, setView] = useState(false);
    const [image, setImage] = useState(0);

    const nextImage = () => {
        setImage((prevIndex) => (prevIndex + 1) % projects[project].img.length);
    };

    const prevImage = () => {
        setImage((prevIndex) => 
          (prevIndex - 1 + projects[project].img.length) % projects[project].img.length
        );
      };
    

    return <div className="h-screen w-full flex flex-col items-center fading">

            <h1 className="w-full text-center text-5xl uppercase text-yellow-500 bg-[rgba(10,10,10,.5)] p-5 mt-16">Projects</h1>
            
            <div className="w-full px-10">

                {projects.map((project, index) => (
                        
                    <div key={index} className={`w-full bg-[rgba(10,10,10,.5)] p-5 my-10 flex md:flex-row flex-col justify-between block-element`}>

                        <div className={`max-w-xl overflow-hidden flex justify-center items-center mx-5 order-1 ${(index % 2 === 0) ? "md:order-1" : "md:order-2"} relative`}>
                            <img src={`/projects/${project.img[0]}`} className="w-auto h-96 object-cover rounded m-auto p-1 border border-yellow-500"/>
                            <button onClick={() => {setView(true); setProject(index); setImage(0);}} className="absolute bottom-3 right-3 cursor-pointer bg-[#121212] p-1 rounded border border-yellow-500 transition duration-200 hover:text-yellow-500 hover:border-[#121212] ">Images</button>
                        </div>
    
                        <div className={`w-full lg:w-3/5 md:w-2/4 flex flex-col md:mx-0 mx-5 md:my-0 my-5 space-y-5 order-2 ${(index % 2 === 0) ? "md:order-2" : "md:order-1"}`}>
    
                            <h1 className="text-2xl text-yellow-500">{project.title}</h1>
                            <p>{project.desc}</p>
    
                            <h3 className="text-xl text-yellow-500 uppercase ">Technologies:</h3>
                            <div className="flex bg-[rgba(10,10,10,.5)]">

                                {project.tech.map((t, index) => (

                                    <div key={index} className="flex flex-col items-center p-5">
                                        <img src={`/skills/${t}.svg`} className="w-[50px] h-auto"/>
                                        <p className="uppercase text-xs">{t}</p>
                                    </div>

                                ))}

                            </div>
    
                        </div>
    
                    </div>
    

                ))}


            </div>

            <div className={`w-full h-full bg-[rgba(10,10,10,.5)] fixed top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center fading ${view ? 'visible' : 'hidden'}`}>
                
                <div className='fixed left-4 top-16'>
                    <Button text={`CLOSE`} click={() => {setView(false);}}/>
                </div>

                <div className="relative w-full flex items-center justify-center">

                    <img src={`/projects/${projects[project].img[image]}`} className="w-auto h-96 object-cover" />

                    <button onClick={()=>{prevImage();}} className="absolute top-1/2 left-10  bg-[rgba(10,10,10,.5)] text-4xl pt-1 pb-2 px-1 rounded-full cursor-pointer hover:text-yellow-500">&#8592; </button>
                    <button onClick={()=>{nextImage();}} className="absolute top-1/2 right-10 bg-[rgba(10,10,10,.5)] text-4xl pt-1 pb-2 px-1 rounded-full cursor-pointer hover:text-yellow-500">&#8594;</button>
                </div>

            </div>

        </div>
}