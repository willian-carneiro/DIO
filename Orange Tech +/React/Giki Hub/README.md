![Logo do GikiHub](./public/assets/favicon.png)
# Giki Hub
O nome do projeto é uma brincadeira com os termos Wiki e GitHub. No geral, achei esse projeto muito legal pois não conhecia a API do GitHub, e nunca tinha trabalhado de verdade com o Axios, então foi uma boa oportunidade para aprender algo novo. Minha ideia aqui foi então dar um passo adiante do que foi mostrado na aula, e por isso o sistema funciona da seguinte forma:
Você insere o username desejado e realiza a busca através do botão de busca (ou da tecla Enter), e então são retornados dados do perfil do usuário, e uma lista de cards contendo todos os projetos do mesmo. Ainda, é possível abrir o repositório desejado em uma nova aba, ou então o remover da lista em questão. E além disso, caso o usuário possua mais de 30 repositórios, o carregamento dos seguintes são feitos dinamicamente ao chegar na base da pagina num esquema de requisição dinâmica!

## Próximos passos
A próxima coisa que pretendo fazer é adicionar ferramentas de exibição personalizada, com sistema de busca por termos, filtros personalizados e ordenação de exibição. Contudo, não é uma tarefa tão trivial pois vai depender de ler bem a documentação da API para usar as queries corretas, e talvez já seja necessário criar um Token de usuário para executar as requisições a mais que deverão ser feitas com esses sistemas avançados.

## Links
Código Fonte: [https://github.com/Palhanor/GikiHub](https://github.com/Palhanor/GikiHub)

Projeto funcional: [https://palhanor.github.io/GikiHub/](https://palhanor.github.io/GikiHub/)


![Screenshot do gikhub no perfil de Linus Torvalds](./public/assets/screenshot.png)