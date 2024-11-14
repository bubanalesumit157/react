import styles from './Button.module.css'
function Button(){

    const styles = {
    
        backgroundColor:" hsl(0, 67%, 30%)",
        color: "aliceblue",
        padding:" 10px 20p",
        borderRadius:" 5px",
        border: "none",
        cursor: "pointer",
        
    }
    return(
        // <button className={styles.btn}>Click me</button>  using modules
        <button style={styles}>Click me</button>
    )

}
export default Button