import logo from './logo.svg';
import { useState, useEffect } from 'react';
import BoardForm from './component/BoardForm';
import Header from './component/Header';
import './App.css';

import { getBoards } from './api/Public_api';


function App() {

  const [boards, setBoards] = useState([]);

  // axios 실행
  // useEffect(()=>{
  //   axios.get('http://localhost:8181/customer/api_list')
  //   .then((Response)=>{
  //     console.log("데이터 : ",Response.data.list);
  //     //setBoards(Response.data.list)
  //   })
  // },[])

  useEffect( ()=> {
    loadBoards();
  },[]);

  const loadBoards = () =>{
    getBoards().then(res => {
      setBoards(res.data.list);
    })
  }

  // 반복문 실행
  const renderBoards = boards.map(board=>{
    return(
        <div className="card" key={board.bno}>
          <h5 className="card-header">{board.bno}</h5>
          <div className="card-body">
            <h5 className="card-title">{board.btitle}</h5>
            <p className="card-text">{board.bcontent}</p>
            <button type="button" class="btn btn-primary">수정</button>
            <button type="button" class="btn btn-secondary">삭제</button>
          </div>
        </div>
    );
  })

  return (
    <div className='App'>
      <h2>메인 페이지</h2>

        {/* 네비게이션 */}
        <Header/>

        {/* 입력창 */}
        <BoardForm/>

        {/* 리스트 시작 */}
        <h3>게시글 리스트</h3>
        {renderBoards}

    </div>
  );
}

export default App;
