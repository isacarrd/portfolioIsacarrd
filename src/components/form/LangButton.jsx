import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Texto from "../ui/Texto";
import styles from "./LangButton.module.css";

function LangButton() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = async(e, fallbackLng) => {
    e.stopPropagation();
    try {
      await i18n.changeLanguage(fallbackLng);
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao mudar de idioma:", error);
    }
  };

  const isPt = String(i18n.language || "pt")
    .toLowerCase()
    .includes("pt");

  return (
    <div
      className={`${styles.langContainer} ${isOpen ? styles.open : ""}`}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Idioma Ativo (Sempre visível) */}
      <button
        type="button"
        className={styles.activeArea}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="menu-idiomas"
        aria-label={`Alterar idioma. Idioma atual: ${
          isPt ? "Português" : "Inglês"
        }`}
      >
        {/* Idioma */}
        <div className={styles.flagCont}>
          <div
            className={`${styles.flag} ${isPt ? styles.br : styles.us}`}
          ></div>
        </div>

        {/* Seta */}
        <div
          className={`${styles.arrowContainer} ${
            isOpen ? styles.arrowContainerTop : styles.arrowContainerDown
          }`}
          aria-hidden="true"
        ></div>
      </button>

      {/* Opções (Só aparecem quando aberto) */}
      {isOpen && (
        <div id="menu-idiomas">
          <button
            className={styles.dropdownArea}
            type="button"
            onClick={(e) => {
              changeLanguage(e, isPt ? "en" : "pt");
              setIsOpen(false);
            }}
            aria-label={`Mudar para idioma ${isPt ? "Inglês" : "Português"}`}
          >
            <div
              className={`${styles.flag} ${isPt ? styles.us : styles.br}`}
              aria-hidden="true"
            ></div>
            <Texto
              as="span"
              font="var(--langButton)"
              color="var(--branco)"
              disableHover={true}
              aria-hidden="true"
            >
              {isPt ? "EN-US" : "PT-BR"}
            </Texto>
          </button>
        </div>
      )}
    </div>
  );
}

export default LangButton;
