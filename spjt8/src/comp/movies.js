import React from "react";

// 컴포넌트 기본구조
// const movies = () =>{
//     return(
//         <>
//         </>
//     )
// }

// export default movies;

// 매개변수값 props(배열) or {movies}
// const Movies = ({movies, check}) =>{
const Movies = ({movie,delMovie}) =>{

    const delBtn =(no)=>{
        //alert(no + ' no. del');
        if (window.confirm(no+"번 데이터를 삭제하시겠습니까?")){
            delMovie(no);
        }
    }

    return(
        <div className="card">
            <h5 className="card-header">번호 : {movie.no}</h5>
            <div className="card-body">
                <h5 className="card-title">제목 : {movie.title}</h5>
                <p className="card-text">년도 : {movie.year}</p>
                <button href="#" className="btn btn-primary">수정</button>
                <button onClick={()=>delBtn(movie.no)}  className="btn btn-primary">삭제</button>
            </div>
        </div>        
    )
}

// 외부에서 호출가능
export default Movies;