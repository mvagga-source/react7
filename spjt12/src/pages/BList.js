import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BList = () => {

    const navigate = useNavigate();

    const [boards, setBoards] = useState(
        [
        // {'bno':'1','btitle':'게시글 제목입니다1','bcontent':'게시글 내용 입니다.1'},
        // {'bno':'2','btitle':'게시글 제목입니다2','bcontent':'게시글 내용 입니다.2'},
        // {'bno':'3','btitle':'게시글 제목입니다3','bcontent':'게시글 내용 입니다.3'},
        ]
    );

    const [flag, setFlag] = useState(true);

    useEffect(
        () => {
            //axios -> setBoards
            axios.get('http://localhost:8000/customer/clistJson/',{params:{'page':3,'id':'aaa'}})
            // axios.post('http://localhost:8000/customer/clistJson/',{page:8})
            .then(res=>{
                console.log('넘어온',res.data.list);
                setBoards(res.data.list);
            })
        },[flag]
    )

    const deleteBtn =(bno)=>{
        if(window.confirm(`${bno} 게시글을 삭제하시겠습니까?`)){
            // axios.delete('http://localhost:8000/customer/cdeleteJson/',{data:{'bno':bno}})
            axios.delete(`http://localhost:8000/customer/cdeleteJson/${bno}/`,{data:{'name':'홍길동'}})
            .then(res=>{
                alert(`${bno}번 게시글을 삭제합니다.`);
                navigate('/BList');
                setFlag(!flag);
            })

        }
    }

    const board_list = boards.map( (board) => {
        return(
            <div className="card" key={board.bno}>
            <div className="card-header">
                번호 : {board.bno}
            </div>
            <div className="card-body">
                <h5 className="card-title">제목 : {board.btitle}</h5>
                <p className="card-text">{board.bcontent}</p>
                <button href="#" className="btn btn-primary">수정</button>
                <button onClick={()=>deleteBtn(board.bno)} href="#" className="btn btn-primary">삭제</button>
            </div>
            </div>        
        )
    })

    const writeBtn = () =>{
        navigate('/BWrite');
    }

    return(
      <div className="root">
        <h2>BList 페이지</h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button onClick={writeBtn} className="btn btn-primary me-md-2" type="button">글쓰기</button>
        </div>                
        {board_list}


      </div>        
    )

}

export default BList;