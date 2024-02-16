import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import User from "./Component/User";
import Info from "./Component/Info";
import Board from "./Component/Board";
import BoardContent from "./Component/BoardContent";
import Header from "./header/Header";
import MyPage from "./Component/MyPage";


function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element= {<Home />} />
        {/* 쿼리스트링 방식 */}
        <Route path="/user" element={<User />} />
        {/* URL파라미터 방식 */}
        <Route path="/info/:a/:b" element={<Info />} /> 
      </Route>
{/* 
      <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/>
 */}

      {/* 중첩라우터 = 상위 컴포넌트에 Outlet을 사용해서 자식 컴포넌트를 그립니다.*/}
      <Route path="/board" element={ <Board/> } >
        <Route path=":num" element={ <BoardContent/>} />
      </Route>


      {/* navigate 컴포넌트 - 권한처리 */}
      <Route path='/mypage' element={<MyPage />} />



    </Routes>

  );
}

export default App;
