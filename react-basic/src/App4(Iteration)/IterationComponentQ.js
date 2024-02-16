
import { useState } from 'react';
import img1 from '../img/1.jpg'


function IterationComponentQ () {
  /* 
    img or css 파일 참조 방법
    <1> src에 넣는 경우 - import 문장 **<img src={img1} />**
    <2> public폴더 안에 있는 img폴더의 파일을 참조 **<img src={"/img/img1.png"} />**
  */
  const arr = [
      {src : '/img/img1.png', title : '아이폰10', price: 1000},
      {src : '/img/img2.png', title : '아이폰11', price: 2000},
      {src : '/img/img3.png', title : '아이폰12', price: 3000},
      {src : '/img/img4.png', title : '아이폰13', price: 4000},
  ]

  const [img, setImg] = useState('');

  let handleClick = (e) => {
    setImg (e.target.src);
  }

  const list = arr.map ((value,index) => 
                      <div key={index} onClick={handleClick} > 
                        <img src={value.src}></img> 
                        <p>상품:{value.title}</p>
                        <p>가격:{value.price}</p>
                      </div>
                      )


  return (

    <div>
      <div>
        <img src={img} />
        <div style={{display:'flex', justifyContent:'space-between'}}>
          {list}
        </div>
      </div>
    </div>
  
  )



}






export default IterationComponentQ;




