# Prompts do projeto

Registro cronológico dos prompts enviados para construir e evoluir esta página.
O conteúdo de cada bloco preserva o texto original.

## 1. Página pessoal

```text
**Quero que você crie uma página pessoal para mim. Crie os arquivos index.html e style.css.

Requisitos do conteúdo da página:

1. Nome: Michel Lavanere Sampaio.

1. Frase de apresentação: 'Transformando lógica em soluções escaláveis, do baixo nível à nuvem.'
2. Seção 'Sobre': Escreva um parágrafo destacando meu foco atual no ecossistema Java/Groovy e microsserviços, com forte base em hardware e sistemas embarcados.
3. Tecnologias que quero aprender/aprofundar: Crie uma lista com: Arquitetura Cloud (AWS/Huawei), Testes Automatizados com Spock e Design Patterns Avançados.
4. Adicione um link estilizado apontando para '[https://github.com/devlavanere](https://github.com/devlavanere)'.
Restrições: Não adicione frameworks, use apenas HTML semântico e CSS.

Quando terminar e eu validar que está correto, faça um commit semântico com a mensagem: 'feat: cria estrutura inicial da página sobre mim'.
```

## 2. Tema, favicon e animação

```text
Agora, adicione um botão elegante no topo da página para alternar entre tema claro e escuro. Salve a preferência no `localStorage`. Além disso, crie uma animação suave de *fade-in* quando a página carregar e adicione um favicon simples via tag meta. Quando funcionar, faça o commit semântico: 'feat: adiciona dark mode, favicon e animações'.
```

## 3. Projetos do GitHub

```text
Crie um arquivo `script.js` e conecte-o ao HTML. Adicione uma seção 'Projetos' abaixo das tecnologias. Faça um `fetch` na API do GitHub para buscar meus repositórios públicos e exiba-os em formato de cards responsivos (mostrando nome, descrição e link). Faça o commit semântico: 'feat: integra API do GitHub para listagem de projetos'.
```
