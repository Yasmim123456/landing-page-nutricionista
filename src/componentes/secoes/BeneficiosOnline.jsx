import "./BeneficiosOnline.css";

export default function BeneficiosOnline() {
    return (
    <section className="consulta-online" id="consulta-online" aria-labelledby='titulo-beneficios-online'>
        <div className="container">
            <h2 id='titulo-beneficios-online' className="consulta-online-titulo">Por que a consulta online vale a pena?</h2>
            <p className="consulta-online-intro">
             Mais conforto e liberdade para você cuidar da sua saúde sem sair de casa!
            </p>

            <ul className="consulta-online-lista">
                <li className="consulta-online-item">
                    <strong>Praticidade e conforto:</strong> sem necessidade de dirigir até a clínica e enfrentar trânsito, você otimiza o tempo e é atendida de onde estiver.
                </li>
                <li className="consulta-online-item">
                    <strong>Resultados reais, com mais liberdade:</strong> o acompanhamento online oferece o mesmo cuidado e personalização da consulta presencial, com planos ajustados ao longo do processo e a flexibilidade que o seu dia a dia precisa.
                </li>
                <li className="consulta-online-item">
                    <strong>Avaliação corporal:</strong> a avaliação física é feita por meio de uma plataforma de inteligência artificial que, aliada à anamnese, permite uma análise completa e confiável do seu estado nutricional.
                </li>
            </ul>
        </div>
    </section>
    )
}
