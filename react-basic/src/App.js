import HookEffect from "./App5(Hook)/HookEffect(Mount)";
import HookEffect2 from "./App5(Hook)/HookEffect2(ref)";

import './App6(CSS)/App.css';
import myStyle from'./App6(CSS)/App.module.css'

function App () {

  return(
    <>
      <HookEffect />
      <hr/>
      <HookEffect2 />
      <hr/>

      <h3 className="myApp">css파일로 디자인하기</h3>

      <h3 style={{backgroundColor:'pink', color:'gray'}}>css구문으로 직접 디자인하기</h3>

      <h3 className={myStyle.app_wrap}>
        module.css파일로 디자인하기
        <span className={myStyle.app_item}>HongGilDong</span>
      </h3>

      <h3 className="title">module.css파일로 디자인하기</h3>

      <h3 className="public_style">public폴더에 css만들고 기본으로 참조시키기</h3>


    </>
  )


}




export default App;


