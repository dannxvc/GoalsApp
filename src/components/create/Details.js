import { useEffect, useState,useContext } from "react";
import { Context } from "../../services/Storage";
import styles from "./Details.module.css";
import {useNavigate} from 'react-router';
function Details() {
    //hooks
    const [form,setForm]=useState({
        details:'',
        events:'',
        period:'',
        icon:"✈️",
        goal:60,
        term:"2030-01-01",
        completed:50
    });
    const [state, dispach] = useContext(Context);
    
    //extraer cada uno de los elementos del estado
    const {details,events,period,icon,goal,term,completed}=form;
    //create onChange function
    const onChange = (event, prop)=>{
        setForm(estate =>({...estate, [prop]:event.target.value}));
        //es asincrona, es decir cuando estamos imprimiendo esto, el estado no c
        //ha cambiado aun
        //console.log(form);
    }
    //para ver el cambio usamos useEffect
    useEffect(()=>{
       // console.log(form);
    },[form]);
    const browse = useNavigate();

    //creamos la funcion crear
    const create = async() => {    
       // console.log(form);\
       dispach({type:'create', goal: form});
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
                        class="input" 
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
                            class="input" 
                            type="number" 
                            placeholder="ej. 52 caminatas"
                            value={events}
                            onChange={e=>onChange(e,'events')}
                        />
                        <select class="input ml-6" value={period} onChange={e=>onChange(e,'period')}>
                            {frequencyOptions.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you want to complete this goal?
                    <input 
                        class="input" 
                        type="number"
                        value={goal}
                        onChange={e=>onChange(e,'goal')}
                    />
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input 
                        class="input" 
                        type="date"
                        value={term}
                        onChange={e=>onChange(e,'term')}
                    />
                </label>
                <label className="label">
                    How many times have you already completed this goal?
                    <input 
                        class="input" 
                        type="number"
                        value={completed}
                        onChange={e=>onChange(e,'completed')}
                    />
                </label>
                <label className="label">
                    Choose an icon for this goal.
                    <select class="input" value={icon} onChange={e=>onChange(e,'icon')}>
                       {iconOptions.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.btns}>
                <button className="btn btn--black" onClick={create} >Create</button>
                <button className="btn btn--gray">Cancel</button>
            </div>
        </div>
    );
}

export default Details;