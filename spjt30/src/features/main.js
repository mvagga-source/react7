import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

const Main = () => {
  // --- 새로 추가된 상태 관리 (사이드바 & 공지) ---
  const [isLeftOpen, setIsLeftOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    // 스크롤 감시 로직: 요소가 화면의 10% 이상 보이면 'reveal' 클래스 추가
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });  
    }, { threshold: 0.1 });

    const scrollElements = document.querySelectorAll('.scroll-section, .glass-card');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    /* 사이드바 상태에 따라 클래스 동적 부여 */
    <div className={`main-container ${!isLeftOpen ? 'left-closed' : ''} ${!isRightOpen ? 'right-closed' : ''}`}>
      <div className="bg-glow"></div>

      {/* 상단 네비게이션 */}
      <nav className="top-nav">
        <a href="/main">
        <span>ACTION 101</span></a>
       <div class="nav-item has-dropdown">
        <span>AUDITION</span>
        <div class="dropdown-menu">
          <a href="/ad_ing/ading1">오디션 진행현황</a>
          <a href="#">오디션 일정</a>
          <a href="#">FAQ</a>
        </div>
      </div>
        <span><Link to="/UserPage">커뮤니티 센터</Link></span>
        <span>굿즈샵</span>
        <span>VIDEO</span>
        <span>MY PAGE</span>
      </nav>

      <div className="layout-grid">
        {/* 좌측 사이드바 */}
        <aside className="left-sidebar scroll-section">
          {/* 접기 버튼 */}
          <button className="toggle-btn left" onClick={() => setIsLeftOpen(!isLeftOpen)}>
            {isLeftOpen ? '◀' : '▶'}
          </button>
          
          <div className="sidebar-content">
            <div className="glass-card profile-card">
              <div className="logo-placeholder">ACTION 101</div>
            </div>
            <div className="glass-card stats-card">
              <p>오늘 방문자</p>
              <h2>81</h2>
            </div>
            <div className="glass-card chart-card">
              <div className="circle-chart">241%</div>
            </div>
          </div>
        </aside>

        {/* 중앙 섹션 */}
        <main className="center-content scroll-section">
          <div className="hero-text">
            <div className="frame-line"></div>
            <h1>디렉터 여러분들, <br/> 당신의 손으로 <br/> <span>아이돌</span>에게 투표하세요</h1>
            <div className="scroll-hint">SCROLL ▽</div>
          </div>
        </main>

        {/* 우측 사이드바 */}
        <aside className="right-sidebar scroll-section">
          {/* 접기 버튼 */}
          <button className="toggle-btn right" onClick={() => setIsRightOpen(!isRightOpen)}>
            {isRightOpen ? '▶' : '◀'}
          </button>

          <div className="sidebar-content">
            <div className="glass-card login-box">
              <div className="login-tabs">
                <span className="active">LOGIN</span>
                <span>SIGN UP</span>
              </div>
              <div className="phone-mockup">
                <div className="inner-logo">ACTION 101</div>
                <button className="login-btn">LOGIN</button>
                <button className="login-btn">JOIN</button>
              </div>
            </div>



           
            {/* --- 공지사항 섹션 추가 --- */}
            {showNotice && (
              <div className="notice-popup glass-card">
                <div className="notice-header">
                  <span>공지</span>
                  <button className="close-notice" onClick={() => setShowNotice(false)}>×</button>
                </div>
                <div className="notice-body">
                  <p className="notice-greeting">안녕하세요, ACTION 101입니다.</p>
                  <p>소속 아티스트 권익 보호를 위한 법적 대응 진행 상황을 안내드립니다.</p>
                  <p>당사에서는 지속적으로 소속 아티스트에 대한 인신공격, 모욕 등 악의적인 게시물을 실시간 모니터링하고 있으며...</p>
                  <p>(내용 중략...)</p>
                </div>
                <div className="notice-footer">
                  <div className="dot-pagination">
                    <span className="dot active"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------- */}
      {/* 하단 추가 정보 섹션 (스크롤 효과 확인용) */}
      <section className="scroll-section extra-info">
        <div className="glass-card full-width">
          {/* 무한 흐르는 슬라이드 섹션 */}
          <section className="marquee-section">
            <div className="marquee-wrapper">
              <div className="marquee-group">
                <div className="track">
                  <div className="marquee-card">#태연에 대한 ARTIST 명예훼손 제보가 등록되었어요.</div>
                  <div className="marquee-card">#카리나에 대한 ARTIST 명예훼손 제보가 등록되었어요.</div>
                  <div className="marquee-card">#앤톤에 대한 콘텐츠 아이디어 제안이 등록되었어요.</div>
                  <div className="marquee-card">#태연에 대한 ARTIST 명예훼손 제보가 등록되었어요.</div>
                  <div className="marquee-card">#태연에 대한 ARTIST 명예훼손 제보가 등록되었어요.</div>
                  <div className="marquee-card">#카리나에 대한 ARTIST 명예훼손 제보가 등록되었어요.</div>
                  <div className="marquee-card">#앤톤에 대한 콘텐츠 아이디어 제안이 등록되었어요.</div>
                  <div className="marquee-card">#태연에 대한 ARTIST 명예훼손 제보가 등록되었어요.</div>
                </div>
              </div>
              <div className="marquee-group reverse">
                <div className="track">
                  <div className="marquee-card">#신규 프로젝트 ACTION 101이 시작되었습니다!</div>
                  <div className="marquee-card">#오늘의 투표수가 50만 건을 돌파했습니다.</div>
                  <div className="marquee-card">#뮤즈를 향한 당신의 열정을 응원합니다.</div>
                  <div className="marquee-card">#신규 프로젝트 ACTION 101이 시작되었습니다!</div>
                  <div className="marquee-card">#신규 프로젝트 ACTION 101이 시작되었습니다!</div>
                  <div className="marquee-card">#오늘의 투표수가 50만 건을 돌파했습니다.</div>
                  <div className="marquee-card">#뮤즈를 향한 당신의 열정을 응원합니다.</div>
                  <div className="marquee-card">#신규 프로젝트 ACTION 101이 시작되었습니다!</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------- */}
      {/* 선택바 */}
      <section className="card-section-wrapper">
        <div className="section-header scroll-section">
          <p>새로워진 ACTION 101</p>
          <h2>그 시작을 <span>지금 함께</span> 하세요.</h2>
        </div>
        <div className="card-container">
          <div className="info-card scroll-section delay-1">
            <div className="card-icon">🛡️</div>
            <span className="tag report">REPORT CENTER</span>
            <h3>제보·신고 센터</h3>
            <p>소중한 사람을 지키는 마음으로,<br/>클린한 문화에 기여하고 있습니다.</p>
          </div>
          <div className="info-card scroll-section delay-2">
            <div className="card-icon">✨</div>
            <span className="tag idea">IDEA SQUARE</span>
            <h3>아이디어 광장</h3>
            <p>ACTION 101과 아티스트에게 필요한<br/>의견과 제안을 기다립니다.</p>
          </div>
          <div className="info-card scroll-section delay-3">
            <div className="card-icon">💬</div>
            <span className="tag faq">FAQ</span>
            <h3>FAQ</h3>
            <p>'ACTION 101'의<br/>이용 관련 문의사항을 확인할 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------- */}
      {/* 푸터 */}
      <footer className="site-footer scroll-section">
        <div className="info-notice-box">
          <p className="notice-title">
            ※ <strong>'ACTION 101'</strong> 게시판 운영 시간 : <strong>평일 10:00 ~ 18:00 (주말, 공휴일 제외)</strong>
          </p>
          <ul className="notice-list">
            <li>게시물이 접수된 순서에 따라 순차적으로 답변을 남겨 드리지만, 동일/유사한 내용의 접수 건에 대해서는 우선적으로 답변이 남겨질 수 있습니다.</li>
            <li>광고, 도배 등 FAQ에 안내된 '종결 유형' 및 게시판 운영 취지에 맞지 않는 부적절한 게시물은 답변 없이 종결될 수 있습니다.</li>
            <li>폭언, 욕설, 협박 등의 글을 남기실 경우, 산업안전보건법 등 관련 법에 따라 조치될 수 있습니다.</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <div className="service-dropdown">
              서비스 문의 열기 <span className="arrow">∨</span>
            </div>
            <nav className="footer-nav">
              <span>개인정보처리방침</span>
              <span>이용약관</span>
            </nav>
          </div>
          <div className="footer-right">
            <span className="copyright">© ACTION 101 ENTERTAINMENT</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;