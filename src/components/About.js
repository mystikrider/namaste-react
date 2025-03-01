import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("timer");
        }, 10000)
        
        return () => { // clean up func, will be called after about comp unmount
            clearInterval(timer)
            
        }
    })

    console.log("About page")

    return(
        <div className="about">
            <h1>About Us</h1>
        </div>
    )
}

export default About;