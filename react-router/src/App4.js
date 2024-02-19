import ColorComponent from "./Component2/ColorComponent";
import ColorContext from "./ContextAPI/ContextAPI";

function App () {

  return(
    <>
      <h3>Context Api 예시</h3>
      {/* provider는 하위 consumer로 변경된 값을 전달하는 역활 */}
      <ColorContext.Provider value={{color:'blue'}}>
        <ColorComponent />
      </ColorContext.Provider>
    </>

  )

}

export default App;