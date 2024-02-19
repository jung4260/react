import { createContext } from "react";


//외부에서 관리할 변수 -> 컨텍스트 API 초기값 지정
const ColorContext = createContext ({color: 'red'})


export default ColorContext;