import React from 'react';
import '../css/start.css';

const SplashScreen = () => {
  return (
    <div className="splash-container">
      {/* import 없이 public/images/icon.PNG를 바로 참조합니다 */}
      <img 
        src="/images/start.PNG" 
        alt="Silver Logo" 
        className="logo-anim" 
      />
    </div>
  );
};

export default SplashScreen;