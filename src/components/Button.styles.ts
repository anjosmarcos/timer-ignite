import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    varient: ButtonVariant
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 0;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin: 5px;

    /* ${props => {
        return `background-color: ${ButtonVariants[props.varient]}`
    }} */

    // pegando a cor do tema
    background-color: ${props => props.theme[props.varient]};

`