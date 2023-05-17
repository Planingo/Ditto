import { theme } from 'antd'
import { useEffect } from 'react'

const { useToken } = theme

export const Colors = () => {
    const { token } = useToken()

    console.log()

    useEffect(() => {
        document.body.style.setProperty('--PRIMARY-180', token.blue9)
        document.body.style.setProperty('--PRIMARY-160', token.blue8)
        document.body.style.setProperty('--PRIMARY-140', token.blue7)
        document.body.style.setProperty('--PRIMARY-120', token.blue6)
        document.body.style.setProperty('--PRIMARY', token.blue5)
        document.body.style.setProperty('--PRIMARY-080', token.blue4)
        document.body.style.setProperty('--PRIMARY-060', token.blue3)
        document.body.style.setProperty('--PRIMARY-040', token.blue2)
        document.body.style.setProperty('--PRIMARY-020', token.blue1)
        document.body.style.setProperty('--SECONDARY-180', token.orange9)
        document.body.style.setProperty('--SECONDARY-160', token.orange8)
        document.body.style.setProperty('--SECONDARY-140', token.orange7)
        document.body.style.setProperty('--SECONDARY-120', token.orange6)
        document.body.style.setProperty('--SECONDARY', token.orange5)
        document.body.style.setProperty('--SECONDARY-080', token.orange4)
        document.body.style.setProperty('--SECONDARY-060', token.orange3)
        document.body.style.setProperty('--SECONDARY-040', token.orange2)
        document.body.style.setProperty('--SECONDARY-020', token.orange1)
        document.body.style.setProperty('--SUCESS-180', token.green9)
        document.body.style.setProperty('--SUCESS-160', token.green8)
        document.body.style.setProperty('--SUCESS-140', token.green7)
        document.body.style.setProperty('--SUCESS-120', token.green6)
        document.body.style.setProperty('--SUCESS', token.green5)
        document.body.style.setProperty('--SUCESS-080', token.green4)
        document.body.style.setProperty('--SUCESS-060', token.green3)
        document.body.style.setProperty('--SUCESS-040', token.green2)
        document.body.style.setProperty('--SUCESS-020', token.green1)
        document.body.style.setProperty('--ERROR-180', token.red9)
        document.body.style.setProperty('--ERROR-160', token.red8)
        document.body.style.setProperty('--ERROR-140', token.red7)
        document.body.style.setProperty('--ERROR-120', token.red6)
        document.body.style.setProperty('--ERROR', token.red5)
        document.body.style.setProperty('--ERROR-080', token.red4)
        document.body.style.setProperty('--ERROR-060', token.red3)
        document.body.style.setProperty('--ERROR-040', token.red2)
        document.body.style.setProperty('--ERROR-020', token.red1)
        document.body.style.setProperty('--WHITE', token.colorWhite)
        document.body.style.setProperty('--TITLE', `${token.fontSizeXL}px`)
        document.body.style.setProperty('--TEXT-COLOR', token.colorText)
        document.body.style.setProperty('--TEXT-COLOR-LIGTH', token.colorWhite)
    },[token.colorPrimary])


    return <></>

}