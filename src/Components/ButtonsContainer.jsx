import styles from './ButtonsContainer.module.css'

const ButtonsContainer = ({onButtonClick}) => {
    
    const buttonNames = ['1','2','3','4','5','6','7','8','9','+','0','-','*','.','/','C','=']

    return <div className={styles.buttonsContainer}>
        {buttonNames.map(button => <button className={styles.button} onClick={() => onButtonClick(button)}>{button}</button>)}
    </div>
}

export default ButtonsContainer