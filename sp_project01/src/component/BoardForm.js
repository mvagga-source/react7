import React from "react";

const BoardForm = () =>{

    return(
        <>
            <h3>게시글 쓰기</h3>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">게시글 제목</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">게시글 내용</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-primary">게시글 저장</button>
            </form>        
        </>
    )

}

export default BoardForm;