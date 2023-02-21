import React, { useState } from "react";

import Geo_location from "./Geo_location";
import Weather from "./Weather";

import "../styles/Local_weather.css";

function Local_weather() {
    const current = new Date();
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };

    let [lat, setLat] = useState(0);
    let [lon, setLon] = useState(0);
    let [yourCity, setYourCity] = useState('');

    let [weather_current, setWeather_current] = useState([]);
    let [weather_tomorrow, setWeather_tomorrow] = useState([]);
    let [weather_two_days, setWeather_two_days] = useState([]);
    let [weather_three_days, setWeather_three_days] = useState([]);
    let [weather_four_days, setWeather_four_days] = useState([]);
    let [select, onChange] = useState('today')
    let elem = document.getElementById("result");

    return (
        <>
            <Geo_location lat={lat} setLat={setLat} lon={lon} setLon={setLon} />
            <Weather {...{lat, lon, yourCity, setYourCity, weather_current, setWeather_current,
                    weather_tomorrow, setWeather_tomorrow, weather_two_days, setWeather_two_days,
                    weather_three_days, setWeather_three_days, weather_four_days, setWeather_four_days}} />
            <div className="head">
                <h4>Ваше местоположение: { yourCity.name }</h4>
                <div className="info"><span>Прогноз погоды</span><select onChange={e => {select=e.target.value;}}>
                    <option value="today" >на сегодня</option>
                    <option value="fivedays">на пять дней</option>    
                </select>
                <button onClick={() => { select === "today" ?
                    elem.innerHTML = (
                        `<h4>Сегодня -  ${current.toLocaleDateString("ru", options)}</h4>
                        <p>Температура воздуха: ${ weather_current.temp } &degС</p>
                        <p>Ощущается как: ${ weather_current.feels_like } &degС</p>
                        <p>Влажность: ${ weather_current.humidity } %</p>
                        <p>Давление: ${ weather_current.pressure } мм рт.ст.</p>`
                    ) : elem.innerHTML = (
                        `<h4>${current.toLocaleDateString("ru", options)}</h4>
                        <p>Температура воздуха: ${ weather_current.temp } &degС</p>
                        <p>Ощущается как: ${ weather_current.feels_like } &degС</p>
                        <p>Влажность: ${ weather_current.humidity } %</p>
                        <p>Давление: ${ weather_current.pressure } мм рт.ст.</p><br>
                        <h4>${new Date(current.getTime() + (24 * 60 * 60 * 1000)).toLocaleDateString("ru", options)}</h4>
                        <p>Температура воздуха: ${ weather_tomorrow.temp } &degС</p>
                        <p>Ощущается как: ${ weather_tomorrow.feels_like } &degС</p>
                        <p>Влажность: ${ weather_tomorrow.humidity } %</p>
                        <p>Давление: ${ weather_tomorrow.pressure } мм рт.ст.</p><br>
                        <h4>${new Date(current.getTime() + (48 * 60 * 60 * 1000)).toLocaleDateString("ru", options)}</h4>
                        <p>Температура воздуха: ${ weather_two_days.temp } &degС</p>
                        <p>Ощущается как: ${ weather_two_days.feels_like } &degС</p>
                        <p>Влажность: ${ weather_two_days.humidity } %</p>
                        <p>Давление: ${ weather_two_days.pressure } мм рт.ст.</p><br>
                        <h4>${new Date(current.getTime() + (72 * 60 * 60 * 1000)).toLocaleDateString("ru", options)}</h4>
                        <p>Температура воздуха: ${ weather_three_days.temp } &degС</p>
                        <p>Ощущается как: ${ weather_three_days.feels_like } &degС</p>
                        <p>Влажность: ${ weather_three_days.humidity } %</p>
                        <p>Давление: ${ weather_three_days.pressure } мм рт.ст.</p><br>
                        <h4>${new Date(current.getTime() + (96 * 60 * 60 * 1000)).toLocaleDateString("ru", options)}</h4>
                        <p>Температура воздуха: ${ weather_four_days.temp } &degС</p>
                        <p>Ощущается как: ${ weather_four_days.feels_like } &degС</p>
                        <p>Влажность: ${ weather_four_days.humidity } %</p>
                        <p>Давление: ${ weather_four_days.pressure } мм рт.ст.</p>`
                    ); 
                }}>Показать</button>
                </div>
             </div>

             <p id="result">Здесь Вы можете узнать прогноз погоды в Вашем регионе. Выберите период времени, который Вас интересует и нажмите кнопку "Показать"</p>
                     
        </>
    );
}

export default Local_weather;