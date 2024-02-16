import { Link, NavLink, Outlet } from "react-router-dom"

function Board() {
  
  const myStyle = {
    color: "red",
    backgroundColor: "yellow"
  }

  return(

    <>
      <h3>공통 글 목록</h3>

      <ul>
{/*         
        <li><Link to="/board/1">1번글</Link></li>
        <li><Link to="/board/2">2번글</Link></li>
        <li><Link to="/board/3">3번글</Link></li>
 */}
      {/* NavLnik는 컴포넌트에서 함수를 정의하면 첫번쨰 매개변수로, 현재 라우터 주소와 동일한 경우 true를 전달함 */}
        <li><NavLink to="/board/1" style={ ({isActive}) => (isActive ? myStyle : null) }>1번글</NavLink></li>
        <li><NavLink to="/board/2" style={ ({isActive}) => (isActive ? {color:"red"} : null) }>2번글</NavLink></li>
        <li><NavLink to="/board/3" style={ ({isActive}) => (isActive ? myStyle: null) }>3번글</NavLink></li>

      </ul>
      
      <Outlet/>

    </>

  )
}

export default Board
