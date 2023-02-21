import React,  { useEffect } from "react";
import axios from "axios";

const API_KEY = '59a6814c59e36ef102d572584c46dc5d';

function Weather (props) {

 
    const API_Sity =`https://api.openweathermap.org/data/2.5/forecast?lat=${
        props.lat}&lon=${props.lon}&units=metric&lang=ru&APPID=${API_KEY}`

    

    if ( props.lat != 0 && props.lon !=0 ) {     
        useEffect(() => {
                axios.get(API_Sity).then( res =>{
                    props.setYourCity(res.data.city);
                    props.setWeather_current(res.data.list[0].main)
                    props.setWeather_tomorrow(res.data.list[7].main)
                    props.setWeather_two_days(res.data.list[15].main)
                    props.setWeather_three_days(res.data.list[23].main)
                    props.setWeather_four_days(res.data.list[31].main)
                
            });
        },[props.lat, props.lon]);
    } 
    
            
}

export default Weather;