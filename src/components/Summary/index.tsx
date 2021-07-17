import { Container } from "./styles";
import EntradasImg from '../../assets/income.svg'
import SaidasImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

export  function Summary() {
    return (
        <Container>
            <div>
                <header>Entradas
                    <img src={EntradasImg} alt="Entradas" />
                </header>

                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>Saídas
                    <img src={SaidasImg} alt="Saídas" />
                </header>

                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>Total
                    <img src={TotalImg} alt="Total" />
                </header>

                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}
