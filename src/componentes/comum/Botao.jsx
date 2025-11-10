import "./Botao.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Botao({ children, onClick, href}) {
    if (href) {
        return(
            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="botao"
            aria-label={`${children} (abre em nova aba)`}  
            >
                {children}
                <FaWhatsapp aria-hidden="true" />
            </a>
        );
    }

    return(
        <button type="button" className="botao" onClick={onClick}>
            {children}
        </button>
    );
}