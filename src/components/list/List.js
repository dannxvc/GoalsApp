import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../services/Storage";
import { requestGoals } from "../../services/Request";
import Goal from "./Goal";

function List() {

    const [state, dispach] = useContext(Context);
    useEffect(() => {
        (async()=>{
            const goals = await requestGoals();
            dispach({type: 'add', goals});
        })();
    },[]);
    
   return ( 
        <>
            {state.order.map(id =><Goal key={id}{...state.objects[id]}></Goal>)}
            <Outlet/>
        </>
    );
}

export default List;

