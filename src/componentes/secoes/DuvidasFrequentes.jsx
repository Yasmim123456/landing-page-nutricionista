import { useState } from 'react';
import './DuvidasFrequentes.css';

export default function DuvidasFrequentes() {
     const [ativo, setAtivo] = useState(null);

  const alternar = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section id='duvidas' className='duvidas' aria-labelledby='titulo-duvidas'>
      <div className="container">
        <h2 className="duvidas-titulo" id='titulo-duvidas'>Dúvidas Frequentes</h2>

        <ul className="lista-duvidas">
          {[
            {
              pergunta: 'Como funciona o acompanhamento?',
              resposta:
                'O acompanhamento é totalmente personalizado: na primeira consulta, começamos com uma conversa para entender suas principais necessidades e montar seu plano alimentar e de ação para o mês. Nas seguintes, ajustamos o plano conforme sua evolução e trabalhamos mudanças duradouras com ferramentas comportamentais. Nas últimas consultas, preparamos sua alta nutricional, com foco em te tornar autônomo e capaz de manter os resultados. Cada plano é adaptado à sua rotina e preferências alimentares, para facilitar a adesão e gerar resultados sustentáveis.',
            },
            {
              pergunta: 'Como é feita a avaliação corporal da consulta online?',
              resposta:
                'A avaliação é feita por meio da inteligência artificial Shaped, que analisa fotos do corpo para estimar medidas, percentual de gordura e massa magra. Desenvolvida por profissionais brasileiros ao longo de 6 anos, um dos grandes pilares da Shaped foi utilizar a ciência para garantir a veracidade dos dados entregues.',
            },
            {
              pergunta: 'Quantas consultas preciso para alcançar meu objetivo?',
              resposta:
                'Isso varia conforme o seu ponto de partida, objetivo e também o seu comprometimento com o acompanhamento. Em geral, após o primeiro mês já é possível ver resultados e ajustar o plano conforme sua evolução.',
            },
           {
              pergunta: 'Você atende por convênios ou planos de saúde?',
              resposta:
                'Atendo apenas de forma particular. Meu atendimento é totalmente personalizado e requer um tempo e cuidado que não se encaixam no formato das consultas oferecidas pelos planos de saúde. No entanto, se você possui plano, pode solicitar o reembolso apresentando a nota fiscal da consulta. Muitos planos oferecem essa possibilidade.',
            },
          ].map((item, index) => (
            <li className="lista-item" key={index}>
              <button className={`lista-item-pergunta ${ativo === index ? 'ativo' : ''}`} onClick={() => alternar(index)}>
                {item.pergunta}
                <span className="seta">{ativo === index ? '▲' : '▼'}</span>
              </button>

              <p className={`lista-item-resposta ${ativo === index ? 'mostrar' : ''}`}>
                {item.resposta}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}