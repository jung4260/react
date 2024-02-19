import ColorContext from "../ContextAPI/ContextAPI";


function ColorComponent() {

const func1 = (value) => {
  return (
    <div style={{color: value.color}}>
      안녕하세요? 값: {value.color}
    </div>
  )
}

  return (
    <>
      <ColorContext.Consumer>
        {(value) => func1(value)}
      </ColorContext.Consumer>
    </>
  )

}

export default ColorComponent;