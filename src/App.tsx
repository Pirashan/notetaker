import UserDisplay from './components/UserDisplay'
import { useQuery } from 'urql'
import { GetUsersDocument } from './graphql/generated'

function App() {
  const [results] = useQuery ({
    query: GetUsersDocument
  })

  return (
  <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4">
    {
      results.data?.users.map((user, index) => <UserDisplay user={user} key={index}/>)
    }
    <div>
      <p>View the GraphQL Yoga server!</p>
    </div>
  </div>
  )
}

export default App
