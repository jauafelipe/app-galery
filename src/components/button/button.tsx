import { ButtonProps } from '@/interface/button-props';
import React from 'react';
import * as S from './styled';

export const ButtonComp: React.FC<ButtonProps> = ({ text }) => {
  return <S.Button>{text}</S.Button>;
};
