import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 15px;
  text-align: center;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

    &:hover{
        background: var(--twitter-dark-hover);
    }

`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
    

`;

export const Tweet = styled.div`
  
`;




