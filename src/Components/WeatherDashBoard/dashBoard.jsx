import * as React from 'react';
import Temp from '../Todos/temparature';
import { Grid} from '@mui/material';
import { useAuth } from '../Authentication/Auth';
import './dashBoard.css';

const WeatherDashboard = (props)=>{
    const [userType,setUserType] = React.useState("farmer");
    const [locationName,setLocationName] = React.useState('');
    const [searchLocation,setSearchLocation] = React.useState('');

    const auth = useAuth()

    const logout = ()=>{
        auth.logout();
        alert("You have logged out")
    }

    return<div className='dashboard p-10'>
        <button className='logout-button py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={logout}>Logout</button>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <select width="100%"
                    labelId="Prioritize"
                    id="demo-simple-select"
                    value={userType}
                    size='medium'
                    className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    onChange={(e)=>setUserType(e.target.value)}
                >
                    <option value={"planner"}>Planners</option>
                    <option value={"farmer"}>Farmers</option>
                    <option value={"traveller"}>Travellers</option>
                </select>
                <input
                    width={'100%'}
                    className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder="Enter Todo here" 
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e)=>setLocationName(e.target.value)}
                    value={locationName} />
            
                <button
                    variant='outlined'
                    className='py-2 col-span-2 md:col-span-1 px-5 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
                    onClick={()=>{setSearchLocation(locationName);setLocationName('');}}>
                        Get Weather Report
                        </button>
        </div>
        <Temp location={searchLocation} user={userType} />
    </div>
}

export default WeatherDashboard;