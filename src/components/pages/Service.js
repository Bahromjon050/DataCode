import React from "react";
import { AllHeader, Presence, ServiceCards, Work } from "../All";


const Service = () =>{
    let ser = {
        name:"What we can offer your SaaS Business",
        text:"We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our <br /> team has worked with Nordic, European and American tech unicorns."
    }

    return(
        <>
        <AllHeader data={ser}/>
        <ServiceCards />
        <Work />
        <Presence />
        </>
    )
}
export default Service;