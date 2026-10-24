# Explicação da declaração de tipos

Declarei a interface `Usuario` para definir a estrutura dos objetos: `id` e `age` são do tipo number, e `name` é do tipo string. Isso permite ao TypeScript verificar se cada usuário possui os campos e valores esperados.
O array `users` foi declarado como `Usuario[]`. A função `maioresDe23` também recebe `Usuario[]` e retorna `string[]`, pois o resultado contém apenas os nomes dos usuários com mais de 23 anos.
Utilizei `filter()` para selecionar os usuários pela idade e `map()` para extrair seus nomes. Os parâmetros dessas operações recebem a tipagem automaticamente a partir do array.

## Tipagem da função genérica

No bônus, criei `filtrarPorCampoNumerico` com dois tipos genéricos:

- Campo `extends PropertyKey`: representa a chave escolhida para a comparação.
- Objeto `extends Record<Campo, number>`: garante que cada objeto tenha essa chave com um valor numérico.

A função recebe `Objeto[]`, o `campoNumerico` e um limite do tipo number. Seu retorno também é `Objeto[]`, preservando o tipo dos objetos recebidos.
Essa abordagem permite reutilizar a função com campos como `age` e `id`, impedindo o uso de `name`, que é texto. A função retorna os objetos filtrados; quando preciso apenas dos nomes, utilizo `map()` no resultado.

## Estrutura Desafio 03 - Lista de Usuarios

```text
Desafio-Tecnico/
└── Desafio_03/
    ├── src/
    │   └── main.ts
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json
```

## Como Executar

Com o Node.js instalado, abra o terminal na pasta Desafio-Tecnico e acesse o projeto:

```
cd Desafio_03
```

Instale as dependências:

```
npm install
```

Execute o código:

```
npm start
```

Os resultados serão exibidos no terminal
