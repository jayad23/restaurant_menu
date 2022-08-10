import { FormGroup } from "reactstrap"
import styles from "./FormGroup.module.scss"
import classnames from "classnames"

const CustomFormGroup = (props) => {
    const { children, extraClassname } = props
    return (
        <FormGroup className={classnames(styles['login-form-group'], extraClassname)}>
            {children}
        </FormGroup>
    )
}

export default CustomFormGroup