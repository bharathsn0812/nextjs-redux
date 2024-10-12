import TodoList from '@/app/components/TodoList'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <TodoList />

      <br /><br /><br />
      <div>
        <Link href="/navigate">Navigate Test</Link>
      </div>
    </main>
  )
}