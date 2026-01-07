import React,{useState} from "react";

// 컴포넌트로 값을 전달 : props값 (매개변수 - 변수, 함수, useState ..)
// const Number = (props) =>{
//     const [num,setNum] = useState(0);
//     const cntBtn = () =>{
//         setNum(num+1);
//     }

//     return(
//         <>
//             <h4>숫자증가 컴퍼넌트 {props.number}</h4>
//             <div>{num}</div>
//             <button onClick={cntBtn}>{props.btnName}</button>
//         </>
//     )
// }

const Number = ({btnName,number}) =>{
    const [num,setNum] = useState(0);
    const cntBtn = () =>{
        setNum(num+1);
    }

    return(
        <>
            <h4>숫자증가 컴퍼넌트 {number}</h4>
            <div>{num}</div>
            <button onClick={cntBtn}>{btnName}</button>
        </>
    )
}

export default Number;