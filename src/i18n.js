import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      btn: {
        btnCv: "Baixar CV",
        btnContato: "Contate-me",
        btnProjeto: "Ver Projeto",
        btnRepositorio: "Ver Repositório",
        btnFechar: "Fechar"
      },
      header: {
        about: "Sobre",
        habilites: "Habilidades",
        projects: "Projetos",
      },
      hero: {
        title: "Visitante",
        sub: "Olá,",
      },
      about: {
        title: "Quem sou eu",
        description: "Desenvolvedora web especializada em frontend, possuo um ano de experiência prática no desenvolvimento de aplicações web, com ênfase em projetos pessoais que implementam princípios básicos de usabilidade e organização do código."
      },
      infos: {
        title1: "Habilidades",
        title2: "Projetos",
        title3: "Entre em contato"
      },
      form: {
        title: "Entre em contato",
        nomeTitle: "Nome:",
        nomeDesc: "Seu nome aqui.",
        emailTitle: "Email:",
        emailDesc: "Endereço de Email.",
        assuntoTitle: "Assunto/Título:",
        assuntoDesc: "Assunto ou título da mensagem.",
        conteudoTitle: "Conteúdo:",
        conteudoDesc: "Conteúdo, aquilo que deseja enviar: crítica, proposta, etc.",
        inputError: {
          nomeErr: 'Nome não pode ficar vazio!',
          emailErr: 'Endereço de e-mail inválido!',
          assuntoErr: 'Assunto não pode ficar vazio!',
          conteudoErr: 'Conteúdo não pode ficar vazio!',
        }
      },
      cardProj: {
        hover: 'Info+',
        proj1: "heartOfPoets",
        proj2: "Mercadinho Aragão",
        proj3: "Redragon K530",
        proj4: "ViaCep",
        proj5: "Gerenciador de Produtos"
      },
      modals: {
        confirmation: "Mensagem enviada com sucesso!",
        subtitle1: "Página com navegação simples, imitando a estilização de uma rede social, sendo voltada para poesias e fotografia.",
        subtitle2: "Página com navegação simples com o intuito de localizar e valorizar um comércio, demostrando informações do mercadinho.",
        subtitle3: "Página com navegação simples, tendo como objetivo promover um produto e sua marca, destacando características e seus respectivos parceiros.",
        subtitle4: "Projeto acadêmico feito para botar em prática o consumo de API através do JavaScript. Página intuitiva e simples, tendo apenas como objetivo o JS.",
        subtitle5: "Projeto pessoal para por em prática conceitos fundamentais do ReactJS, como reutilização de componentes, props, hooks, validação de formulários, renderização condicionada e criação/exclusão de itens. Este esboço visa 3 fases + os testes, vale a pena dar uma olhada no repositório para conhecer-lo."
      }
    }
  },
  en: {
    translation: {
      btn: {
        btnCv: "Download CV",
        btnContato: "Contact-me",
        btnProjeto: "View Project",
        btnRepositorio: "View Repository",
        btnFechar: "Close"
      },
      header: {
        about: "About",
        habilites: "Habilites",
        projects: "Projects",
      },
      hero: {
        title: "Visitor",
        sub: "Hello,",
      },
      about: {
        title: "Who am I",
        description: "Web developer specializing in frontend, I have one year of practical experience in developing web applications, with an emphasis on personal projects that implement basic principles of usability and code organization."
      },
      infos: {
        title1: "Habilites",
        title2: "Projects",
        title3: "Get in touch"
      },
      form: {
        title: "Get in touch",
        nomeTitle: "Name:",
        nomeDesc: "Your name here.",
        emailTitle: "Email:",
        emailDesc: "Email Address.",
        assuntoTitle: "Subject/Title:",
        assuntoDesc: "Subject or title of the message.",
        conteudoTitle: "Content:",
        conteudoDesc: "Content, that which you wish to send: criticism, proposal, etc.",
        inputError: {
          nomeErr: 'Name cannot be left blank!',
          emailErr: 'Invalid email address!',
          assuntoErr: 'Subject cannot remain empty!',
          conteudoErr: 'Content cannot be empty.!',
        }
      },
      cardProj: {
        hover: 'Info +',
        proj1: "heartOfPoets",
        proj2: "Mercadinho Aragão",
        proj3: "Redragon K530",
        proj4: "ViaCep",
        proj5: "Product Manager"
      },
      modals: {
        confirmation: "Message sent successfully!",
        subtitle1: "A page with simple navigation, mimicking the style of a social network, focused on poetry and photography.",
        subtitle2: "A page with simple navigation aimed at locating and promoting a business. Displaying information about the small market.",
        subtitle3: "A page with simple navigation, aimed at promoting a product and its brand, highlighting its features and respective partners.",
        subtitle4: "An academic project designed to put API consumption via JavaScript into practice. It is a simple, intuitive page with a focus solely on JavaScript.",
        subtitle5: "A personal project designed to put fundamental ReactJS concepts into practice—such as component reusability, props, hooks, form validation, conditional rendering, and item creation/deletion. The project outline covers three phases plus testing; it is worth checking out the repository to learn more.",
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    supportedLngs: ["pt", "en"],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });


export default i18n;