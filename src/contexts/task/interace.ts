export enum TaskStatus {
  pending = 'PENDING',
  progress = 'PROGRESS',
  done = 'DONE'
}

export interface Task {
  id: number
  title: string
  taskStatus: string
}

export interface ContextData {
  tasks: Task[]
  handleDeleteTask(id: number): void
  handleSaveTask(task: Task): void
  handleAddTask(task: Task): void
}
