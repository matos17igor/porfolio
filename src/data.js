export const profile = {
  name: "Igor Matos",
  initials: "Igor Matos",
  role: "Desenvolvedor de Software",
  tagline:
    "Construo produtos digitais claros, rápidos e bem pensados — do primeiro rascunho ao deploy.",
  available: true,
  availableText: "Disponível para novos projetos",
  photo: null, // ex.: '/foto.jpg' (coloque o arquivo na pasta public/)
  resume: "#", // ex.: '/curriculo.pdf'
  email: "igorochamatos@hotmail.com",
  github: "https://github.com/matos17igor",
  linkedin: "https://www.linkedin.com/in/igor-rocha-matos/",
};

export const about = {
  text: "Sou desenvolvedor focado em interfaces web e gosto de transformar problemas complexos em experiências simples.",
  facts: [
    { label: "Localização", value: "Juiz de Fora, MG" },
    { label: "Formação", value: "Ciência da Computação · UFJF" },
    { label: "Idiomas", value: "Português, Inglês" },
  ],
};

export const projects = [
  {
    title: "[Nome do projeto]",
    description:
      "[Uma ou duas frases: qual problema resolve, seu papel e o resultado.]",
    tags: ["[Tecnologia]", "[Tecnologia]", "[Tecnologia]"],
    image: null, // ex.: '/projetos/projeto-1.png'
    demo: "#",
    code: "#",
  },
  {
    title: "[Nome do projeto]",
    description:
      "[Uma ou duas frases: qual problema resolve, seu papel e o resultado.]",
    tags: ["[Tecnologia]", "[Tecnologia]", "[Tecnologia]"],
    image: null,
    demo: "#",
    code: "#",
  },
];

export const experience = [
  {
    period: "Julho 2026 — atual",
    role: "Desenvolvedor Backend",
    company: "SmartNX",
    description: "Descrever detalhado oque faço",
  },
  {
    period: "Maio 2026 — Julho 2026",
    role: "Estágiario de Suporte",
    company: "NVoip",
    description: "Descrever oque fiz",
  },
];

export const skills = [
  {
    group: "Back-end",
    items: ["Javascript", "Node", "Java"],
  },
  {
    group: "Front-end",
    items: ["React"],
  },
  { group: "Ferramentas", items: ["Git", "Docker", "AWS"] },
];

export const contact = {
  title: "Vamos construir algo juntos?",
  text: "Entre em contato comigo abaixo",
};
