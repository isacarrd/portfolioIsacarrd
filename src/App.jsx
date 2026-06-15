import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { useTranslation } from "react-i18next";
import style from "./App.module.css";
import "./index.css";

import EmailForm from "./components/form/EmailForm";
import Header from "./components/sections/Header";
import SecaoHabilidades from "./components/sections/SecaoHabilidades";
import SecaoProjetos from "./components/sections/SecaoProjetos";
import Botao from "./components/ui/Botao";
import Texto from "./components/ui/Texto";
import TextType from "./components/ui/TextType";

import catLogo from "./assets/images/logos/catLogo-256.svg"
import logoCode from "./assets/images/logos/teste.png"
import linkdnWh from "./assets/images/icons/linkedin.svg"
import githubWh from "./assets/images/icons/github.svg"
import linkdnOut from "./assets/images/icons/linkedinOut.svg"
import githubBl from "./assets/images/icons/githubBl.svg"
import emailIco from "./assets/images/icons/email.png"
import copyIco from "./assets/images/icons/copyright.svg"

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className={style.canvasContainer}>
        <ShaderGradientCanvas>
          <ShaderGradient
            control="query"
            urlString="https://shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0.4&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23242424&color2=%230c0c0c&color3=%23b4b4b4&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=-2.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"
          />
        </ShaderGradientCanvas>
      </div>
      <div className={style.noise} />
      <Header />
      <section className={style.hero}>
        <div className={style.tit}>
          <TextType
            text={[t("hero.sub")]}
            font="var(--miniHome)"
            opacity="var(--padrao-opacity)"
            typingSpeed={130}
            pauseDuration={1500}
            showCursor={false}
            loop={false}
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
          <TextType
            text={[t("hero.title")]}
            font="var(--home)"
            color="var(--branco)"
            typingSpeed={200}
            pauseDuration={1500}
            initialDelay={800}
            showCursor
            loop={false}
            cursorCharacter="▎"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
          <div className={style.sub}>
            <Texto
              as="p"
              color="var(--branco)"
              font="var(--sub)"
              opacity="var(--miniHome-opacity)"
            >
              Dev Front-end
            </Texto>
            <Texto
              as="p"
              color="var(--laranja)"
              font="var(--miniHome)"
              opacity="var(--miniHome-opacity)"
            >
              @isacarrd
            </Texto>
          </div>
        </div>
      </section>
      <main>
        <section className={style.about} id="about">
          <div className={style.abtCont}>
            <div className={style.imgAbt}>
              <img src={catLogo} alt="CatLogo" />
            </div>
            <div className={style.info}>
              <div className={style.textos}>
                <Texto
                  as="h1"
                  color="var(--branco)"
                  font="var(--h1)"
                  textAlign="center"
                >
                  {t("about.title")}
                  <span id="abtSpan">?</span>
                </Texto>
                <div className={style.ph}>
                  <Texto
                    as="p"
                    color="var(--branco)"
                    font="var(--ph)"
                    textAlign="justify"
                    opacity="var(--padrao-opacity)"
                  >
                    {t("about.description")}
                  </Texto>
                </div>
              </div>
              <div className={style.links}>
                <div className={style.linkSocial}>
                  <a
                    className={style.lkAbt}
                    href="https://www.linkedin.com/in/isabele-cardoso-arag%C3%A3o-isacarrd/"
                    target="_blank"
                    rel="author"
                  >
                    <img src={linkdnWh} alt="Linkedin" />
                  </a>
                  <a
                    className={style.lkAbt}
                    href="https://github.com/isacarrd"
                    target="_blank"
                    rel="author"
                  >
                    <img src={githubWh} alt="Github" />
                  </a>
                </div>
                <Botao
                  href={"./data/CV.docx"}
                  download="CV.docx"
                  type="application/docx"
                >
                  <Texto as="span" color="var(--branco)" font="var(--botao)">
                    {t("btn.btnCv")}
                  </Texto>
                </Botao>
              </div>
            </div>
          </div>
        </section>
        <SecaoHabilidades />
        <SecaoProjetos />
      </main>
      <EmailForm />
      <section id="card-info" className={style.cardInfo}>
        <article className={style.cartao}>
          <span className={style.retangle}></span>
          <div className={style.cardCont}>
            <div className={style.ladoEsq}>
              <span className={style.esqInfo}>
                <img src={linkdnOut} alt="Linkedin" />
                <p className={style.cardP}>Isabele Cardoso</p>
              </span>
              <span className={style.esqInfo}>
                <img src={emailIco} alt="Email" />
                <p className={style.cardP}>isacarrddev@gmail.com</p>
              </span>
              <span className={style.esqInfo}>
                <img src={githubBl} alt="Github" />
                <p className={style.cardP}>isacarrd</p>
              </span>
            </div>
            <div className={style.ladoDir}>
              <img src={logoCode} alt="Logo" className={style.logoCard} />
              <Botao
                href={"./data/CV.docx"}
                download="CV.docx"
                type="application/docx"
              >
                <Texto as="span" color="var(--branco)" font="var(--botao)">
                  {t("btn.btnCv")}
                </Texto>
              </Botao>
            </div>
          </div>
        </article>
      </section>
      <footer>
        <div className={style.fotTxt}>
          <img src={copyIco} alt="Copyright" />
          <Texto
            as="span"
            color="var(--preto)"
            font="var(--footer)"
            disableHover={true}
          >
            2026
          </Texto>
        </div>
      </footer>
    </>
  );
}

export default App;
