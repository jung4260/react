import { useState } from "react" ;
import axios from 'axios';

function App () {
  
  const[data, setData] = useState(null);

  let handleClick =  async () => {
    // axios.get('https://run.mocky.io/v3/72e31751-9af0-4344-8e66-89367c8fbd39')
    // .then( (response) => {
    //   setData(response.data)
    // })
    //async는 순서보장을 하지 않는다!! 
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then ( response => console.log(response.data)) 
    
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    // .then ( response => console.log(response.data))
    
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    // .then ( response => console.log(response.data))

    // 순서를 보장 받으려면 콜백지옥을 만들어야 한느데, async, await으로 깔끔하게 코드 정리가 가능합니다.
    // axios.get ('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then (response => {
    //   console.log(response.data);//hi.json 도착

    //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //   .then(response => {
    //     console.log(response.data) //hello.json 도착

    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //     .then (response => {
    //       console.log(response.data) //by.json 도착

    //     })
    //   }) 
    // })
    const response1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log(response1.data); //hi.json

    const response2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    console.log(response2.data); //hello.json

    const response3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    console.log(response3.data); //by.json

  }

  return (
    <>
      <h2>Axios 사용하기</h2>
      <button onClick={handleClick}>클릭시 데이터 가져오기</button>
      
      {
        data &&
        <div>
          짠! : {data.name}
        </div>
      }

    </>
  )
}





export default App