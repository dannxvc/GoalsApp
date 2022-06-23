import styles from'./Header.module.css';
import Link from './Link';
import {ReactComponent as Logo} from '../../img/logo.svg';
import {ReactComponent as Profile} from '../../img/profile.svg';
function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo className={styles.ioon}/>
                <a className={styles.title} href="/">Metas App</a>
            </div>
            <nav>
                <Link 
                    href="/profile" 
                    Icon={Profile}
                />
            </nav>
        </header>
    );
}
export default Header;