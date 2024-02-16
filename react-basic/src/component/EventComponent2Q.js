import { useState } from "react";



function EventComponent2Q ()  {
  //실습
  const [form, setForm] = useState({data:'', result:''})
  
  let handleChange = (e) => {
    //e.target.value
    setForm (  {...form, data: e.target.value} )
  }

  let handleClick = () => {
    //data값을 -> result에 넣는다. 그다음 data초기화
    setForm( {...form, data:"", result:form.data })
  }

  return(

    <div>
      클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리 <br />

      <input type="text" value={form.data} onChange={handleChange}></input>
      <button type="button" onClick={handleClick}>추가하기</button>
      <h3>결과</h3>
      <p>{form.result}</p>

    </div>


  )

}

export default EventComponent2Q;


