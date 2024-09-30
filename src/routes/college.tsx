import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/college')({
  component: () => <div>Hello /college!</div>,
})
