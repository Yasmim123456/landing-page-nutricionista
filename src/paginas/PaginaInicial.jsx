import Navbar from "../componentes/layout/Navbar";
import Apresentacao from "../componentes/secoes/Apresentacao";
import ChamadaAcao from "../componentes/secoes/ChamadaAcao";
import Depoimentos from "../componentes/secoes/Depoimentos";
import DuvidasFrequentes from "../componentes/secoes/DuvidasFrequentes";
import BeneficiosOnline from "../componentes/secoes/BeneficiosOnline";
import PorQuePrecisoNutri from "../componentes/secoes/PorQuePrecisoNutri";
import SobreANutri from "../componentes/secoes/SobreANutri";
import Rodape from "../componentes/layout/Rodape";
import BotoesServicos from "../componentes/secoes/BotoesServicos";


export default function PaginaInicial() {
    return (
        <>
            <Navbar />
            <Apresentacao />
             <div className="botoes-servicos-area">
                <BotoesServicos />
            </div>
            <PorQuePrecisoNutri />
            <BeneficiosOnline />
            <SobreANutri />
            <Depoimentos />
            <DuvidasFrequentes />
            <ChamadaAcao />
            <Rodape />
        </>
    )
}