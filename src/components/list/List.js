import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../services/Storage";
import Goal from "./Goal";

function List() {
  const [state] = useContext(Context);
  return (
    <>
      {state.order.map((id) => (
        <Goal key={id} {...state.objects[id]}></Goal>
      ))}
      <Outlet />
    </>
  );
}

export default List;
