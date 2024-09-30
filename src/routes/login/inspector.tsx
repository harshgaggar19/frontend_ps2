import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/inspector')({
  component: () => <div>Hello /login/inspector!</div>,
})
