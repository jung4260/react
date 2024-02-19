import { useContext } from "react"
import UserContext from "../ContextAPI/ContextAPI2"

function C() {
  //사용하는 곳
  const {state, action} = useContext(UserContext)
  
  return (


    <div>
      <h3>C컴포넌트</h3>
      A컴포넌트에서 바꾼 id값: {state.id} <br />
      A컴포넌트에서 바꾼 name값: {state.name} <br />
    </div>

  )
  

}


export default C