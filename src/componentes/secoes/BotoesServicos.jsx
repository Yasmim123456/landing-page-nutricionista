import BotaoServico from "../comum/BotaoServico";
import "./BotoesServicos.css";
import { FaDumbbell, FaRunning, FaLeaf, FaFemale } from "react-icons/fa";

const servicos = [
  {
    texto: "Hipertrofia",
    mensagem: "Olá! Gostaria de saber como funciona o acompanhamento para ganho de massa magra.",
    icone: <FaDumbbell size={24} color="#000000ff" />
  },
  {
    texto: "Emagrecimento",
    mensagem: "Olá! Gostaria de saber como funciona o acompanhamento para emagrecimento.",
    icone: <FaRunning size={24} color="#2196F3" />
  },
  {
    texto: "Vegetarianismo",
    mensagem: "Olá! Gostaria de saber mais sobre o acompanhamento para vegetarianos.",
    icone: <FaLeaf size={24} color="#4CAF50" />
  },
  {
    texto: "Saúde da Mulher",
    mensagem: "Olá! Gostaria de saber mais sobre o acompanhamento para saúde da mulher.",
    icone: <FaFemale size={24} color="#e49ee4ff" />
  }
];

export default function BotoesServicos() {
  return (
    <section className="botoes-servicos">
      <div className="container">
        {servicos.map((item, index) => (
          <BotaoServico
            key={index}
            texto={item.texto}
            mensagem={item.mensagem}
            icone={item.icone}
          />
        ))}
      </div>
    </section>
  );
}