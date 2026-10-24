select *
from users 
order by created_at desc


select count( name ) as qtde_usuarios_mes, array_to_string( array_agg( name ), ' / ' ) as usuarios_criados
from users 
group by extract( month from created_at )