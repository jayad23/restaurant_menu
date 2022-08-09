import React from 'react'
import {
    Row,
    Col,
    CardTitle,
    CardText,
    FormGroup,
    Label,
    Input,
    Button,
    CardBody,
    Card
} from "reactstrap"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Mail, GitHub } from "react-feather"
// import styles from "./Login.module.scss"
// import classnames from 'classnames'
import AuthLayout from '../../Common/AutLayout'

const Login = () => {
    const InputPasswordToggle = () => {

    }
    return (
        <AuthLayout>
            <h1>Login View</h1>
        </AuthLayout>
        // <Row className='d-flex justify-content-center' style={{ border: "1px solid red"}}>
        //     <Col sm="4">
        //         <Card>
        //             <div className='text-center'>
        //                 <CardTitle tag="h2" className="fw-bold mb-1">
        //                     Welcome to Vuexy! 👋
        //                 </CardTitle>
        //                 <CardText className="mb-2">
        //                     Please sign-in to your account and start the adventure
        //                 </CardText>
        //             </div>
        //             <CardBody>
        //                 <form onSubmit={(e) => e.preventDefault()}>
        //                     <FormGroup className={styles['login-mb-3']}>
        //                         <Label>Correo Electrónico:</Label>
        //                         <Input 
        //                             placeholder='example@example.com'
        //                         />
        //                     </FormGroup>
        //                     <FormGroup className={styles['login-mb-3']}>
        //                         <div className='d-flex justify-content-between'>
        //                             <Label>Contraseña:</Label>
        //                             <Link to="/">
        //                                 <small>Olvidé mi contraseña</small>
        //                             </Link>
        //                         </div>
        //                         <Input 
        //                             placeholder='example@example.com'
        //                         />
        //                     </FormGroup>
        //                     <FormGroup className={classnames(styles['login-mb-3'], 'text-center')}>
        //                         <Button.Ripple className={styles['login-custom-button']}>
        //                             INGRESAR
        //                         </Button.Ripple>
        //                     </FormGroup>
        //                 </form>
        //             </CardBody>
        //         </Card>               
        //     </Col>
        // </Row>
    )
}

export default Login