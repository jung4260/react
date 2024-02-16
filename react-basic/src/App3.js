import EventComponent from "./component/EventComponent";
import EventComponent2 from "./component/EventComponent2(MultipleEvent)";
import EventComponent2Q from "./component/EventComponent2Q";
import EventComponentQ from "./component/EventComponentQ";




function App() {

  return(

    <div>
      <h3>이벤트 활용하기</h3>
      <EventComponent />

      <hr />

      <h2>2024-02-14 숙제</h2>
      <EventComponentQ />
      
      <hr />

      <h2>Multiple Value Handling</h2>
      <EventComponent2 />

      <hr />
      <h2>Multiple Value Handling Quiz</h2>
      <EventComponent2Q />

    </div>




  )


}


export default App;




