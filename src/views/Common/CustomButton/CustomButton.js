import React, {Fragment} from 'react'
import { Button } from 'reactstrap'
import styles from "./Custombutton.module.scss"

const CustomButton = (props) => {
    const { text, event, type } = props
    return (
        <Fragment>
            <Button.Ripple type={type} onClick={event} className={styles['login-custom-button']}>
                {text}
            </Button.Ripple>
        </Fragment>
    )
}

export default CustomButton