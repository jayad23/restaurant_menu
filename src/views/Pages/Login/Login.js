import React from 'react'
import { FormGroup, Label, Input, Button, CardImg } from "reactstrap"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import styles from "./Login.module.scss"
import AuthLayout from '../../Common/AutLayout'
import logo from "../../../assets/images/logo/logo_login.png"
import CustomFormGroup from '../../Common/FormGroup/FormGroup'
import CustomButton from '../../Common/CustomButton/CustomButton'

const Login = () => {
    
    return (
        <AuthLayout>
            <div className='text-center'>
                <CardImg className="main-logo" top src={logo} alt="card1" style={{ width: "100px"}}/>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <CustomFormGroup>
                    <Label>Correo Electrónico:</Label>
                    <Input 
                        placeholder='example@example.com'
                    />
                </CustomFormGroup>
                <CustomFormGroup>
                    <div className='d-flex justify-content-between'>
                        <Label>Contraseña:</Label>
                        <Link to="/">
                            <small>Olvidé mi contraseña</small>
                        </Link>
                    </div>
                    <Input 
                        placeholder='example@example.com'
                    />
                </CustomFormGroup>
                <CustomFormGroup extraClassname='text-center'>
                    <CustomButton 
                        text="ingresar"
                        event={() => console.log("Logged")}
                    />
                </CustomFormGroup>
                <CustomFormGroup extraClassname='text-center'>
                    <Label className={styles['enter-text']}>Ingresa con:</Label>
                    <FcGoogle size={26}/>
                </CustomFormGroup>
                <CustomFormGroup extraClassname='text-end'>
                    <Link to="/">
                        <small>Olvidé mi contraseña</small>
                    </Link>
                </CustomFormGroup>
            </form>
        </AuthLayout>
    )
}

export default Login