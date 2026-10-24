# Explicação das queries criadas

Na primeira consulta, utilizei `select *` para selecionar todas as colunas da tabela users. O `order by created_at desc` ordena os usuários pela data de criação, do mais recente para o mais antigo.
No bônus, utilizei `count(name)` para contar os usuários de cada período. A coluna `usuarios_criados` reúne os nomes separados por /, facilitando a conferência do resultado.
As consultas foram testadas em PostgreSQL, e os resultados estão nos prints anexados. Também incluí uma versão do bônus compatível com MySQL, conforme pedido desafio.

### Versão em MySQL

```text
select count(*) as qtde_usuarios_mes, group_concat( name separator ' / ' ) as usuarios_criados
from users
group by date_format( created_at, '%Y-%m' )
```

## Estrutura Desafio 04 - Consultas SQL

```text
Desafio-Tecnico/
└── Desafio_04/
    ├── consultas.sql
    └── README.md
    └── Resultado_Constula_Bonus.jpeg
    └── Resultado_Consulta_01.jpeg
```
