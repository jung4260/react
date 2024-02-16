import { useState } from "react";


function EventComponent2 () {

  //State 객체로 관리하기
  let [data, setData] = useState ({name: '' , topic: ''})

  let handleInput = (e) => {
    //e.target.value - 현재 사용자가 입력한 값
    let value = {...data, [e.target.name]: e.target.value} //기존값은 복사, 특정 키만 바꾸는 문법
    setData(value);
    //name값 얻어오기 e.target.name : 현재 tag의 name
    //console.log(e.target.name)
  }

  return (

    <div>
      <h3>Input 핸들링</h3>
      <input type="text" onChange={handleInput} value={data.topic} placeholder="할일" name="topic1" /> <br/>
      <input type="text" onChange={handleInput} value={data.name} placeholder="이름" name="name" /> <br/>
      <button type="button" onClick={() => setData({name: '', topic: ''})}> 클릭! </button> <br/>
      할일: {data.topic}, 이름:{data.name}
    </div>

  )



}


export default EventComponent2;

