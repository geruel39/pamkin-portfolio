import { useState } from "react"
import { Button } from "../Button"
import { Link } from "react-router-dom"

export const Home = () => {

    const [mandv, setMandV] = useState(false);
    
    
    return <div className="w-full lg:px-20 px-10 m-auto flex flex-col justify-center fading">
            
            <div className={`h-screen flex justify-center items-center fading ${mandv ? 'hidden' : ''}`} >
    
                <div className="flex flex-col space-y-5">

                    <h1 className="text-5xl text-yellow-500">PAMKIN</h1>
                    <p className="tracking-widest">We are Pamkin, a group of passionate IT students driven by a desire to explore and master cutting-edge technologies, particularly in the field of web applications. Our goal is to continuously learn, grow, and strive toward becoming skilled professionals in the tech industry.</p>
                    <div className="flex space-x-2">

                        <Button text={"Mission & Vision"} click={() => setMandV(true)}/>
                        <Link to="/about"><Button text={"About Us"} /></Link>
                        <Link to="/team"><Button text={"Team Members"} /></Link>
                        <Link to="/project"><Button text={"Projects"} /></Link>
                        <Link to="/contact"><Button text={"Contact Us"} /></Link>

                    </div>
                
                </div>

                <img src="/pumpkin.svg" alt="Pamkin Guild Logo" className="w-96 m-5 lg:block hidden"/>

            </div>

            <div className={`min-h-screen flex md:flex-row flex-col justify-center items-center fading ${mandv ? '' : 'hidden'}`}>

                <div className='fixed left-4 top-16'>
                    <Button text={`GO BACK`} click={() => {setMandV(false)}}/>
                </div>

                <div className="text-center bg-[rgba(10,10,10,.5)] p-10 m-5">

                    <h1 className="md:text-2xl text-xl text-yellow-500 uppercase mb-5">Mission</h1>

                    <p className="tracking-widest lg:text-base md:text-sm text-xs">
                        Our mission is to design and develop web applications that are not only functional and efficient but also intuitive and enjoyable to use. As IT students, we strive to bridge the gap between academic knowledge and real-world application by creating solutions that make a positive impact. We are committed to continuous learning, innovation, and collaboration — both within our team and with the people we build for.
                    </p>

                </div>

                <div className="text-center bg-[rgba(10,10,10,.5)] p-10 m-5">

                    <h1 className="md:text-2xl text-xl text-yellow-500 uppercase mb-5">Vision</h1>

                    <p className="tracking-widest lg:text-base md:text-sm text-xs">
                        We envision becoming a team of future-ready developers who create technology with purpose. By mastering modern web development tools and staying ahead of industry trends, we aim to contribute meaningfully to the digital world. Our goal is to evolve into professionals who build scalable, secure, and human-centered tech — and to inspire others in the process.
                    </p>

                </div>



            </div>
        </div>
}