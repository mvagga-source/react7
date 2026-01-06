import logo from './logo.svg';
import React,{useState,useEffect,useRef} from 'react';
import './App.css';
import './css/style.css'

function App() {

  // useState 변수 - 값이 변경되면 전체 reload됨
  const [cnt,setCnt] = useState(0);
  const [id,setId] = useState('aaa');

  // useRef : 값이 변경되어도 reload되지 않음, reload되어도 값을 유지
  // current키에 값을 저장 cntRef.current
  const cntRef = useRef(5);
  
  let count = 0; // 일반변수 : reload되면 값이 리셋됨

// 실행시 반복 실행됨
  useEffect(
    ()=>{
      console.log("최초 실행시 실행");
    }
  );

  // 최초실행시 실행됨
  useEffect(
    ()=>{
      console.log("최초 실행시 실행");
    },[cnt] // 특정변수가 변경될때 실행
  );

  // 최초 1회먄 실행됨
  useEffect(
    ()=>{
      console.log("최초 실행시 실행");
    },[] 
  );

  // useState 변수값 출력방식
  const cntBtn = () =>{
    //alert('확인');
    setCnt(cnt+1);
    console.log("cnt : ",cnt);
    console.log("count : ",count);        
    console.log("refcount : ",cntRef.current);
  }

  // 일반변수 변수값 출력방식
  const countBtn = () =>{
    //alert('확인');
    count += 1;
    console.log("count : ",count);
    // document.getElementById('main').innerText = count;

    // useState 변수
    setId('bbb'+count);
    console.log("id : ",id)
  }

  // 일반변수 변수값 출력방식
  const refBtn = () =>{
    //alert('확인');
    cntRef.current += 1;
    console.log("refcount : ",cntRef.current);
  }

  return (
    <div className="root">
      <div className='txt' id='main'>{cnt}</div>
      <button onClick={cntBtn}>useState 확인</button>
      <button onClick={countBtn}>일반변수 확인</button>
      <button onClick={refBtn}>ref변수 확인</button>
    </div>
  );
}

export default App;
