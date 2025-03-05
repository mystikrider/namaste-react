import { useEffect } from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";

const About = () => {

    // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur")

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
            {/* <div>
                {error ? ("Theres'an Error") : isLoading ? ("Loading..") : data ? (<div>{data.species.name}</div>) : null}
            </div> */}
        </div>
    )
}

export default About;