import styles from './Main.module.css';
import Link from './Link';
import {ReactComponent as ListSVG} from '../../img/list.svg';
import {ReactComponent as CreateSVG} from '../../img/create.svg';
function Main({children}){
    return(
        <div className={styles.content}>
            <aside className={styles.aside}>
                <Link 
                    href="/list" 
                    text="List"
                    Icon={ListSVG}
                />
                 <Link 
                    href="/create" 
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