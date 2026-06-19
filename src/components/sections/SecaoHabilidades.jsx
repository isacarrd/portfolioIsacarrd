import { useTranslation } from "react-i18next";
import MiniCard from "../ui/MiniCard";
import Texto from "../ui/Texto";
import styles from "./SecaoHabilidades.module.css";

import cssIcon from "../../assets/images/devicons/css3Orange.svg";
import figIcon from "../../assets/images/devicons/figmaOrange.svg";
import gitIcon from "../../assets/images/devicons/gitOrange.svg";
import htmlIcon from "../../assets/images/devicons/html5Orange.svg";
import jsIcon from "../../assets/images/devicons/javascriptOrange.svg";
import nodeIcon from "../../assets/images/devicons/nodejsOrange.svg";
import reactIcon from "../../assets/images/devicons/reactnativeOrange.svg";
import supaIcon from "../../assets/images/devicons/supabaseOrange.svg";
import typeIcon from "../../assets/images/devicons/typescriptOrange.svg";

function SecaoHabilidades() {
  const { t } = useTranslation();
  return (
    <section className={styles.habilidades} id="habilites" aria-label="Seção de Habilidades">
      <Texto as="h2" color="var(--branco)" font="var(--h2)" textAlign="center">
        {t("infos.title1")}
      </Texto>
      <div className={styles.cards}>
        <MiniCard icoLang={figIcon} langAlt={"Figma"} langName={"Figma"} />
        <MiniCard icoLang={htmlIcon} langAlt={"HTML5"} langName={"HTML5"} />
        <MiniCard icoLang={cssIcon} langAlt={"Css3"} langName={"CSS3"} />
        <MiniCard icoLang={gitIcon} langAlt={"Git"} langName={"GIT"} />
        <MiniCard
          icoLang={jsIcon}
          langAlt={"JavaScript"}
          langName={"JavaScript"}
        />
        <MiniCard icoLang={reactIcon} langAlt={"React"} langName={"ReactJS"} />
        {/* <MiniCard icoLang={nodeIcon} langAlt={"NodeJS"} langName={"NodeJS"} />
        <MiniCard
          icoLang={typeIcon}
          langAlt={"TypeScript"}
          langName={"TypeScript"}
        />
        <MiniCard
          icoLang={supaIcon}
          langAlt={"Supabase"}
          langName={"Supabase"}
        /> */}
      </div>
    </section>
  );
}

export default SecaoHabilidades;
