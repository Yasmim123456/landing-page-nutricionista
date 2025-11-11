import "./Apresentacao.css";
import logomarca from "../../assets/Logomarca.png";
import fotonutri from "../../assets/Nutricionista-aracaju.jpg";
import Botao from "../comum/Botao";

export default function Apresentacao() {
    return (
        <section id="inicio" className="apresentacao" aria-labelledby="titulo-apresentacao">

            <div className="container">

                <div className="apresentacao-esquerda">

                    <div className="logo-container">
                        <img src={logomarca} alt="Logomarca da nutricionista Yasmim Prad" className="logo"/>
                    </div>

                    <div className="texto-container">
                        <h2 id='titulo-apresentacao'>Atendimento Nutricional Online</h2>
                        <p>Com mais de 10 anos de experiência em nutrição clínica, vou ajudar você a alcançar seus objetivos. Tenha mais saúde com a ajuda de uma nutricionista especializada.</p>
                    </div>
                    
                    <Botao href="https://api.whatsapp.com/send?phone=5579999896965&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." aria-label="Abrir conversa no WhatsApp para agendar consulta">
                        Agendar consulta
                    </Botao>
                 </div>

                <div className="apresentacao-direita">
                    <img src={fotonutri} alt="Nutricionista Yasmim Prado sorrindo em consultório" className="foto-nutri" loading="lazy"></img>
                </div>
            </div>   
    
        </section>
    )
}