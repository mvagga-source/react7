import React, { useState, useEffect } from 'react';
import SplashScreen from './comp/start'; // start.js 불러오기
import Main from './comp/main';         // main.js 불러오기

function App() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // 2.5초 뒤에 메인 화면으로 전환 (2초 유지 + 0.5초 사라짐)
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* showMain이 false면 스플래시를, true면 메인을 보여줍니다 */}
      {!showMain ? <SplashScreen /> : <Main />}
    </div>
  );
}

export default App;