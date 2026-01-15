import axios from "axios";
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const BWrite = () => {

    const navigate = useNavigate();
    const [btitle,setBtitle] = useState('');
    const [bcontent,setBcontent] = useState('');
    const [id, setId] = useState('aaa'); // 로그인을 적용해서 session, token id를 가져옴

    useEffect(
        ()=>{
            console.log();
        },[] // 초기화
    )

    const saveBtn =()=>{
            //axios -> 게시글저장 : post방식 {}객체형태로 전송
            axios.post('http://localhost:8000/customer/cwriteJson/',{'id':id,'btitle':btitle,'bcontent':bcontent})
            .then(res=>{
                alert('게시글을 저장합니다.');
                navigate('/');
            })
    }

    return(
      <div className="root">
        <h2>BWrite 페이지</h2>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">게시글 제목</label>
            <input type="text" value={btitle} onChange={(e)=>{setBtitle(e.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">내용</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={bcontent} onChange={(e)=>{setBcontent(e.target.value)}}></textarea>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button onClick={saveBtn} className="btn btn-primary me-md-2" type="button">저장</button>
            <button className="btn btn-primary" type="button">취소</button>
        </div>        

      </div>        
    )

}

export default BWrite;