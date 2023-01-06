import styled, {keyframes} from 'styled-components';
import SignUpBackgroundImg from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh; // Pega 100% da tela do usuario
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    place-content: center;
    width: 100%;
    max-width:700px;    
    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${SignUpBackgroundImg}) no-repeat center;
    background-size: cover;
`;
const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromRight} 1s;

    form{
        margin: 80px;
        width: 340px;
        text-align: center;
    

        h1{
            margin-bottom: 24px;
        }
        
        a{
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover{
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }
    > a { // Pega o link que encontra-se fora do nível anterior, ou seja, do form
        color: #FF9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover{
                color: ${shade(0.2, '#FF9000')};
        }
    }

`;