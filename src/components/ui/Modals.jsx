import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Botao from "./Botao";
import styles from "./Modals.module.css";
import Texto from "./Texto";

import confirmImg from "../../assets/images/icons/confirm.svg";
import xOut from "../../assets/images/icons/close.png"
import logoCode from "../../assets/images/logos/teste.png"

function ModalConfirmacao({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { t } = useTranslation();

  return (
    <div className={styles.cfPosition}>
      <div className={styles.modalConfirm}>
        <div className={styles.mdCF}>
          <Texto
            as="span"
            color="var(--branco)"
            font="var(--modalConfirm)"
            textAlign="center"
          >
            {t("modals.confirmation")}
          </Texto>
          <img src={confirmImg} alt="Confirmação" />
        </div>
        <Botao onClick={onClose}>
          <Texto
            as="span"
            font="var(--botao)"
            color="var(--branco)"
            aria-label="Botão de fechar Modal"
          >
            {t("btn.btnFechar")}
          </Texto>
        </Botao>
      </div>
    </div>
  );
}

function ModalProjeto({
  isOpen,
  onClose,
  tituloProj,
  bgImage,
  bgAlt,
  desc,
  urlRepo,
  urlProj,
  icoProj,
}) {
  if (!isOpen) return null;
  const { t } = useTranslation();

  // função de acessibilidade
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // só add o listener se o modal estiver aberto
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // remove o listener quando o modal fechar ou desmontar
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.pjPosition}
      role="dialog"
      aria-modal="true"
      aria-label={tituloProj}
    >
      <div className={styles.focusModal}>
        <header className={styles.modalHeader}>
          <img src={logoCode} alt="Logo" />
          <button
            type="button"
            onClick={onClose}
            className={styles.btnClose}
            aria-label="Botão de fechar Modal"
          >
            <img src={xOut} alt="" aria-hidden="true" />
          </button>
        </header>
        <div className={styles.projeto}>
          <img src={bgImage} alt={bgAlt} className={styles.fotoProj} />
          <div className={styles.infoBotoes}>
            <div className={styles.nomeDescricao}>
              <Texto as="h3" color="var(--branco)" font="var(--h3Modal)">
                {tituloProj}
              </Texto>
              <div className={styles.descricao}>
                <Texto
                  as="p"
                  color="var(--branco)"
                  font="var(--phModal)"
                  opacity="var(--padrao-opacity)"
                  textAlign="justify"
                >
                  {desc}
                </Texto>
                <div className={styles.linguagens}>
                  {icoProj &&
                    icoProj.map((icone, index) => (
                      <img
                        key={index}
                        src={icone}
                        alt={`Tecno ${index}`}
                        title={icone.nome}
                        className={styles.langIcon}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.botoes}>
              <Botao href={urlProj} target={"_blank"}>
                <Texto as="a" color="var(--branco)" font="var(--botaoModal)">
                  {t("btn.btnProjeto")}
                </Texto>
              </Botao>
              <Botao estilo="btnVazado" href={urlRepo} target={"_blank"}>
                <Texto as="a" color="var(--branco)" font="var(--botaoModal)">
                  {t("btn.btnRepositorio")}
                </Texto>
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalConfirmacao, ModalProjeto };
