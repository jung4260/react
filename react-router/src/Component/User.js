import { Outlet, useLocation, useSearchParams } from "react-router-dom";

function User () {

  //1. useLocation 훅을 이용해서 파라미터 받음
  //let location = useLocation()
  //console.log(location);

  //2. useSearchParam
  // let result = useSearchParams();
  // console.log(result);

  let [obj, f] = useSearchParams(); //obj - 파라미터값을 제어할 수 있는 함수, f - 파라미터를 변경하는 함수
  // console.log(obj)
  // console.log(f)
  let name = obj.get("name"); //request.getParameter("name")
  let age = obj.get("age");

  return(
    <div>
      User_Information <br/>
      쿼리스트링으로 넘어온 값: name:{name} age:{age}
      <button type="button" onClick={ () => {f( {name:"변경", age:"변경"} )} }>Parameter값 강제로 변경</button>

    </div>
    
  )

}

export default User