import React from "react";
import { AllHeader, TeamCards } from "../All";

const Team = () =>{
    let ser = {
        name:"The Team",
        text:"We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns."
    }
    return(
        <>
        <AllHeader data={ser}/>
        <TeamCards />
        </>
    )
}
export default Team; 