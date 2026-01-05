import {useState} from 'react'; // 리로드 후 값 변경
import './css/style.css'

function App() {

  // 자바스크립트 변수 선언
  let id = 'aaa';

  // usestate 변수 선언
  // 변수, 값변경 함수
  const [userId,setUserId] = useState('abc');
  console.log('abc useState변수1 : ',userId);

  // 내부함수 선언
  const loginBtn = () => {
    alert('변수의 값 변경');
    // id = 'bbb';
    // console.log('aa변수값 변경',id);
    setUserId('bbb'); //화면리로드
    console.log('abc useState변수2 : ',userId);
  }

  const aa2 = function(){
    alert('loginBtn2 클릭')
  }

  function loginBtn3(){
    alert('loginBtn3 클릭')
  }

  return (
    <div className="App">
      <h2>메인</h2>
      <div className='txt'>{userId}</div>
      <input type='text' placeholder='아이디를 입력하세요'/>
      <br/>
      <button onClick={loginBtn}>로그인</button>
    </div>
  );
}

export default App;
