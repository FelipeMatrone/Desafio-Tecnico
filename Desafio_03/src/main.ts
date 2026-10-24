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