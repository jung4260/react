import React from "react";

//클래스형 컴포넌트
class MyComponent3 extends React.Component {

  //클래스형에서는 props를 사용하기 전에 생성자의 매개 변수를 통해서 초기화 해주는 작업
  //생성자 첫번째 매개변수에 props가 전달이 됩니다.
  constructor (props) {
    super(props); //부보 클래스 (React.Component)에 (props) 전달
    this.props = props; //나의 맴버변수에 props를 저장한다.
    this.state = {a: "Adam", b: "Bryan"}
  }

  render() {
    let {age} = this.props;
    return (
      <div>
        이것은 MyComponent3입니다. <br/>
        props의 값: {age} <br/>
        홍길동은 {age}살입니다. <br/>
        State a Value: {this.state.a}; <br/>
        State b Value: {this.state.b}; <br/>

        <button onClick={() => {  this.setState ( {a: '변경!'}  ) } }>State 체인지</button>

      </div>
    )
  }
}




export default MyComponent3
