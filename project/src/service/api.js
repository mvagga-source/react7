import axios from 'axios';

// API 기본 URL
const API_URL = process.env.REACT_APP_API_URL; // .env 파일에 API URL을 저장

// 아이템 목록 가져오는 함수
export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);  // /items 엔드포인트로 GET 요청
    return response.data;  // 서버에서 받은 데이터 리턴
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;  // 에러가 발생하면 에러를 던져서 호출한 곳에서 처리할 수 있도록 함
  }
};

// 아이템 추가하는 함수 (POST)
export const createItem = async (newItem) => {
  try {
    const response = await axios.post(`${API_URL}/items`, newItem); // /items 엔드포인트로 POST 요청
    return response.data; // 서버에서 반환된 데이터 리턴
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};


export const checkSession = async () => {
  try {
    const response = await axios.get(`${API_URL}/check-session`);
    return response.data;  // 세션이 활성화되면 "Session is active" 반환
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return error.response.data;  // 세션이 없으면 "No active session" 반환
    } else {
      throw error;  // 다른 에러 처리
    }
  }
};