import styled, {css} from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: 'primary' | 'outlined'
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#fb3f78'};
    color: ${props => props.color || '#fb3f78'};
    background-color: transparent;

    &:hover {
      border-color: sandybrown;
      color: blueviolet;
      background-color: transparent;
    }
  `}

  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#fb3f78'};
    color: snow;

    &:hover {
      background-color: #4053ec;
        //animation: ${MyAnimation} 2s ease-in-out infinite;
    }
  `}

  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6);
  `}
`

