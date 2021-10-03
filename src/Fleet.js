import React,{useState} from "react";
import axios from "axios";
export const FleetManagement=()=>{
const cleanfleet={drivers:"",distance:'', averageSpeed:'',workingHours:'',travelTime:''};
const [fleet, setFleet]=useState(cleanfleet);
const gettimeNeeded=()=>{
    const time = axios.get("http://localhost:8080?"+fleet.drivers)
        .then(response)=>{
        setFleet(response.data.FleetDTO)
    }
}
}