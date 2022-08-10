import React from 'react'
import CustomButton from './CustomButton'

const CustomButtonContainer = (props) => {
    const childProps = {
        ...props
    }
    return <CustomButton {...childProps}/>
}

export default CustomButtonContainer