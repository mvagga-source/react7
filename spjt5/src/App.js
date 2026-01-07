import logo from './logo.svg';
import React,{useState,useRef} from 'react';
import './App.css';
import './css/style.css'

function App() {

  const [cnt,setCnt] = useState(0);
  const [inputNum,setInputNum] = useState();

  // useRef변수 - focus() : 값변경 시 리로딩을 하지 않음
  const numRef = useRef();

  const countBtn = () =>{
    setCnt(cnt+1);
  }

  const upBtn = () =>{
    // setCnt(parseInt(inputNum));
    if(inputNum.trim() === 0){
      alert('숫자를 입력하세요');
      numRef.current.focus(); // 포커스 이동
      return;
    }
    setCnt(Number(inputNum));
    setInputNum('');
  }

  const onKeyUp = (e) =>{
    if (e.keyCode == 13){
      upBtn()
    }
  }

  const [Id,setId] = useState('');
  const [Name, setName] = useState('');
  const [loginValue, setLoginValue] = useState('');

  const loginBtn = () =>{
    setLoginValue(Id+','+Name);
    setId('');
    setName('');
  }

  return (
    <div className="root">
      <h2>메인페이지</h2>
      <div className='txt'>{cnt}</div>
      <input ref={numRef} type='text' placeholder='숫자를 입력하세요' value={inputNum} 
        onChange={(e)=>{setInputNum(e.target.value)}} 
        onKeyUp={onKeyUp} /><br/>
      <button onClick={countBtn}>숫자증가</button>
      <button onClick={upBtn}>input 확인</button>
      <br/><br/>
      <hr/>
      <h2>로그인</h2>
      <div className='txt'>{loginValue}</div>
      <input type='text' placeholder='아이디를 입력하세요' value={Id} onChange={(e)=>{setId(e.target.value);}} /><br/>
      <input type='text' placeholder='이름을 입력하세요' value={Name} onChange={(e)=>{setName(e.target.value);}}/><br/>
      <button onClick={loginBtn}>로그인</button>

    </div>

  );
}

export default App;
