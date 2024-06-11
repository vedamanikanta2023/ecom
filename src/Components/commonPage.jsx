import { useNavigate } from "react-router-dom"

const CommonPage = (props)=>{
    const gotoDashboard = ()=>navigate("/dashboard");
    const navigate = useNavigate();

    const gotoTodo = ()=>navigate("/todo");

    return(
    <div>
            <button onClick={gotoDashboard} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Goto Dashboard</button>
            <button onClick={gotoTodo} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Goto Todo</button>
    </div>
)
}

export default CommonPage;