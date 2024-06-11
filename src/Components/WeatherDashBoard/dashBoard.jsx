import * as React from 'react';
import Temp from '../Todos/temparature';
import { useAuth } from '../Authentication/Auth';
import './dashBoard.css';

const WeatherDashboard = (props)=>{
    const [userType,setUserType] = React.useState("farmer");
    const [locationName,setLocationName] = React.useState('');
    const [weather,setWeather]=React.useState(undefined);
    const [errorM,setError]= React.useState(undefined);
    const [fetch1,setFetch] = React.useState(true);

    const auth = useAuth();
    // console.log('weather - - ->',weather)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationName?locationName:"Hyderabad"}&appid=f00c38e0279b7bc85480c3fe775d518c`;

    const hideErrorMsg = setTimeout(() => {
        setError(undefined);
    }, 2000*3);

    const fetchTemp = ()=>{
        try{
          fetch(apiUrl)
        .then(response=>response.json())
        .then(data=>{
        // console.log('data',data);
        if (data.cod===200){
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const name = data.name;
            const responseObj = {...data.main,}
            setWeather({weatherDescription,temperature,name,...responseObj});
        }else{
            setError(data);
            hideErrorMsg()
        }
        })
        .catch(e=>{
            // console.log(e);setErrorMessage(e);
        })  
        }
        catch(err) {
            setError(err.message);
            hideErrorMsg()
        }
        
        if(fetch1){
            setFetch(false);
        }
    }

    React.useEffect(()=>{
        if (fetch1){
            fetchTemp();
        }
    })

    const logout = ()=>{
        auth.logout();
        alert("You have logged out")
    }

    return<div className='dashboard p-10'>
        {
            errorM && <h1 className='error-message'>
                {errorM&&errorM.message?errorM.message:''}
            </h1>
            }
            <div className='logout-button'>
                <button className='py-2 mr-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={props.goback}>Goback</button>
                <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={logout}>Logout</button>
            </div>
        
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
                    onClick={()=>{
                        fetchTemp();
                        setLocationName('');}}>
                        Get Weather Report
                        </button>
        </div>
        <Temp weather={weather} user={userType} />
    </div>
}

export default WeatherDashboard;