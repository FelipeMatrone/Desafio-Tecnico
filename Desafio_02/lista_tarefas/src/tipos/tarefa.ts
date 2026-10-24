export interface Task {
  id: number
  title: string
  finalizados: boolean
}

export type Filter = 'todos' | 'pendente' | 'finalizados'
