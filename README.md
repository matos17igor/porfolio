# Portfolio — Igor Matos

Portfolio pessoal feito com **React + Vite** (JavaScript), tema azul marinho escuro e minimalista, com detalhes em dourado e brilho azul.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:5173.

## Editar o conteúdo

Todo o texto fica em [`src/data.js`](src/data.js) — troque o que está entre `[colchetes]`.

- **Foto:** coloque o arquivo em `public/` (ex.: `public/foto.jpg`) e defina `photo: '/foto.jpg'`.
- **Currículo:** `public/curriculo.pdf` → `resume: '/curriculo.pdf'`.
- **Imagens dos projetos:** `public/projetos/...` → campo `image` de cada projeto.

## Cores

Os tokens ficam no topo de [`src/styles.css`](src/styles.css) (`:root`). `--accent` é o azul de destaque, `--gold` o dourado de contraste e `--glow` o brilho — mudar essas variáveis troca o site inteiro.

A versão com mais animações ficou guardada em `_versao-criativa/` (pode apagar se não for usar).

## Publicar

```bash
npm run build
```

Gera a pasta `dist/`, pronta para Vercel, Netlify ou GitHub Pages.
