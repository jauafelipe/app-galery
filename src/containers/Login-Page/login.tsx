import * as S from './style';
import { Login } from '@/interface/login-props';
import { ButtonComp } from '@/components/button/button';
import { AiOutlineUser } from 'react-icons/ai';
export default function LoginPainel({ titleLogin }: Login) {
  return (
    <S.Container>
      <AiOutlineUser className="icon-login" />
      <h2>{titleLogin}</h2>
      <form action="">
        <input type="email" name="" id="" />
        <input type="password" />
        <div className="remember-me">
          <input type="checkbox" name="" id="" />
          <p>Manter-me Conectado</p>
        </div>
        <ButtonComp text={'LOGAR'} />
      </form>
      <p>Não Tem Uma Conta?</p>
      <a>Criar Conta</a>
    </S.Container>
  );
}
