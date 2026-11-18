import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

// O FormaCMS devolve o nome do ícone (ex.: "FaReact", "SiPrisma").
// Importar só os que eu uso mantém o bundle pequeno.
// Para uma tecnologia nova: importar o ícone acima e adicionar aqui.
const ICONS = {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
};

export default function TechIcon({ name, size = 16 }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} aria-hidden="true" />;
}
