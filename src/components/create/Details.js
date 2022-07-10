import { useEffect, useState, useContext } from "react";
import {useNavigate, useParams} from 'react-router';
import { createGoal, deleteGoal, updateGoal } from "../../services/Request";
import { Context } from "../../services/Storage";
import styles from "./Details.module.css";

function Details() {
    const {id} =useParams();

    const [form,setForm]=useState({
        details:'',
        events:1,
        period:'day',
        icon:"✈️",
        goal:60,
        term:"2030-01-01",
        completed:50
    });

    const [state, dispach] = useContext(Context);
    const {details,events,period,icon,goal,term,completed}=form;
    const onChange = (event, prop)=>{
        setForm(state =>({...state, [prop]:event.target.value}));
    }
    const browse = useNavigate();
    const goalStorage = state.objects[id];
    
    useEffect(()=>{
        if(!id) return;
        if(!goalStorage){
            return browse('/list');
        } 
        setForm(goalStorage);
    },[id,goalStorage,browse]);
    
    const create = async () => {    
       const newGoal = await createGoal();
       dispach({type:'create', goal: newGoal});
       browse('/list');
    }
    const update = async () => {    
        const updatedGoal = await updateGoal();
        dispach({type:'update', goal: updatedGoal});
        browse('/list');
     }

     const deletegoal = async () => { 
        const deletedId = await deleteGoal();  
        dispach({type:'deletegoal', id: deletedId});
        browse('/list');
     }
    const cancel = () => {    
        browse('/list');
     }
    const frequencyOptions=["day", "week", "month", "year"];
    const iconOptions=["🏃‍♀️","📖","💻","💵","✈️"];
    return (
        <div className="card">
            <form className="p-4">
                <label className="label">
                    Describe your goal
                    <input 
                        className="input" 
                        placeholder="ej. 52 caminatas" 
                        type="text"
                        value={details}
                        //utilizamos eventos
                        onChange={e=>onChange(e,'details')}
                    />
                </label>
                <label className="label">
                    How often you want to meet your goal? <span>(ej. once a week)</span>
                    <div className="flex mb-6">
                        <input
                            className="input" 
                            type="number" 
                            placeholder="ej. 52 caminatas"
                            value={events}
                            onChange={e=>onChange(e,'events')}
                        />
                        <select className="input ml-6" value={period} onChange={e=>onChange(e,'period')}>
                            {frequencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you want to complete this goal?
                    <input 
                        className="input" 
                        type="number"
                        value={goal}
                        onChange={e=>onChange(e,'goal')}
                    />
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input 
                        className="input" 
                        type="date"
                        value={term}
                        onChange={e=>onChange(e,'term')}
                    />
                </label>
                <label className="label">
                    How many times have you already completed this goal?
                    <input 
                        className="input" 
                        type="number"
                        value={completed}
                        onChange={e=>onChange(e,'completed')}
                    />
                </label>
                <label className="label">
                    Choose an icon for this goal.
                    <select className="input" value={icon} onChange={e=>onChange(e,'icon')}>
                       {iconOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.btns}>
                {!id && <button 
                    className="btn btn--black" 
                    onClick={create}
                >Create</button>}
                {id && <button 
                    className="btn btn--black" 
                    onClick={update}
                >Update</button>}
                {id && <button 
                    className="btn btn--red" 
                    onClick={deletegoal}
                >Delete</button>}
                <button 
                    className="btn btn--gray" 
                    onClick={cancel}
                >Cancel</button>
            </div>
        </div>
    );
}

export default Details;