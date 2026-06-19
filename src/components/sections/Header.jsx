import { useState } from "react";
import { useTranslation } from "react-i18next";
import LangButton from "../form/LangButton";
import Botao from "../ui/Botao";
import Texto from "../ui/Texto";
import style from "./Header.module.css";

export default function Header() {
  const { t } = useTranslation();
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  // fecha o menu ao tocar em algum item da nav
  const fecharMenu = () => {
    if (menuAberto) setMenuAberto(false);
  };
  return (
    <header className={style.headerPort} aria-label="Cabeçalho">
      <nav aria-label="Navegação">
        <button
          className={`${style.hamburger} ${
            menuAberto ? style.hamburgerAtivo : ""
          }`}
          onClick={toggleMenu}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
        >
          <span className={style.barra} aria-hidden="true"></span>
          <span className={style.barra} aria-hidden="true"></span>
          <span className={style.barra} aria-hidden="true"></span>
        </button>
        <ul
          id="menu-principal"
          className={`${style.navLinks} ${menuAberto ? style.menuAberto : ""}`}
        >
          <li>
            <Texto
              as="a"
              color="var(--branco)"
              font="var(--nav)"
              href="#about"
              onClick={fecharMenu}
            >
              {t("header.about")}
            </Texto>
          </li>
          <li>
            <Texto
              as="a"
              color="var(--branco)"
              font="var(--nav)"
              href="#habilites"
              onClick={fecharMenu}
            >
              {t("header.habilites")}
            </Texto>
          </li>
          <li>
            <Texto
              as="a"
              color="var(--branco)"
              font="var(--nav)"
              href="#projects"
              onClick={fecharMenu}
            >
              {t("header.projects")}
            </Texto>
          </li>
          <li>
            <Botao
              href="#contact"
              tamanho="btnDesktopHeader"
              onClick={fecharMenu}
            >
              <Texto as="span" color="var(--branco)" font="var(--nav)">
                {t("btn.btnContato")}
              </Texto>
            </Botao>
          </li>
          <li className={style.espacoLing}>
            <LangButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
