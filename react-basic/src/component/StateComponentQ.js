
import { Fragment, useState } from "react";

function StateComponentQ () {

  let [count, setNum] = useState(0);

  
  let minus = () => setNum(count - 1)
  let setZero = () => setNum (0);

  return (
    

    <div>
  
    {/* setState의 매개변수에 콜백함수를 넣어주면, 
      콜백의 첫번쨰 매개변수에, 이전 state값을 받을 수 있습니다. Ex) setNum()
      이전 state값을 받을 수 있습니다. */}



    <h2>카운트:{count}</h2>
    <button type="button" onClick={() => setNum ( (a) => {return a +1} )}>콜백함수로 증가</button>
    <button type="button" onClick={ ()=>setNum(count+1) }>증가</button>
    <button type="button" onClick={minus}>감소</button>
    <button type="button" onClick={setZero}>초기화</button>

    </div>
  )

}

export default StateComponentQ;


