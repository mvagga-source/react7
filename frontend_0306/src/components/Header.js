import { useAuth } from "../hooks/useAuth";

function Header() {

  const { user, logout } = useAuth();

  return (
    <header>
      <h1>My App</h1>
      <nav>
        {user ? (
          <>
            <span>{user.username}님 환영합니다</span>
            <button onClick={logout}>로그아웃</button>
          </>
        ) : (
          <a href="/UserLogin">로그인</a>
        )}
      </nav>
    </header>
  );
}

export default Header;