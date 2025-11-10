import "./SobreANutri.css";
import fotoyasmim from "../../assets/Yasmim.png";
import Botao from "../comum/Botao";

export default function SobreANutri() {
    return(
        <section id="sobre" className="sobre-a-nutri" aria-labelledby="titulo-sobre-nutri">
            <div className="container">

                <div className="bloco-sobre">
                    <img className="bloco-sobre__imagem" src={fotoyasmim} alt="Nutricionista Yasmim Prado" loading="lazy"></img>

                    <div className="bloco-sobre__conteudo">
                        <h2 id="titulo-sobre-nutri" className="bloco-sobre__titulo">SOBRE A NUTRI</h2>
                        <h3 className="bloco-sobre__subtitulo">YASMIM PRADO</h3>
                        <p className="bloco-sobre__texto">Nutricionista com mais de 10 anos de experiência em consultório, atuo principalmente com emagrecimento e definição. Tenho especialização em Fitoterapia e Suplementação Clínica e Esportiva, o que me permite criar planos estratégicos e personalizados. Acredito em uma nutrição que transforma vidas, respeita suas preferências alimentares e se adapta ao ritmo do seu dia a dia.</p>

                        <Botao href="https://api.whatsapp.com/send?phone=5579998617838&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.">
                            Agendar consulta
                        </Botao>
                    </div>

                </div>
            </div>
            
        </section>
    )
}

