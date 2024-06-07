import { Box, Grid, Typography } from "@mui/material";

const weatherIcon = <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cloud-moon makestyles-icon" viewBox="0 0 16 16">
<path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
<path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
</svg>;

const upArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg>;

const downArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>;

const locatoinIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-geo" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
</svg>;

const Temp =(props)=>{
const {weather} = props;

    return<Box display="flex" flexDirection={'column'} justifyContent="space-between" padding={5}>
        <div>
            <Grid container style={{alignItems:"center",marginBottom:10}}>
                <Grid item xs={9} md={6}>
                    <Typography className="flex items-center" textAlign={"start"}>
                        <span>{weatherIcon}</span>&nbsp;
                        {weather&&weather.temperature?`${Math.ceil(weather.temperature/10)}°C`:"NO Data"}
                    </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Box display="flex" justifyContent={"center"} alignItems={"flex-end"} flexDirection={'column'}>
                        <Typography>
                            <span>{upArrowIcon}</span>
                            {weather&&weather.temp_max?`${Math.ceil(weather.temp_max/10)}°C` :''}
                            
                        </Typography>
                        <Typography alignItems={"center"}>
                            <span>{downArrowIcon}</span>
                            {weather&& weather.temp_min?`${Math.floor(weather.temp_min/10)}°C` :''}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        <span>{locatoinIcon}</span>
                    {weather&&weather.name?weather.name:""}
                    </Typography>
                </Grid>
            </Grid>
        </div>
        <Grid textAlign={'start'}>
            <p  className="description-sml md:description-med">
                {weather&&weather.weatherDescription?String(weather.weatherDescription).toUpperCase():""}
            </p>
        </Grid>
        {props.user?<Typography >{`Dear ${(props.user).toUpperCase()}s, please plan you schedule according to the weather`}</Typography>:null}
        <p style={{opacity:'0.1'}}>Thank you, this Application build by Vedamanikanta</p>
    </Box>
  }

  export default Temp;