import { useState } from "react";
import { addUsers } from "./userApi";
function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    birthDate: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post("/auth/signup", formData);
//       alert(res.data);
//     } catch (err) {
//       alert(err.response.data);
//     }
//   };

  const handleSubmit = async (e) => {
    addUsers()
      .then(res => alert("success!"))
      .catch(err => alert(err.response.data));    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="아이디" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="비밀번호" />
      <input name="name" value={formData.name} onChange={handleChange} placeholder="이름" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="전화번호" />
      <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} placeholder="생년월일" />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignupForm;