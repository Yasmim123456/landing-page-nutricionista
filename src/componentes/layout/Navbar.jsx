import { useState,  useEffect} from "react";
import './Navbar.css';
import { FiMenu, FiX } from "react-icons/fi";
import Logomarcasimbolo from "../../assets/Logomarcasimbolo.png";


export default function Navbar() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const alternarMenu = () => setMenuAtivo(!menuAtivo);

    useEffect(() => {
    const links = document.querySelectorAll('.navbar-links a');
    const fecharMenu = () => setMenuAtivo(false);

    links.forEach(link => link.addEventListener('click', fecharMenu));

    return () => links.forEach(link => link.removeEventListener('click', fecharMenu));
  }, []);

    return (
        <header className="navbar">
            <nav className="container navbar-conteudo">
                <a href="#inicio" className="navbar-logo">
                    <img src={Logomarcasimbolo} alt="Logo Yasmim Prado" className="logo-imagem" />
                </a>

                 <button
                    className="menu-toggle"
                    onClick={alternarMenu}
                    aria-label={menuAtivo ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                    aria-expanded={menuAtivo ? "true" : "false"}
                    aria-controls="menu-navegacao"
                    >
                    {menuAtivo ? (
                        <FiX size={28} color="#005704" aria-hidden="true" />
                    ) : (
                        <FiMenu size={28} color="#005704" aria-hidden="true" />
                    )}
                </button>

                <ul className={`navbar-links ${menuAtivo ? "ativo" : ""}`}>
                    <li>
                        <a href="#inicio">Início</a>
                    </li>
                    <li>
                        <a href="#consulta-online">Consulta online</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#duvidas">Dúvidas frequentes</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}