# Desafio Técnico — Fullstack Júnior

Este repositório reúne as soluções dos exercícios de HTML e CSS, Vue 3, TypeScript, SQL e NestJS. Cada desafio foi organizado em sua própria pasta, com um README explicando a implementação e como executá-la.

## Organização do repositório

```text
Desafio-Tecnico/
├── Desafio_01/    # Formulário de cadastro com HTML e CSS
├── Desafio_02/    # Lista de tarefas com Vue 3
├── Desafio_03/    # Filtragem de usuários com TypeScript
├── Desafio_04/    # Consultas SQL
├── desafio_05/    # API de usuários com NestJS
└── README.md
```

## Como executar

As instruções específicas de instalação, execução e testes estão no README de cada desafio:

- [Desafio 01 — HTML e CSS](Desafio_01/README.md)
- [Desafio 02 — Vue 3 com Composition API](Desafio_02/lista_tarefas/README.md)
- [Desafio 03 — TypeScript](Desafio_03/README.md)
- [Desafio 04 — SQL](Desafio_04/README.md)
- [Desafio 05 — Backend NestJS](desafio_05/README.md)

Os exercícios são independentes e podem ser executados separadamente.

## Desafio 06 - Estratégia de commits

Organizei os commits por etapas, registrando a evolução das soluções ao longo do desenvolvimento.

No desafio de Vue, comecei pela criação da lista de tarefas, depois adicionei o modal, o gerenciamento das tarefas e os filtros. Em seguida, fiz um commit de refatoração para separar formulário, modal e itens em componentes.
No desafio de TypeScript, separei a implementação obrigatória, que retorna os nomes dos usuários com mais de 23 anos, da função genérica do bônus.
No desafio de banco de dados, registrei as consultas SQL e os prints dos resultados em um commit. Depois, fiz outro commit com a explicação das consultas no README, incluindo a versão do bônus compatível com MySQL.
No backend, registrei a implementação da API em um commit, os prints dos testes no Postman em outro e a documentação em um terceiro.

Utilizei as seguintes indicações nas mensagens:

- `feat`: criação de funcionalidades.
- `refactor`: reorganização do código.
- `docs`: explicações, instruções de execução e imagens dos resultados.

Essa divisão facilita acompanhar as etapas do trabalho e identificar o objetivo de cada alteração no histórico.
