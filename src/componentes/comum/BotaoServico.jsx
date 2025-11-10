import "./BotaoServico.css";

export default function BotaoServico({texto, mensagem, numero = "5579999896965", icone}) {
    const mensagemCodificada = mensagem ? encodeURIComponent(mensagem) : "";
    const link = mensagemCodificada
    ? `https://api.whatsapp.com/send?phone=${numero}&text=${mensagemCodificada}`
    : `https://api.whatsapp.com/send?phone=${numero}`;

  return (
    <a
      href={link}
      className="botao-servico"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir WhatsApp: ${texto}`}
    >
      {icone && <span className="icone-servico">{icone}</span>}
      <span>{texto}</span>
    </a>
  );
}