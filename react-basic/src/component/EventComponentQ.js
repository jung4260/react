import { useState } from "react";

function EventComponentQ () {

  let [value, setMenu] = useState('메뉴를 선택하시오');

  let dinner = (e) => setMenu(e.target.value);

  return (

    <div>
      <select onChange={dinner} >
        <option>메뉴 선택</option>
        <option>피자</option>
        <option value="hamburger">햄버거</option>
        <option value="chicken">치킨</option>
      </select>

      <h2>선택한 결과</h2>
      <h4>{value}</h4>

    </div>

  )


}




export default EventComponentQ;





