import styled from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';

export const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: whitesmoke;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #136ebe;
  }

  &:last-child {
    background-color: #75ec64;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #f5c940;
  color: #eae1e1;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`