import logo from './logo.svg';
import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import './css/style.css'
import Movies from './comp/movies';
import MovieForm from './comp/movieForm';


//useEffect 리로딩될때 사용

function App() {

  // const movies = [
  //   {'no':1, 'title':'아바타1','year':2002},
  //   {'no':2, 'title':'아바타2','year':2003},
  //   {'no':3, 'title':'아바타3','year':2004},
  // ]

  const [movies, setMovies] = useState(
    [
      {'no':3, 'title':'아바타3','year':2004},
      {'no':2, 'title':'아바타2','year':2003},
      {'no':1, 'title':'아바타1','year':2002},
    ]
  );
  
  // 2. 데이터 삭제 : filter()
  // 삭제할 pk키 - no를 받아서 전달함
  const delMovie = (no) =>{
    setMovies(
      movies.filter(
        (movie)=>{
          // 결과를 충족한 테이터만 전달함 
          return(movie.no != no) // 하나의 데이터를 삭제
        })
    )
  }

  // 1. 리스트 출력 반복문 : map()
  // const renderMovies = '반복데이터';
  // map() 함수는 배열에 있는 데이터를 1개씩 가져와서 함수에 적용
  // key= 입력을 반드시 해야함(반복문일 경우)
  // 삼항식 - (조건)?맞으면:틀리면
  const renderMovies = 
  
    movies.length?

      movies.map( (movie)=>{
        return(
          <Movies movie={movie} delMovie={delMovie} key={movie.no} />
        )
      })
    :
      <div className="card">
          <h5 className="card-header"></h5>
          <div className="card-body">
              <h5 className="card-title">데이터가 없습니다.</h5>
          </div>
      </div>
  ;

  // 3. 데이터 추가 : [...movies,{'no':3, 'title':'아바타3','year':2004}]




  return (
    <div className="root">
      <h2>영화 등록</h2>
      <MovieForm movies={movies} setMovies={setMovies}/>

      {/* 영화리스트 */}
      <h2>영화 리스트</h2>
      {renderMovies}
      {/* <Movies movies={movies}/> */}
      {/* <Movies movies={movies} chaeck={1}/> */}

    </div>
  );
}

export default App;
