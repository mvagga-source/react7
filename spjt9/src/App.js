import logo from './logo.svg';
import './App.css';
import './css/style.css';
import axios from 'axios'; // node.js 비동기식 서버통신 프로그램(axios)
import React,{useState,useEffect} from 'react';

function App() {

  // 자바스크립트 일반변수 - 변수값을 변경할수 있지만 html에 반영이 안됨. 리로딩되면 값이 리셋됨

  // 데이터가 변경이 되면 html페이지에 반영을 해주는 변수
  // const [users,setUsers] = useState(
  //   [
  //     {'id':'aaa','name':'홍길동','address':'서울시'},
  //     {'id':'bbb','name':'유관순','address':'인천시'},
  //     {'id':'ccc','name':'이순신','address':'부산시'},
  //   ]    
  // );
  
  // const user_list = [
  //   {'id':'aaa','name':'홍길동','address':'서울시'},
  //   {'id':'bbb','name':'유관순','address':'인천시'},
  //   {'id':'ccc','name':'이순신','address':'부산시'},
  // ]

  const [users,setUsers] = useState([]);

  // API 데이터 호출
  // react 리로딩되면 실행되는 함수, []선언 시 최초 1번만 실행
  // resrful API : <form method='POST'></form>
  // axios get : select, post : input, put : update, delete : delete 
  // useEffect(
  //   () => {
  //     //axios.get('https://jsonplaceholder.typicode.com/users')
  //     //axios.get('http://localhost:8000/member/userAll/')
  //     axios.get('http://localhost:8000/member/userAll/',{params:{id:'aaa',name:'홍길자'}} )
      
  //     .then((res) =>{
  //       console.log("json 데이터 : ",res)
  //       setUsers(res.data.arr);
  //     })
  //     .catch((error) =>{console.log(error)})
  //   },[]
  // )

// post 방식
  useEffect(
    () => {
      axios.post('http://localhost:8000/member/userInsert/',{id:'aaa',name:'홍길자'} )
      
      .then((res) =>{
        console.log("json 데이터 : ",res)
        setUsers(res.data.arr);
      })
      .catch((error) =>{console.log(error)})
    },[]
  )


  // useEffect(
  //   axios({
  //     method:'get',
  //     url:'https://jsonplaceholder.typicode.com/users',
  //     data:{},
  //   }).then((data)=>{
  //       console.log("성공");
  //     }).catch((error) =>{
  //       console.log("실패");
  //     })
  // ); // useEffect



  const user_list = users.map((user)=>{
    return(
      <div className="card" key={user.id}>
        <div className="card-header">번호 : {user.id}</div>
        <div className="card-body">
          <h5 className="card-title">이름 : {user.name}</h5>
          <p className="card-text">주소 : {user.phone}</p>
          <button href="#" className="btn btn-primary">수정</button>
          <button href="#" className="btn btn-primary">삭제</button>
        </div>
      </div>
    )
  });

  return (
    <div className="root">
      <h2>회원 리스트</h2>
      {user_list}

    </div>
  );
}

export default App;
