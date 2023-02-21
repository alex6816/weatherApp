import React, { useState } from "react";
import Weather_city from "./Weather_city";

import "../styles/Cities.css";


function Cities () {

    let select = ['London', 'New York', 'Tokyo', 'Delhi'];
    let [weather_london, setWeather_london] = useState([]);
    let [weather_new_york, setWeather_new_york] = useState([]);
    let [weather_tokyo, setWeather_tokyo] = useState([]);
    let [weather_delhi, setWeather_delhi] = useState([]);

    return (
        <>
            <div className="box">
                <h4 className="title">А это погода сегодня на другом конце света:</h4>
                <Weather_city select={select[0]} setWeather_city={setWeather_london} />
                <Weather_city select={select[1]} setWeather_city={setWeather_new_york} />
                <Weather_city select={select[2]} setWeather_city={setWeather_tokyo} />
                <Weather_city select={select[3]} setWeather_city={setWeather_delhi} />
                
                <div className="info">
                    <h4>Лондон</h4>
                    <p>Температура воздуха: { weather_london.temp } &deg;С</p>
                    <p>Ощущается как: { weather_london.feels_like } &deg;С</p>
                    <p>Влажность: { weather_london.humidity } %</p>
                    <p>Давление: { weather_london.pressure } мм рт.ст.</p>
                    <br></br>
                    <h4>Нью-Йорк</h4>
                    <p>Температура воздуха: { weather_new_york.temp } &deg;С</p>
                    <p>Ощущается как: { weather_new_york.feels_like } &deg;С</p>
                    <p>Влажность: { weather_new_york.humidity } %</p>
                    <p>Давление: { weather_new_york.pressure } мм рт.ст.</p>
                    <br></br>
                    <h4>Токио</h4>
                    <p>Температура воздуха: { weather_tokyo.temp } &deg;С</p>
                    <p>Ощущается как: { weather_tokyo.feels_like } &deg;С</p>
                    <p>Влажность: { weather_tokyo.humidity } %</p>
                    <p>Давление: { weather_tokyo.pressure } мм рт.ст.</p>
                    <br></br>
                    <h4>Дели</h4>
                    <p>Температура воздуха: { weather_delhi.temp } &deg;С</p>
                    <p>Ощущается как: { weather_delhi.feels_like } &deg;С</p>
                    <p>Влажность: { weather_delhi.humidity } %</p>
                    <p>Давление: { weather_delhi.pressure } мм рт.ст.</p>
                    <br></br>      
                </div>
            </div>    
        </>  
    )
}

export default Cities;