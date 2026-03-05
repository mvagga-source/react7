import UserPage from "./features/user/UserPage";
import SignupForm from "./features/user/SignupForm";
import UserLogin from "./features/user/UserLogin";
import Main from "./features/main";
import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 페이지 컴포넌트
// const UserPage = () => <h2>UserPage Page</h2>;
// const SignupForm = () => <h2>SignupForm Page</h2>;
// const UserLogin = () => <h2>Services Page</h2>;

function App() {

  // 단순 이동 <Link to="/signup"></Link>
  // 버튼클릭 이동 useNavigate()
  // BrowserRouter는 React에서 새로고침 없이 페이지를 이동하게 해주는 라우터 컴포넌트

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/UserPage" element={<Layout><UserPage /></Layout>} />
          <Route path="/SignupForm" element={<Layout><SignupForm /></Layout>} />
          <Route path="/UserLogin" element={<Layout><UserLogin /></Layout>} />
      </Routes>
    </Router>
  );
}



export default App;