import styles from './Button.module.css'
import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
    varient?: ButtonVariant
}

export function Button({ varient = 'primary' }: ButtonProps) {
    return <ButtonContainer varient={varient} >Enviar</ButtonContainer>
}
