import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../services/Storage";
import Details from "../create/Details";

function Modal() {
    const {id} =useParams();
    const [state, dispach] = useContext(Context);
    return (  
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
            {JSON.stringify(state.objects[id])}
            <Details></Details>
        </div>
    );
}

export default Modal;