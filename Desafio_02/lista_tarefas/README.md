# Explicação de como foi organizado

Organizei a aplicação separando os componentes por responsabilidade:

1. App.vue: concentra a lista de tarefas, o filtro selecionado e o controle de abertura do modal. Também contém as funções para adicionar, concluir e remover tarefas.
2. FormularioTarefa.vue: controla o texto digitado, valida se não está vazio e emite um evento para adicionar a tarefa.
3. ModalTarefas.vue: exibe o modal, os filtros e a lista de tarefas.
4. ItemTarefa.vue: representa uma tarefa individual, com checkbox e botão de exclusão.

Os dados são enviados aos componentes filhos por props, e as ações são comunicadas ao componente pai por eventos. Assim, o App.vue mantém o controle da lista, sem os filhos alterarem diretamente os dados recebidos.
Os tipos compartilhados Task e Filter ficam em tipos/tarefa.ts, e os estilos ficam em assets/main.css.

Utilizei a Composition API com `<script setup lang="ts">` e duas primitivas principais:

- ref: para os estados reativos, como texto digitado, lista de tarefas, abertura do modal e filtro selecionado. Quando esses valores mudam, o Vue atualiza a interface automaticamente.
- computed: para gerar a lista filtrada a partir das tarefas e do filtro atual. Como essa lista é um valor derivado, ela é recalculada automaticamente quando suas dependências mudam.

Não utilizei reactive, pois ref já atende aos estados da aplicação, incluindo o array de objetos das tarefas. Essa escolha mantém o código mais simples e consistente.

## Estrutura Desafio 02 - Lista de Tarefas

```text
Desafio-Tecnico/
└── Desafio_02/
    └── lista_tarefas/
        ├── src/
        │   ├── assets/
        │   │   └── main.css
        │   ├── componentes/
        │   │   ├── FormularioTarefa.vue
        │   │   ├── ItemTarefa.vue
        │   │   └── ModalTarefas.vue
        │   ├── tipos/
        │   │   └── tarefa.ts
        │   ├── App.vue
        │   └── main.ts
        ├── .gitignore
        ├── env.d.ts
        ├── index.html
        ├── package.json
        ├── package-lock.json
        ├── README.md
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
```

## Como executar?

Com o Node.js instalado, abra o terminal na pasta Desafio-Tecnico e acesse o projeto:

```bash
cd Desafio_02/lista_tarefas
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
