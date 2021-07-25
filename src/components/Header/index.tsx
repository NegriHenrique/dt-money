
import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="DTmoney" />
        <button onClick={onOpenNewTransactionModal} type="button">
          {" "}
          Nova Transação{" "}
        </button>
        
      </Content>
    </Container>
  );
}
