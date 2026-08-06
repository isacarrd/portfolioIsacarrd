import styles from "./Botao.module.css";

export default function Botao(
  { tamanho = "btnDesktopPadrao",
    estilo = "btnPreenchido",
    children,
    href,
    target,
    download,
    ...props
  }) {
  const buttonStyles = `${styles.btnBase} ${styles[tamanho]} ${styles[estilo]}`;
  const Especie = href ? "a" : "button";

  return (
    <Especie
      href={href}
      target={target}
      download={download}
      className={buttonStyles}
      {...props}
    >
      {children}
    </Especie>
  );
}


