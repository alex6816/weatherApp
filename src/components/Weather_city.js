import React,  { useEffect } from "react";
import axios from "axios";

const API_KEY = '59a6814c59e36ef102d572584c46dc5d';

function Weather_city (props) {

 
    const API_City =`https://api.openweathermap.org/data/2.5/forecast?q=${props.select}&units=metric&lang=ru&appid=${API_KEY}`

    

    if ( props.select != ''  ) {     
        useEffect(() => {
                axios.get(API_City).then( res =>{
                    props.setWeather_city(res.data.list[0].main)
            });
        },[]);
    } 
    
            
}

export default Weather_city;