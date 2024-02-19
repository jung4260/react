import { createContext, useState } from "react";


//Context API의 Provider와 Consumer를 외부에서 관리

//1. Context의 초기값
const UserContext = createContext ({
  state: {id: '', name: ''},
  action: {
    setData: () => {} //함수
  }
})


//2. Provider Component ->컴포넌트의 사이의 값은 children으로 전달됩니다.
const UserProvider = ({children}) => {
  
  console.log(children) //Provider에 사이로 들어오는 값

  //변경할 값은 state로 관리
  let [data, setData] = useState({id: 'aaa', name: '홍길동'})

  const value = {
    state : data,  //state의 초기값
    action: {setData} //여러 액션값을 관리할 수 있도로 객체(중괄호)로 선언 {}
  }

  return <UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>
}

//3. Consumer도 export
const UserConsumer = UserContext.Consumer
export { UserProvider, UserConsumer }


//4. CreateContext객체 export
export default UserContext


