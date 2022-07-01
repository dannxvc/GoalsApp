import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../services/Storage";
import Goal from "./Goal";

function List() {
    //hook useContext
    //const test = useContext(Context);
   // console.log(test);
    const [state, dispach] = useContext(Context);
    
   return ( 
        //renderizar the goals
        //listMock.map(goal =><Goal key={goal.id}{...goal}></Goal>)
        <>
            {state.order.map(id =><Goal key={id}{...state.objects[id]}></Goal>)}
            <Outlet/>
        </>
    );
}

export default List;

