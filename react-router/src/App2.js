import { useEffect, useState } from "react";

function App() {
  
 const [data, setData] = useState (null)

  let handleClick = () => {
    //데이터 가져오기
    fetch('https://run.mocky.io/v3/72e31751-9af0-4344-8e66-89367c8fbd39')
    .then( response => response.json() )
    .then( data => setData(data) )
  }

  //화면이 랜더링 되는 순간 데이터를 가져오기 (생명주기 기억하기 useEffect 아니면 무한루프에 빠짐)
  const [example, setExample] = useState(null)

  useEffect(  () => {
    fetch('https://run.mocky.io/v3/72e31751-9af0-4344-8e66-89367c8fbd39')
    .then( response => response.json() )
    .then( data => setExample(data) )
  }, []) //-> 첫번째 랜더링에만 실행됨

  return(
    <>
      <div>
        <h3>hello world</h3>
        <button type="button" onClick={handleClick}>mock에서 데이터 가지오기</button> <br/>

        {
          data === null ? 
          null
          :
          <div>  
          이름: {data.name} <br/>
          나이: {data.info.age} <br/>
          전화번호: {data.info.phone} <br/>
          </div>
        }

      <hr />
        
      {/* 
        위에 구문과 동일한 문장
        example이 null이면, 뒤에 실행 안하고
        null이 아니면 뒤에를 반환
      
      */}
      {
          example &&
          <div>
            {example.name} <br/>
            {example.info.age} <br/>
            {example.info.phone} <br/>
          </div>

      }

      
      </div>
    </>
  )

}


export default App;