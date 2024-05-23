import * as React from 'react';
import Temp from '../Todos/temparature';
import { Box, Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import dashBoardStyles from './weatherDashboardStyles';
import { useAuth } from '../Authentication/Auth';

const WeatherDashboard = (props)=>{
    const classes = dashBoardStyles();

    const [userType,setUserType] = React.useState("farmer");
    const [locationName,setLocationName] = React.useState('');
    const [searchLocation,setSearchLocation] = React.useState('');

    const auth = useAuth()

    const logout = ()=>{
        auth.logout();
        alert("You have logged out")
    }

    return<div className={classes.mainContainer}>
        {/* <h1>Weather Dashboard</h1> */}
        <Grid container>
            <Grid
            marginTop="10px"
                    item
                    xs={6}
                    lg={4}>
                <Select width="100%"
                    labelId="Prioritize"
                    id="demo-simple-select"
                    value={userType}
                    size='medium'
                    onChange={(e)=>setUserType(e.target.value)}
                    className={classes.input}
                >
                    <MenuItem value={"planner"}>Planners</MenuItem>
                    <MenuItem value={"farmer"}>Farmers</MenuItem>
                    <MenuItem value={"traveller"}>Travellers</MenuItem>
                </Select>
            </Grid>
            <Grid
            marginTop="10px"
                    item
                    xs={6}
                    lg={4}>
                <TextField
                width={'100%'}
                    className={classes.input} 
                    placeholder="Enter Todo here" 
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e)=>setLocationName(e.target.value)}
                    value={locationName} />
            </Grid>
            <Grid 
            marginTop="10px"
                    item
                    xs={12}
                    lg={4}>
                <Button
                    className={classes.button}
                    variant='outlined'
                    onClick={()=>{setSearchLocation(locationName);setLocationName('');}}>
                        Get Weather Report
                        </Button>
            </Grid>
        </Grid>
        <Button onClick={logout}>Logout</Button>
        <Temp location={searchLocation} user={userType} />
    </div>
}

export default WeatherDashboard;