


function IterationComponent () {

  //맵 -> 콜백함수의 리턴에 담긴 값으로 새로운 배열을 만들어냄
  const arr = [1,2,3,4,5]
  // const newArr = arr.map( (value, index, array) => {
  //     return value * 10;
  // });
  //console.log(newArr)

  const lis = arr.map ( (v,i) => <li key={i}> {v}입니다.</li>)
  

  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  )


}


export default IterationComponent;


