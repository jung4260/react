import { useParams } from "react-router-dom"

function BoardContent() {

  let {num} = useParams();


  return (
    <>
      <h3>게시판</h3>
      {num}번 데이터

    </>
  )


}



export default BoardContent