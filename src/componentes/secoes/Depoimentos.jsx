import './Depoimentos.css';

export default function Depoimentos() {
    return(
        <section className='depoimentos' aria-labelledby='titulo-depoimentos'>

            <div className='container'>
                <h2 id="titulo-depoimentos" className='depoimentos-titulo'>Depoimentos</h2>
                <div className='caixa-depoimentos'>
                    <div className='caixa-depoimento'>
                        <p className='caixa-depoimento-texto'>"Eu já tinha tentado várias dietas e nunca conseguia me adaptar. O acompanhamento com a nutricionista foi diferente: tudo foi ajustado de acordo com o que eu gosto e com a minha rotina, tornando mais fácil seguir o plano sem me sentir privada. Finalmente consegui emagrecer de forma saudável e consistente."</p>
                        <span className='caixa-depoimento-nome'>Amanda, 32 anos</span>
                    </div>
                    <div className='caixa-depoimento'>
                        <p className='caixa-depoimento-texto'>"Sempre achei difícil ganhar massa muscular, mas com o acompanhamento da nutricionista tudo ficou mais claro. Ela ajustou minha alimentação ao meu dia a dia e às minhas preferências, e os resultados apareceram rápido, sem eu me sentir forçado a seguir algo que não gosto."</p>
                        <span className='caixa-depoimento-nome'>Carlos, 27 anos</span>
                    </div>
                    <div className='caixa-depoimento'>
                        <p className='caixa-depoimento-texto'>"Como vegetariana, achava complicado organizar minha alimentação para ter energia suficiente e atingir meus objetivos. O acompanhamento com a nutricionista personalizou tudo pensando no que eu gosto e no que já faço no dia a dia, tornando a alimentação prática e prazerosa. Hoje me sinto com muito mais disposição e saúde."</p>
                        <span className='caixa-depoimento-nome'>Julia, 29 anos</span>
                    </div>
                </div>
                
            </div>

        </section>
    )
}