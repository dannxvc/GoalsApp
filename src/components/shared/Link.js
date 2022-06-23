import styles from './Link.module.css';
function Link({Icon,text,href}){
    return(
        <div>
            <a href={href} className={styles.link}> 
                <Icon className={styles.icon}/>
                {text &&<span className={styles.text}>{text}</span>}
            </a>
        </div>
    );
}
 export default Link;