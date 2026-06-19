import { useState } from "react";
import Texto from "../ui/Texto";
import styles from "./CardProj.module.css";
import { t } from "i18next";

function CardProj({
  children,
  textoPadrao,
  textoHover = t("cardProj.hover"),
  bgImage,
  bgAlt,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Função de navegação com teclado!
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); 
      onClick();
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      onClick={onClick}
      className={styles.cardBase}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
      role="button"
      tabIndex={0}
    >
      {bgImage && (
        <img src={bgImage} alt={bgAlt} className={styles.imgBanner} />
      )}

      <div className={styles.contCard}>
        {children}
        <Texto
          as="span"
          font="var(--cardProj)"
          color="var(--branco)"
          webkitTextStroke="0.5px var(--laranja)"
          textAlign="center"
          letterSpacing="var(--padrao-opacity)"
          disableHover={true}
        >
          {isHovered ? textoHover : textoPadrao}
        </Texto>
      </div>
    </div>
  );
}

export default CardProj;
