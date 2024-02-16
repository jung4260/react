import { useState } from "react";

function StateComponent () {
  
  //함수형 컴포넌트에서 useState() 훅을 사용합니다.
  //const arr = useState("초기값")
  //함수형 컴포넌트에서 useState() Hook을 사용합니다
  //let data = arr[0];
  //let setData = arr[1]; //function

  let [data, setData] = useState("정신차려라!!!");
  let [color, setColor] = useState('black');

  let change = function () {
    setData('정신을 차렸습니다!'); //state값을 체인지 -> 화면을 다시 그리게 됩니다.
    console.log(data) //->setData함수는 비동기적인 실행
  };

 //**1st** let unChange = () => {setData('다시 자라')};
 //**2nd** let unChange = () => setData ('다시 주무세요');

    return (
      <div>
        {/* style={{속성명: 값}} */}
        <h3 style={{color: color}}>State 사용하기</h3>

        <button type="button" onClick={change}>일어나!!</button>
        <button type="button" onClick={ () => setData('다시 주무세요')}>다시 잠들어...</button>

        <button type="button" onClick={ () => setColor("red") }>붉은색</button>


      </div>

    )


}


export default StateComponent;

