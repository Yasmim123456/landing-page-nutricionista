import Botao from '../comum/Botao';
import './ChamadaAcao.css';

export default function ChamadaAcao() {
    return (
        <section id="contato" className='agendar-consulta'>
            <div className='container'>
                <div className='chamada'>
                    <h2 className='chamada-titulo'>Agende sua consulta online agora mesmo!</h2>
                    <p className='chamada-texto'>Busque por mudanças e esteja pronto para ver seu objetivo alcançado!</p>
                    <Botao href="https://api.whatsapp.com/send?phone=5579999896965&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.">
                        Agendar consulta
                    </Botao>
                </div>
            </div>
        </section>
    )
}