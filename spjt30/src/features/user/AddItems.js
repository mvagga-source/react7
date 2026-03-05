import React, { useState } from 'react';
import { createItem } from '../services/api';  // 작성한 POST API 함수 임포트

const AddItem = () => {
  const [name, setName] = useState('');  // 아이템 이름 상태
  const [description, setDescription] = useState('');  // 아이템 설명 상태
  const [error, setError] = useState(null);  // 에러 상태
  const [successMessage, setSuccessMessage] = useState('');  // 성공 메시지

  const handleSubmit = async (event) => {
    event.preventDefault();  // 폼 제출 시 페이지 리로드 방지

    const newItem = { name, description };  // 새 아이템 데이터

    try {
      const createdItem = await createItem(newItem);  // API 호출
      setSuccessMessage(`Item "${createdItem.name}" added successfully!`);  // 성공 메시지
      setName('');  // 폼 초기화
      setDescription('');
    } catch (error) {
      setError('Failed to create item');  // 에러 처리
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label>Description:</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* 에러 메시지 */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}  {/* 성공 메시지 */}
    </div>
  );
};

export default AddItem;