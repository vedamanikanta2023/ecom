import * as React from "react";
import { Box, Button,MenuItem, IconButton, ListItemText,TextField,Grid,ListItem,Typography } from "@mui/material"
import { useAuth } from "../Authentication/Auth";
import Select from '@mui/material/Select';
import Temp from "./temparature";

const deleteIcon= <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>

const Todos = (props)=>{
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    const [todos,setTodos]=React.useState(parsedTodoList===null?[]:parsedTodoList);
    const [cTodo,setTodo] = React.useState("");
    const [priority,setPriority] = React.useState('high');

    const auth = useAuth();

    const logout=()=>{
      auth.logout();
      alert("You have logged out");
    };

    const prioritize=(arr)=>{
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

    const addTodo=()=>{
        if (cTodo === "") {
            alert("Enter Valid Text");
            return;
        }

        let newTodo={do:cTodo,priority};
        let todos1=[...todos,newTodo];
        const prioritizedTodos = prioritize(todos1);

        setTodos(prioritizedTodos);
        setTodo("");
        setPriority('high')

        localStorage.setItem("todoList", JSON.stringify(prioritizedTodos));
    }

    const deleteTodo=(index)=>{
        const remainingTodos=todos.filter((todo1,ind)=>index!==ind);
        setTodos(remainingTodos);
        localStorage.setItem("todoList", JSON.stringify(remainingTodos));
    }

    return(
        <Box>
            <Box display={"flex"} justifyContent="end" padding="10">
                <Button onClick={logout} >Logout</Button>
            </Box>
            <Temp />
            <Box>
                <Grid container  spacing={2}
                 >
                    <Grid item xm={3} md={3}>
                        <Select width="100%"
                            labelId="Prioritize"
                            id="demo-simple-select"
                            value={priority}
                            onChange={(e)=>setPriority(e.target.value)}
                        >
                            <MenuItem value={"high"}>High</MenuItem>
                            <MenuItem value={"midium"}>Midium</MenuItem>
                            <MenuItem value={"low"}>Low</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xm={9} md={6}>
                        <TextField placeholder="Enter Todo here" id="outlined-basic"variant="outlined" onChange={(e)=>setTodo(e.target.value)} value={cTodo} />
                    </Grid>
                    <Grid item xm={12} md={3}
                    //  width={'100vw'}
                      style={{background:"#ffebee",marginTop:10}}>
                        <Button onClick={addTodo}>Add Todo</Button>
                    </Grid>
                </Grid>
            <Grid item xs={12}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Todos List
            </Typography>
                <Grid container spacing={1}>
                {
                    todos.map((todo,ind)=><Grid key={ind} item xs={12} md={6} paddingRight="8px" style={{background:'#ffcdd2',borderLeft:'1px solid black',marginTop:2}}><ListItem
                    secondaryAction={
                    <IconButton style={{background:'#e1bee7e'}}  onClick={()=>deleteTodo(ind)} edge="end" aria-label="delete">
                        {deleteIcon}
                    </IconButton>
                    }>
                    <ListItemText
                        primary={todo.do}
                        // secondary={secondary ? 'Secondary text' : null}
                    />
                    </ListItem></Grid>)
                }
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}

export default Todos;