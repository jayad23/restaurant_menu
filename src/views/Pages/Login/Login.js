import React from 'react'
import { Label, Input, CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import styles from './Login.module.scss'
import AuthLayout from '../../Common/AutLayout'
import logo from '../../../assets/images/logo/logo_login.png'
import CustomFormGroup from '../../Common/FormGroup/FormGroup'
import CustomButton from '../../Common/CustomButton/CustomButton'
import Error from '../../Common/ErrorMessage/ErrorMessage'
import InputPasswordToggle from '@components/input-password-toggle'

const Login = (props) => {
  const { handleSubmit, values, setFieldValue, errors } = props

  return (
    <AuthLayout>
      <div className='text-center'>
        <CardImg
          className='main-logo'
          top
          src={logo}
          alt='card1'
          style={{ width: '100px' }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <CustomFormGroup>
          <Label>Correo Electrónico:</Label>
          <Input
            value={values?.email || ''}
            placeholder='example@example.com'
            onChange={(e) => setFieldValue('email', e.target.value)}
          />
          <Error errorMessage={errors?.email} />
        </CustomFormGroup>
        <CustomFormGroup>
          <div className='d-flex justify-content-between'>
            <Label>Contraseña:</Label>
            <Link to='/'>
              <small>Olvidé mi contraseña</small>
            </Link>
          </div>
          <InputPasswordToggle
            htmlFor='basic-default-password'
            onChange={(e) => setFieldValue('password', e.target.value)}
          />
          <Error errorMessage={errors?.password} />
        </CustomFormGroup>
        <CustomFormGroup extraClassname='text-center'>
          <CustomButton type='submit' text='ingresar' event={undefined} />
        </CustomFormGroup>
        <CustomFormGroup extraClassname='text-center'>
          <Label className={styles['enter-text']}>Ingresa con:</Label>
          <FcGoogle size={26} />
        </CustomFormGroup>
        <CustomFormGroup extraClassname='text-end'>
          <Link to='/'>
            <small>Olvidé mi contraseña</small>
          </Link>
        </CustomFormGroup>
      </form>
    </AuthLayout>
  )
}

export default Login
