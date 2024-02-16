import { Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


function Header() {

  //navigate 훅 => javascript의 history객체를 대신함
  const nav = useNavigate()
  //console.log(nav);

  const goHome = () => {
      nav('/') //홈으로
  }

  const goBack = () => {
      nav(-1) //뒤로가기
  }


  return (
    <Fragment>
      {/* 이 헤더태그가 주소는 변함 없이, info, user, home의 공통 레이아웃으로 들어가게 만드세요 */}
      <header>
        <p>제목</p>
        <ul>
          <li><Link to="/">목록1</Link></li>
          <li><Link to="/user">목록2</Link></li>
          <li><Link to="/info/:a/:b">목록3</Link></li>
        </ul>
        <div>
          <button type="button" onClick={goHome}>버튼1(홈으로)</button>
          <button type="button" onClick={goBack}>버튼2(뒤로가기)</button>
        </div>
      </header>
      <Outlet />
    </Fragment>
  )
}


export default Header;