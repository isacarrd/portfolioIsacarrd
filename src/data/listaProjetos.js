import projHearOfPoets from "./projects/heartOfpoets.png";
import projMercadinho from "./projects/mercadinhoAragao.png";
import projRedragon from "./projects/redDragon.png";
import projViacep from "./projects/viacep.png";
import projGerenProd from "./projects/gerenciadorProdutos.png"

import cssIcon from "../assets/images/devicons/css3.svg";
import figIcon from "../assets/images/devicons/figma.svg";
import gitIcon from "../assets/images/devicons/git.svg";
import htmlIcon from "../assets/images/devicons/html5.svg";
import jsIcon from "../assets/images/devicons/javascript.svg"
import reactIcon from "../assets/images/devicons/reactnative.svg"
import tailwindIcon from "../assets/images/devicons/tailwindcss.png"


export const listaProjetos = [
  {
    id: 1,
    chaveTitulo: "cardProj.proj1",
    chaveDesc: "modals.subtitle1",
    bgImage: projHearOfPoets,
    bgAlt: "Projeto Heart Of Poets",
    icoProj: [htmlIcon, cssIcon, gitIcon, figIcon],
    urlProj: "https://heartofpoets.vercel.app/",
    urlRepo: "https://github.com/isacarrd/heartOfPoets",
  },
  {
    id: 2,
    chaveTitulo: "cardProj.proj2",
    chaveDesc: "modals.subtitle2",
    bgImage: projMercadinho,
    bgAlt: "Projeto Mercadinho Aragão",
    icoProj: [htmlIcon, cssIcon, gitIcon, figIcon],
    urlProj: "https://mercadinho-aragao.vercel.app/",
    urlRepo: "https://github.com/isacarrd/mercadinhoAragao",
  },
  {
    id: 3,
    chaveTitulo: "cardProj.proj3",
    chaveDesc: "modals.subtitle3",
    bgImage: projRedragon,
    bgAlt: "Projeto Redragon",
    icoProj: [htmlIcon, cssIcon, gitIcon, figIcon],
    urlProj: "https://redragon-draconic.vercel.app/",
    urlRepo: "https://github.com/isacarrd/redragon-draconic",
  },
  {
    id: 4,
    chaveTitulo: "cardProj.proj4",
    chaveDesc: "modals.subtitle4",
    bgImage: projViacep,
    bgAlt: "Projeto Viacep",
    icoProj: [jsIcon, htmlIcon, cssIcon, gitIcon, figIcon],
    urlProj: "https://viacep-tawny.vercel.app/",
    urlRepo: "https://github.com/isacarrd/viaCep",
  },
  {
    id: 5,
    chaveTitulo: "cardProj.proj5",
    chaveDesc: "modals.subtitle5",
    bgImage: projGerenProd,
    bgAlt: "Projeto Gerenciador de Produtos",
    icoProj: [reactIcon, jsIcon, htmlIcon, tailwindIcon, gitIcon, figIcon],
    urlProj: "https://gerenciador-fase1.vercel.app/",
    urlRepo: "https://github.com/isacarrd/gereciadorTeste",
  },
];