interface Usuario {
  id: number
  name: string
  age: number
}

const users: Usuario[] = [
  { id: 1, name: 'Ana', age: 25 },
  { id: 2, name: 'Pedro', age: 30 },
  { id: 3, name: 'Maria', age: 22 },
]

function maioresDe23( usuarios: Usuario[] ): string[] {
  return usuarios
    .filter((usuario) => usuario.age > 23)
    .map((usuario) => usuario.name)
}

console.log(maioresDe23(users))

function filtrarPorCampoNumerico<
  Campo extends PropertyKey,
  Objeto extends Record<Campo, number>,
>(
  objetos: Objeto[],
  campoNumerico: Campo,
  limite: number,
): Objeto[] {
  return objetos.filter((objeto) => objeto[campoNumerico] > limite)
}

const usuariosPorIdade = filtrarPorCampoNumerico(users, 'age', 23)
console.log('Nomes com idade maior que 23:', usuariosPorIdade.map((usuario) => usuario.name))

const usuariosPorId = filtrarPorCampoNumerico(users, 'id', 1)
console.log('Usuários com id maior que 1:', usuariosPorId)
