import styles from "./ErrorMessage.module.scss"

const Error = (props) => {
    const { errorMessage } = props
    return <p className={styles['error-msn']}>{errorMessage}</p>
}

export default Error