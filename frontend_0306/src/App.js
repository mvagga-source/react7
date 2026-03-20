import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Layout from "./components/Layout";
//import ProtectedRoute from "./components/ProtectedRoute";

import UserLogin from "./pages/UserLogin";
//import MyPage from "./pages/MyPage";
//import Home from "./pages/Home";

function App() {

  return (

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          {/* <Route path="/" element={
            <Layout>
              <Home/>
            </Layout>
          }/> */}

          <Route path="/" element={
            <Layout>
              <UserLogin/>
            </Layout>
          }/>

          {/* <Route path="/mypage" element={
            <ProtectedRoute>
              <Layout>
                <MyPage/>
              </Layout>
            </ProtectedRoute>
          }/> */}

        </Routes>

      </BrowserRouter>

    </AuthProvider>

  );
}

export default App;