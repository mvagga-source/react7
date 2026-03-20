import axiosInstance from "../../service/axiosInstance";

// 사용자 목록 조회
export const getUsers = () => {
  return axiosInstance.get(`${process.env.REACT_APP_API_URL}/member/mlist`);
};

export const userLogin = (id,pw) => {
  return axiosInstance.post(`${process.env.REACT_APP_API_URL}/member/mlogin`,{id,pw});
}

export const userSession = () => {
  return axiosInstance.get(`${process.env.REACT_APP_API_URL}/member/mSession`);
}

export const userLogout = () => {
  return axiosInstance.post(`${process.env.REACT_APP_API_URL}/member/mlogout`);
}

export const addUsers = (formData) => {
  return axiosInstance.post(`${process.env.REACT_APP_API_URL}/member/mwrite`,formData);
}


// POST /users
// export const addUser = (user) => axiosInstance.post("/users", user);

// PUT /users/:id
// export const updateUser = (id, user) => axiosInstance.put(`/users/${id}`, user);

// DELETE /users/:id
// export const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);