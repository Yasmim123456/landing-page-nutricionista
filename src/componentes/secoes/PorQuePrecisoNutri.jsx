import "./PorQuePrecisoNutri.css";

export default function PorquePrecisoNutri() {
    return (
        <section className="secao-nutricionista" aria-labelledby="titulo-nutricionista">
            <div className="container">

                <div className="bloco-pergunta">
                    <div className="bloco-pergunta-caixa">
                        <h2 id='titulo-nutricionista' className="bloco-pergunta-titulo">Por que preciso de um nutricionista?</h2>
                    </div>

                    <div className="bloco-pergunta-respostas">
                        <ul className="bloco-pergunta-lista">
                            <li><strong>Alcançar objetivos:</strong> um nutricionista pode ajudar a criar um plano alimentar personalizado para conquistar mudanças corporais, como ganho de massa ou emagrecimento, de forma saudável, equilibrada e sustentável.</li>
                            <li><strong>Melhorar a saúde geral:</strong> um nutricionista pode ajudar na prevenção e no tratamento de doenças por meio de uma alimentação equilibrada e adequada às suas necessidades.</li>
                            <li><strong>Melhorar o desempenho esportivo:</strong> um nutricionista pode ajudar a otimizar o rendimento e a recuperação por meio de uma orientação nutricional adequada para atletas e praticantes de atividade física.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}