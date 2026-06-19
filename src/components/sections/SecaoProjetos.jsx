import { useState } from "react";
import { useTranslation } from "react-i18next";

import CardProj from "../ui/CardProj";
import { ModalProjeto } from "../ui/Modals";
import Texto from "../ui/Texto";
import styles from "./SecaoProjetos.module.css";
import { listaProjetos } from "../../data/listaProjetos";

function SecaoProjetos() {
  const { t } = useTranslation();

  const [projetoAtivo, setProjetoAtivo] = useState(null);

  const handleFechar = () => {
    setProjetoAtivo(null);
  };


  return (
    <section className={styles.baseProjetos} id="projects">
      <Texto as="h2" color="var(--branco)" font="var(--h2)">
        {t("infos.title2")}
      </Texto>
      <div className={styles.projs}>
        {listaProjetos.map((proj) => (
          <CardProj
            aria-haspopup="true"
            key={proj.id}
            textoPadrao={t(proj.chaveTitulo)}
            bgImage={proj.bgImage}
            bgAlt={proj.bgAlt}
            onClick={() => {
              console.log("Card clicado!", proj);
              setProjetoAtivo(proj);
            }}
          />
        ))}
      </div>
      {projetoAtivo && (
        <ModalProjeto
          isOpen={!!projetoAtivo}
          onClose={handleFechar}
          tituloProj={t(projetoAtivo.chaveTitulo)}
          desc={t(projetoAtivo.chaveDesc)}
          bgImage={projetoAtivo.bgImage}
          bgAlt={projetoAtivo.bgAlt}
          icoProj={projetoAtivo.icoProj}
          urlProj={projetoAtivo.urlProj}
          urlRepo={projetoAtivo.urlRepo}
        />
      )}
    </section>
  );
}

export default SecaoProjetos;
