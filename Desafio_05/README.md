# Explicação de como foi organizado

Organizei o backend em NestJS separando os arquivos por responsabilidade. Os arquivos relacionados aos usuários ficam na pasta `src/usuarios/`.

1. `main.ts`: inicia a aplicação e configura a porta do servidor.
2. `app.module.ts`: é o módulo principal e importa o módulo de usuários.
3. `usuarios.module.ts`: registra o controller e o service de usuários.
4. `usuarios.controller.ts`: define as rotas `GET /users` e `POST /users`. Recebe as requisições e chama o service.
5. `usuarios.service.ts`: contém a lógica para listar e cadastrar usuários. Também mantém o array em memória, gera IDs sequenciais e verifica se `name` e `email` são textos não vazios.
6. `usuario.interface.ts`: define a estrutura de um usuário, com `id` do tipo `number` e `name` e `email` do tipo `string`.
7. `criar-usuario.dto.ts`: define os campos recebidos no cadastro: `name` e `email`.

O controller utiliza o service por meio de dependência do NestJS. Dessa forma, as rotas ficam separadas da lógica de cadastro e armazenamento.
Os usuários ficam em memória. Ao reiniciar o servidor, a lista volta aos dados iniciais. Inclui na pasta imagens os prints do teste no POSTMAN

## Como executar

Com o Node.js instalado, abra o terminal na pasta `Desafio-Tecnico` e acesse o projeto:

```bash
cd Desafio_05
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run start
```

A API estará disponível em `http://localhost:3000`.

## Como testar no Postman

Para listar os usuários, envie uma requisição **GET**:

```text
http://localhost:3000/users
```

O retorno será:

```json
[
  { "id": 1, "name": "Ana", "email": "ana@email.com" },
  { "id": 2, "name": "Pedro", "email": "pedro@email.com" }
]
```

Para cadastrar um usuário, envie uma requisição **POST** para o mesmo endereço. Em **Body → raw → JSON**, informe:

```json
{
  "name": "Felipe",
  "email": "felipe@email.com"
}
```

A API retorna o usuário criado com status `201`. Faça outro `GET /users` para conferir sua inclusão na lista.

## Estrutura Desafio 05 — Backend NestJS

```text
Desafio-Tecnico/
└── Desafio_05/
    ├── imagens/
    │   ├── GET_do_users.png
    │   ├── POST_do_users.png
    │   └── GET_apos_POST_users.png
    ├── src/
    │   ├── usuarios/
    │   │   ├── dto/
    │   │   │   └── criar-usuario.dto.ts
    │   │   ├── usuario.interface.ts
    │   │   ├── usuarios.controller.ts
    │   │   ├── usuarios.module.ts
    │   │   └── usuarios.service.ts
    │   ├── app.module.ts
    │   └── main.ts
    ├── .gitignore
    ├── .prettierrc
    ├── nest-cli.json
    ├── oxlint.json
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── tsconfig.build.json
    └── tsconfig.json
```
