import { useState } from "react";



function IterationComponentQ2 () {

  //1.select 태그 안에 들어가는 option을 반복으로 그립니다.
  const list = ['HTML', 'Javascript', 'Java', 'CSS', 'Oracle', 'Mysql']
  let subject = list.map ( (value,index) => <option key={index}>{value}</option> )

  //2.데이터도 반복으로 그립니다.
  const data = [
    {id: 1, type: 'Java', teacher: '이순신'},
    {id: 2, type: 'Java', teacher: '홍길자'},
    {id: 3, type: 'Javascript', teacher: '홍길동'},
    {id: 4, type: 'Oracle', teacher: '이순신'},
    {id: 5, type: 'Mysql', teacher: '이순신'},
    {id: 6, type: 'CSS', teacher: '박찬호'},
    {id: 7, type: 'HTML', teacher: 'coding404'},
  ];
  const [allInfo, setInfo] = useState(data);
  let info = allInfo.map ( value => <li key={value.id}> {value.type}-{value.teacher} </li> )
  

  //3. select 태그에서 체인지가 일어나면 state에서 필터링을 하면 됩니다.
  const displayNewList = [...data];
  let sortSubject = (e) => {
    const sortDisplayList = displayNewList.filter (value => e.target.value == value.type)
    setInfo(sortDisplayList)
  }

  //4. 검색기능 - 인풋태그의 값을 가지고 state에서 필터링
  const [input, setInput] = useState('');
  let handleInput = (e) => {
    setInput(e.target.value);
  }
  let search = () => {
    const searchDisplayList = displayNewList.filter (value => 
                                                    input.toLowerCase() == value.type.toLowerCase() || input == value.teacher)
    setInfo(searchDisplayList);
  }

  return(

    <div>
      
      Search: <input type="text" value={input} onChange={handleInput}></input> 
      <button type="button" onClick={search}>검색</button>
      <br/>
      과목찾기:<select onChange={sortSubject} >
                {subject}
              </select>

      <ul>
        {info}
      </ul>



    </div>
  
  )


}







export default IterationComponentQ2;

