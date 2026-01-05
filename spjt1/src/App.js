import logo from './logo.svg';
import './App.css';
import './css/style.css';
import es_image from './es_d5b0cc0b2be847c58fc488b6e14654eb.jpg'

function App() {

  // css 문법(내부링크 방식) - 문법구조가 달라 잘 사용안함
  // css 문법(외부링크 방식을 선호함)
  // var : 이전 버전의 변수 선언
  // let : 최근 버전의 변수 선언
  // const : 최근 버전의 상수 선언

  const title1 = {
    // textAlign : 'center',
    // backgroundColor : 'yellow',
    // fontSize : '40px',
  }

  return (
    <>
      <div></div>
      <div className="App">
        <div></div>
        <div></div>
        <h2 className='main' style={title1}>// 메인 페이지 //</h2>
        {/* src폴더에서 import사용방법 */}
        <img src={es_image} />
        {/* public폴더에서 절대링크 사용방법 */}
        <img src='/images/es_8ed85aafbc28469f9c20ed72acb34ee5.jpg' />
      </div>
    </>
  );
}

export default App;
