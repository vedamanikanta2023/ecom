import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=LOCATION&appid=f00c38e0279b7bc85480c3fe775d518c`;

const weatherIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-moon" viewBox="0 0 16 16">
<path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
<path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
</svg>

const Temp =(props)=>{
    const [weather,setWeather]=useState(undefined);

    const fetchTemp = ()=>{
        fetch(apiUrl)
        .then(response=>response.json())
        .then(data=>{
        console.log('data',data);
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
           setWeather({weatherDescription,temperature});
        }).catch(e=>console.log("Something went wrong",e))
    }

    useEffect(()=>{
        fetchTemp();
    },[])

    return<Box display="flex" justifyContent="space-between" padding={5}>
        <Typography>
            <span>{weatherIcon}</span>&nbsp;
            {weather&&weather.temperature?weather.temperature:"NO Data"}
        </Typography>
        <Typography variant="h1" style={{fontSize:18}}>
            {weather&&weather.weatherDescription?weather.weatherDescription:""}
        </Typography>
    </Box>
  }

  export default Temp;