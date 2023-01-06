import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip'

interface IContainerProps{
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    
    border: 2px solid #232129;
    color: #666368;

    display: flex;
    align-items: center;

    & + div { // Toda div que seja precedido de outro, vai ter um distanciament de 8px;
        margin-top: 8px;
    } 

    ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;      
    `}

    ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `};

    ${props =>
    props.isFilled &&
    css`
      color: #ff9000;      
    `};

   

    input {
        flex: 1px;
        background: transparent;
        border:0px;
        color: #fff;
      
        &::placeholder{
            color: #666368;
        }     
    }

    svg{
        margin-right:16px;
    }

`;

export const Error = styled(Tooltip)` // As regras serão aplicadas no container do tooltip
    height: 20px;
    margin-left: 16px;
    svg{
        margin:0px;
    }

    span{
        background: #c53030;
        color: #FFF;

        &::before{
            border-color: #c53030 transparent;
        }
        
    }
`;

