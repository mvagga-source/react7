import { useEffect, useState } from "react";
import { userLogin } from "./userApi";
import Modal from "../../components/Modal/Modal";

function UserLogin() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleLogin = async () => {

      userLogin(id,pw)
          .then(res => { console.log("name : "+res.data.username) })
          .catch(err => {

            if (err.response && err.response.status === 401) {
                  // Spring Boot에서 전달한 문자열 메시지
                  alert(`로그인 실패: ${err.response.data}`);
                } else {
                  alert("로그인 실패: 알 수 없는 오류");
                }

          }
            );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <input placeholder="UserId" onChange={e => setId(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPw(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      <button onClick={openModal}>모달 열기</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>모달 제목</h2>
        <p>여기에 모달 내용이 들어갑니다.</p>
        <button onClick={closeModal}>닫기</button>
      </Modal>


    </div>
  );
}

export default UserLogin;