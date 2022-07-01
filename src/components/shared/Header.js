import styles from'./Header.module.css';
import Vinculo from './Vinculo';
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
                <Vinculo 
                    to="/profile" 
                    Icon={Profile}
                />
            </nav>
        </header>
    );
}
export default Header;