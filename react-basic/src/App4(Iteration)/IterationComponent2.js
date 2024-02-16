import { useState } from "react";



function IterationComponent2 () {

  //State로 관리할 배열을 하나 생성
  const data = [
    {id:1, topic:"hello"}, 
    {id:2, topic:"bye"}, 
    {id:3, topic:"안녕"}, 
  ]

  const [list, setList] = useState (data); //할일목록
  const [topic, setTopic] = useState (''); //인풋데이터

  //삭제기능
  let handleRemove = (id) => {
    //filter 사용 -> return true인 값으로 필터링
    //state 값을 필터
    let remove = list.filter( item => {
      return item.id !== id
    });
    setList(remove);
  }

  //State를 반복으로 돌려서 li로 출력
  //대상을 클릭할 때, 해당 태그에서 id를 넘겨주는 방법
  const lis = list.map( a => <li key={a.id} onDoubleClick={ () => {handleRemove(a.id)} } > 
    {a.topic} 
    </li>) 

  //input data handling
  let handleInput = (e) => {
    setTopic (e.target.value);
  }

  //click event handling -> input data {id: ~, topic: input data} -> list로 변경
  let handleClick = () => {
    let obj = {id: list[list.length-1].id + 1, topic:topic};
    
    let newList = list.concat(obj); //concat합쳐서 new 배열을 반환
    console.log(newList);
    setList(newList);
  }




  return(

    <div>
      <h3>할일 목록 추가 or 삭제</h3>

      <input type="text" name="topic" value={topic} onChange={handleInput} placeholder="ToDo list" />
      <button type="button" onClick={handleClick}>추가하기</button>

      <ul>
        {lis}
      </ul>
    </div>

  )



}


export default IterationComponent2;

