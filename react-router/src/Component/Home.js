import { Link } from "react-router-dom";


function Home() {
  return(
    <div>
      <h3>Home Sweet Home</h3>
      <ul>
        <li><Link to="/user">To UserPage</Link></li>
        
        {/* 쿼리스트링 방식 */}
        <li><Link to="/user?name=Hong&age=20">To UserPage (queryString)</Link></li>

        {/* URL파라미터 방식 */}
        <li><Link to="/info/1/apple">To InfoPage</Link></li>
        <li><Link to="/info/2/melon">To InfoPage</Link></li>
        <li><Link to="/info/3/orange">To InfoPage</Link></li>

      </ul>

      
    </div>


  )


}
export default Home;

