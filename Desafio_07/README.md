# Explicação de como faria a organização do projeto

Para começar um projeto fullstack, eu separaria o frontend e o backend em duas pastas diferentes dentro do mesmo repositório. Acho essa organização melhor porque facilita encontrar os arquivos e trabalhar em cada parte do projeto separadamente.

A estrutura inicial seria:

```text
projeto-fullstack/
├── frontend/
├── backend/
├── .gitignore
└── README.md
```

O README teria as instruções para executar o projeto e o `.gitignore` serviria apenas para evitar subir arquivos como `.env`.

## Frontend — Vue 3

No frontend utilizaria organizaria as pastas desta forma:

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── router/
│   ├── services/
│   ├── types/
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

- `assets`: arquivos CSS, imagens e outros recursos visuais.
- `components`: componentes que podem ser reutilizados em várias telas, como botões e formulários.
- `pages`: páginas principais da aplicação, como login e cadastro.
- `router`: configuração das rotas para navegar entre as páginas.
- `services`: funções para realizar as requisições ao backend.
- `types`: interfaces e tipos utilizados no TypeScript.
- `App.vue`: componente principal da aplicação.
- `main.ts`: arquivo responsável por iniciar o Vue.

Escolheria essa organização para não deixar tudo misturado dentro de uma única pasta. Por exemplo, se precisasse alterar alguma requisição da API, saberia que ela está em `services`, enquanto alterações de componentes visuais ficariam em `components`.

## Backend — NestJS

Como o NestJS trabalha com módulos, controllers e services, organizaria as pastas de acordo com cada funcionalidade.

```text
backend/
├── src/
│   ├── usuarios/
│   │   ├── dto/
│   │   │   └── criar-usuario.dto.ts
│   │   ├── usuarios.controller.ts
│   │   ├── usuarios.service.ts
│   │   └── usuarios.module.ts
│   ├── app.module.ts
│   └── main.ts
├── .env.example
├── nest-cli.json
├── package.json
└── tsconfig.json
```

Nesse exemplo, criei uma pasta de usuários, mas faria o mesmo para outras funcionalidades que fossem necessárias.

- `dto`: define os dados esperados nas requisições, podendo ser utilizado para validação.
- `controller`: recebe as requisições HTTP e chama os métodos do service.
- `service`: fica responsável pelas regras de negócio e processamento dos dados.
- `module`: organiza os controllers e services daquela funcionalidade.
- `app.module.ts`: módulo principal que reúne os outros módulos.
- `main.ts`: arquivo que inicia o servidor e permite configurar recursos como CORS e validações.

Também utilizaria um arquivo `.env` para configurações como a porta do servidor e conexão com o banco de dados, sem enviar informações sensíveis para o GitHub.

## Comunicação entre frontend e backend

A comunicação seria feita através de uma API REST. O frontend enviaria as requisições HTTP para o backend, o controller receberia essas requisições e chamaria o service responsável. Depois o backend retornaria os dados em JSON para serem utilizados nas telas.

No geral, começaria com essa estrutura mais simples e iria criando novas pastas conforme o projeto crescesse. Acho melhor organizar de acordo com a necessidade do que criar várias pastas que talvez nem sejam utilizadas.
