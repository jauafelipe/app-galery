import * as S from './style';
import { Login } from '@/interface/login-props';
import { ButtonComp } from '@/components/button/button';
import { AiOutlineUser } from 'react-icons/ai';

export default function LoginPainel({ titleLogin }: Login) {
  return (
    <S.Container>
      <AiOutlineUser className="icon-login" />

    </S.Container>
  );
}
