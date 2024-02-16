import { Fragment } from "react";
import PropTypes from 'prop-types';


function MyComponent (/* props */ {name, phone, age}) {

  // console.log(props);
  
  // let name = "홍길동";
  // let phone = "010-1234-56789" 

  // let name = props.name;
  // let phone = props.phone;
  // let age = props.age;

  //구조할당
  //et {name, phone, age} = props;

  return (

    <Fragment>

    <div>
      
    </div>

    <div>
    자식 컴포넌트 <br/>
    변수값: {name} <br/>
    변수값: {phone} <br/>
    변수값: {age == null ? null : age + "살" }<br/>
    </div>
    

    </Fragment>
  ) 

}

//props의 기본값 설정
//컴포넌트명.defaultProps = {대소문자 구분함}

MyComponent.defaultProps = {
  phone : "010-0000-0000",
  age : 0
}


//props의 타입검증
//컴포넌트명.propTypes = {}
MyComponent.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number.isRequired,
  age: PropTypes.number
}


export default MyComponent

