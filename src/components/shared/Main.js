import styles from './Main.module.css';
import Vinculo from './Vinculo';
import {ReactComponent as ListSVG} from '../../img/list.svg';
import {ReactComponent as CreateSVG} from '../../img/create.svg';
function Main({children}){
    return(
        <div className={styles.content}>
            <aside className={styles.aside}>
                <Vinculo
                    to="/list" 
                    text="List"
                    Icon={ListSVG}
                />
                 <Vinculo 
                    to="/create" 
                    text="Create"
                    Icon={CreateSVG}
                />
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default Main;