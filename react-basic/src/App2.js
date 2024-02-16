import { Fragment } from "react"
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";
import StateComponent from "./component/StateComponent";
import StateComponentQ from "./component/StateComponentQ";

function App () {

let name = "홍길동";
let phone = "010-1234-56789" 


  return (
    <Fragment>

      <h3>나의 1st 컴포넌트</h3>

{/*       <div>
        자식 컴포넌트 <br/>
        변수값: {name} <br/>
        변수값: {phone} <br/>
      </div> 
*/}
{/* 
      <MyComponent name = "홍길동" phone = {"010-1111-2222"} age ={10} /> <br/>
      <MyComponent name = "Adam" phone = {"010-4444-5555"} age={20}/> <br/>
      <MyComponent name = "Bryan" /> <br/>
      <MyComponent /> <br/>
      <MyComponent2 /> <br/>
      <MyComponent3 age={10} name = "Adam" />

 */}
      <MyComponent3 />


      <hr/>
      <h3>State 사용하기</h3>
      <StateComponent />

      <StateComponentQ />

    </Fragment>

  )
}





export default App
