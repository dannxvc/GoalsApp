import { Link } from 'react-router-dom';
import styles from './Goal.module.css';
/* import {ReactComponent as IconRun} from '../../img/icon-run.svg'; */

/* const goalMock ={
    "id":"1",
    "details":"Correr por 30 minutos",
    "period":"day",
    "events":1,
    "icon":<IconRun/>,
    "goal":365,
    "term":"2030-01-01",
    "completed":"100"
}; */

function Goal({id,icon, events,period,details,goal,completed}) {
    /* const {icon, events,period,details,goal,completed} =goalMock; */
    return ( 
        <Link to={`/list/${id}`} className={styles.goal + " card"}>
            <div className='flex items-center'>
                <div className={styles.icon}>
                   {icon}
                </div>
                <p className="text-xl ml-5 mr-10">
                    {events} 
                    <sub className='text-xs text-gray-500'>
                        /{period}
                    </sub>
                </p>
                <p>{details}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completed} of {goal}</p>
                    <div className={styles.bar1}>
                        <div 
                        style={{width:`${Math.round((completed/goal)*100)}%`}}
                        className={styles.bar2}>
                        </div>
                    </div>
                </div>
                <button className='btn btn--gray'>Completed</button>
            </div>
        </Link>
        
    );
}

export default Goal;