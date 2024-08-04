import ListViewer from "./ListViewer"

type User = {
    id: number,
    name: string
  }
  
const Users = () => {
    const persons: User[] = [
        { id: 1, name: "John" },
        { id: 2, name: "Kitty" }
      ]
    
      const personBuilder = (user: User) => {
        return <>
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
        </>
      }
    
      return (<>
        <ListViewer values={persons} itemBuilder={personBuilder} />
      </>)
}

export default Users