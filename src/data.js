export const profile = {
  name: "Igor Matos",
  initials: "Igor Matos",
  role: "Desenvolvedor de Software",
  tagline:
    "Construo produtos e sistemas, rápidos, bem pensados e que resolvem problemas reais.",
  available: true,
  availableText: "Aberto a novas propostas",
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
    { label: "Idiomas", value: "Português(Nativo) Inglês(Básico)" },
  ],
};

// Atualmente estou consumindo uma api do FormaCMS para cadastrar meus projetos
// export const projects = [
//   {
//     title: "[Nome do projeto]",
//     description:
//       "[Uma ou duas frases: qual problema resolve, seu papel e o resultado.]",
//     tags: ["[Tecnologia]", "[Tecnologia]", "[Tecnologia]"],
//     image: null, // ex.: '/projetos/projeto-1.png'
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "[Nome do projeto]",
//     description:
//       "[Uma ou duas frases: qual problema resolve, seu papel e o resultado.]",
//     tags: ["[Tecnologia]", "[Tecnologia]", "[Tecnologia]"],
//     image: null,
//     demo: "#",
//     code: "#",
//   },
// ];

export const experience = [
  {
    period: "Julho 2026 — atual",
    role: "Estagiário de Desenvolvimento Backend",
    company: "SmartNX",
    description:
      "Atuo no desenvolvimento e evolução de APIs e serviços back-end utilizando Node.js, Express e PostgreSQL, garantindo a sustentação e a entrega de novas funcionalidades da plataforma.",
    topics: [
      {
        title: "Arquitetura e Regras de Negócio",
        text: "Desenvolvimento de endpoints, implementação de validações rigorosas, tratamento de exceções e otimização de consultas e persistência em banco de dados relacional.",
      },
      {
        title: "Integrações e Resiliência",
        text: "Construção e manutenção de integrações com serviços externos e webhooks, incluindo consumo de filas RabbitMQ e uso de cache Redis para evitar consultas repetidas ao banco, além de investigação e correção de bugs para manter a estabilidade do sistema.",
      },
      {
        title: "Qualidade e Engenharia",
        text: "Escrita de testes automatizados, documentação técnica de APIs, participação ativa em code reviews e colaboração contínua com times de Front-end, QA e Produto em ambiente ágil.",
      },
    ],
  },
  {
    period: "Maio 2026 — Julho 2026",
    role: "Estagiário de Atendimento e Suporte à Plataforma",
    company: "Nvoip",
    description:
      "Atuei no suporte técnico especializado e na sustentação da plataforma de comunicações, servindo como ponte entre clientes, integrações de sistemas e o time de desenvolvimento.",
    topics: [
      {
        title: "Diagnóstico Técnico e Troubleshooting",
        text: "Investigação de falhas em integrações via API, análise de logs, problemas de conectividade e configurações de rede (DNS, firewall).",
      },
      {
        title: "Sustentação e Reporte de Bugs",
        text: "Reprodução de cenários de erro, documentação técnica detalhada de incidentes e escalonamento assertivo para o time de desenvolvimento, reduzindo o tempo de resolução.",
      },
      {
        title: "Suporte a Integradores",
        text: "Auxílio técnico a desenvolvedores e clientes na configuração da plataforma e consumo das APIs, garantindo estabilidade e boa experiência de uso.",
      },
    ],
  },
];

export const skills = [
  {
    group: "Back-end",
    items: [
      "Javascript",
      "Node",
      "Express",
      "Java",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Testes automatizados",
    ],
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
