import { useRef } from "react";





function HookEffect2 () {

  //특정태그의 이름 붙히기 -> 핸들링할 태그에 ref속성을 달아주면 됩니다.
  let a = useRef(null);


  let handleClick = () => {
    //요기에서는 input의 value값을 얻어야 합니다
    console.log(a);
    console.log(a.current.value);
    console.log(`input태그의 type: ${a.current.type}`);
    a.current.focus();
  }

  return (
    <>
      <div>
        할일:<input type="text" ref={a}/>
        <button type="button" onClick={handleClick} >useRef사용하기</button>

      </div>


    </>

  )





}

export default HookEffect2;








