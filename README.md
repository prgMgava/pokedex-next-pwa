This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Baixe o projeto git clone: <link>
- Instale as dependências: `npm install`
- Rode o comando `npm run prepare`
- Abra um terminal e rode `caddy run`, certifique-se que você tem o caddy instalado
- Rode o projeto `npm run dev` e acesse https://localhost:3001

### Commit config:

- echo "module.exports = { extends: ['@commitlint/config-conventional'] };"
  - Caso você esteja no Windows e a segunda linha der erro, é só criar um arquivo com o nome: **commitlint.config.js**
  - E adicione o seguinte conteúdo: ```module.exports = {extends: ['@commitlint/config-conventional']}````

### Instruções para commits:

- Ao utilizar o commando git commit há dois hooks que serão acionados para formatação e verificação:
  - pre-commit: este hook verifica o código com: esLint, formata com prettier e bloqueia commits na branch **main**
  - commit-message: somente permite commits no seguinte formato: [tipo*]: commit message. Ex.: _feat: adiciona tela de login_]
  - [tipo]: os tipos permitidos pela hook estão em **commitlint.config.js**, e podem ser modificados de acordo com a necessidade, comunique um admin do projeto

**Atenção**: É possível pular todas essas verificações com a flag `--no-verify`, mas evite sempre que possível e antes de usar consulte seu time.
