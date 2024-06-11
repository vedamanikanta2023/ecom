import * as React from "react";
import { Box, IconButton, ListItemText,Grid,ListItem,Typography } from "@mui/material"
import { useAuth } from "../Authentication/Auth";
import { deleteIcon, editIcon } from "../icons";
// import Temp from "./temparature";

const Todos = (props)=>{
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    const [todos,setTodos]=React.useState(parsedTodoList===null?[]:parsedTodoList);
    const [cTodo,setTodo] = React.useState("");
    const [priority,setPriority] = React.useState('high');
    const [isPopupShow,setPopuupShow]=React.useState(false);
    const [editableRec,setEditableRec]=React.useState(undefined);

    const auth = useAuth();

    const logout=()=>{
      auth.logout();
      alert("You have logged out");
    };

    const prioritizeTodos=(arr)=>{
        const highs=[];
        const midiums=[];
        const lows=[];
        arr.forEach((element) =>{
            switch (element.priority) {
                case 'high':
                  highs.push(element);
                  break;
                case 'midium':
                    midiums.push(element);
                    break;
                case 'low':
                  lows.push(element);
                  break;
                default:
                    highs.push(element);
                    
              }
        });
        return [...highs,...midiums,...lows];
    }

    const addTodo=(isEdit=false)=>{
        if (isEdit===false&&cTodo === "") {
            alert("Enter Valid Text");
            return;
        }

        let newTodo=isEdit?editableRec:{do:cTodo,priority};
        let todos1=[...todos,newTodo];
        const prioritizedTodos = prioritizeTodos(todos1);

        setTodos(prioritizedTodos);
        setTodo("");
        setPriority('high')

        if (isEdit){
            setEditableRec(undefined);
        }

        localStorage.setItem("todoList", JSON.stringify(prioritizedTodos));
    }

    const deleteTodo=(index)=>{
        const remainingTodos=todos.filter((todo1,ind)=>index!==ind);
        setTodos(remainingTodos);
        localStorage.setItem("todoList", JSON.stringify(remainingTodos));
    }

    const editTodo = (rec,index)=>{
        setEditableRec(rec);
        setPopuupShow(true);
        deleteTodo(index);
        setTodo(rec.do);
        setPriority(rec.priority);
    }
 
    const popup = ()=>(
        <div className="popup">
            <div className='flex flex-col max-w-sm border p-4 rounded-lg bg-green-100 popup-innter-container'>
                <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Edit Todo</h1>
                <select width="100%"
                    labelId="Prioritize"
                    id="demo-simple-select"
                    value={priority}
                    size='medium'
                    className='bg-transparent mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    
                    onChange={(e)=>setPriority(e.target.value)}
                >
                    <option value={"hight"}>High</option>
                    <option value={"midium"}>Midium</option>
                    <option value={"low"}>Low</option>
                </select>
                <input
                    width={'100%'}
                    className='bg-transparent mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder="Enter Todo here" id="outlined-basic" variant="outlined" onChange={(e)=>setTodo(e.target.value)} value={cTodo}
                    />

                    <div className="p-1">
                    <button
                    variant='outlined'
                    className='py-2 mr-2 col-span-2 md:col-span-1 px-5 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
                    onClick={()=>{
                        setPopuupShow(false);
                        addTodo(true);
                    }}>
                        Cancel
                        </button>
                        <button
                    variant='outlined'
                    className='py-2 col-span-2 md:col-span-1 px-5 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
                    onClick={()=>{setPopuupShow(false);
                    addTodo()
                    }}>
                        Add Todo
                        </button>
                </div>
                    </div>

                
        </div>
        )

    return(
        <div>
        <div className='logout-button'>
            <button className='py-2 mr-3 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={props.goback}>Goback</button>
            <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={logout}>Logout</button>
        </div>
            {/* <Temp /> */}
            <Box>
        {
            !!!isPopupShow &&
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
            <select width="100%"
                labelId="Prioritize"
                id="demo-simple-select"
                value={priority}
                size='medium'
                className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                
                onChange={(e)=>setPriority(e.target.value)}
            >
                <option value={"hight"}>High</option>
                <option value={"midium"}>Midium</option>
                <option value={"low"}>Low</option>
            </select>
            <input
                width={'100%'}
                className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder="Enter Todo here" id="outlined-basic" variant="outlined" onChange={(e)=>setTodo(e.target.value)} value={cTodo}
                />
        
            <button
                variant='outlined'
                className='py-2 col-span-2 md:col-span-1 px-5 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
                onClick={()=>{addTodo()}}>
                    Add Todo
                    </button>
            </div>}
            <Grid item xs={12}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Todos List
            </Typography>
                <Grid container spacing={1}>
                {
                    todos.map((todo,ind)=><Grid key={ind} item xs={12} md={6} paddingRight="8px" style={{background:'#ffcdd2',borderLeft:'1px solid black',marginTop:2}}><ListItem
                    
                    secondaryAction={
                        <>
                    <IconButton title="Edit Todo" style={{background:'#e1bee7e',marginRight:5}} onClick={()=>editTodo(todo,ind)} edge="end" aria-label="delete">
                        {editIcon}
                    </IconButton>
                    <IconButton title="Delete Todo" style={{background:'#e1bee7e'}}  onClick={()=>deleteTodo(ind)} edge="end" aria-label="delete">
                        {deleteIcon}
                    </IconButton>
                        </>
                    }>
                    <ListItemText
                        primary={todo.do}
                    />
                    </ListItem></Grid>)
                }
                </Grid>
            </Grid>
            </Box>
            {isPopupShow && popup()}
        </div>
    )
}

export default Todos;