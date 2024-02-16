import { Outlet, useParams } from "react-router-dom";

function Info () {

  //useParams - URL 파라미터를 받는 훅
  let params = useParams()
  //console.log(params)
  //console.log(params.a) //params안에는 라우터에 설정한 키가 있습니다.

  let {a, b} = params;
  
  //a에 이용해서 데이터를 가져와야 한다

  //info페이지에서는 URL파라미터를 2개 받고 싶다면?


  return (
    <div>
      General Information <br/>
      첫번째 {a}번 데이터 입니다. <br/>
      두번째 {b} 데이터 입니다.
      <Outlet />
    </div>
    
  )
}

export default Info;