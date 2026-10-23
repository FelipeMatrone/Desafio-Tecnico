# Explicação Breve de como foi organizado o do código

Fiz a organização em dois arquivos: index.html, style.css, feita essa separação para melhorar o entendimento do código e deixar o CSS mais fácil de ser reutilizado quando necessário.

No index.html, está a estrutura do formulário. Usei `<main>` como conteúdo principal, `<form>` para o cadastro, grupos .campo para cada par label + input, e um botão de envio.
Os atributos required, minlength, type, autocomplete e for/id ajudam na validação dos campos, usabilidade e acessibilidade.

No style.css, tem toda a estética, ou seja, a aparência. Começa com um reset simples `(\*)` para padronizar os espaçamentos e box-sizing. Depois, um body para centralizar o formulário na tela com Flexbox.
A hierarquia visual no CSS ficou assim:

    * body: fundo, fonte e centralização.
    * .container: limita a largura máxima do conteúdo.
    * .formulario: cria o cartão branco, com espaçamento, bordas arredondadas e sombra.
    * .campo, label e input: organizam e estilizam cada campo.
    * Estados interativos: :focus nos inputs, :hover e :focus-visible no botão.
    * @media (max-width: 480px): reduz o preenchimento do cartão em telas pequenas.

## Estrutura Desafio 01

```text
Desafio-Tecnico/
│
├── Desafio_01/
   └── index.html/
   └── style.css/
   └── README.md/

```
