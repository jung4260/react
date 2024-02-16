import {useEffect, useState} from "react"


function HookEffect () {

  let [name, setName]= useState('');
  let [age, setAge] = useState(0);

  console.log(1)

  //useEffect (실행시킬콜백) 클래스형 컴포넌트의 componentDidMount() 대체함
  //랜더링 이후에 실행됨
  // useEffect( () => {
  //     console.log(`랜더링 이후에 실행됨: ${name}`)
  // })

  //useEffect('실행시킬콜백', [])
  //첫번째 랜더링 이후에 단 1번만 실행됨
  // useEffect ( () => {
  //     console.log('첫번쨰 랜더링에만 실행됨')
  // }, [])

  //useEffect(실행시킬콜백, [State값]) -> 클래스형 컴포넌트의 componentDidUpdate() 대체함
  //State값이 업데이트 될때 마다 실행됨 (name값이 변경될때, age값이 변경될때 실행됨.)
  // useEffect ( () => {
  //   console.log('특정값이 업데이트 될때 실행됨')
  // }, [name, age])

  //useEffect(실행시킬 콜백 (return))
  //
  useEffect ( () => {

    console.log('mount이후에 실행이 됩니다.')

    return () => {
      console.log('unmount될때 실행됩니다.')
    }

  }, [age])
  

  //추가 - useEffect는 여러개 만들 수도 있습니다.
  useEffect( () => {
    console.log("두번째 effect함수 실행됨")
  })

  console.log(2)

  return(
    <>
      이름: <input type="text" name="name" onChange={ (e) => setName(e.target.value) } value={name} /> <br/>
      나이: <input type="text" name="age"  onChange={ (e) => setAge(e.target.value) } value={age} /> <br/>

      이름:{name} <br/>
      나이:{age}
    </>

  )



}





export default HookEffect;

