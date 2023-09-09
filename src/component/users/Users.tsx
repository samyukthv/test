import setUser from "../../customeHook/SetUser"
import Card from '../card/Card'
import User from "../../model/UserInterface";
import Skelton from '../skelton/Skelton'

function Users() {

  const [users,setUsers] : [User[], React.Dispatch<React.SetStateAction<User[]>>] = setUser()

    
  return (
    <>
      {users.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <>
          <Skelton/>
        </>
      )}
    </>
  )
}

export default Users;
