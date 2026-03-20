import React, { useState, useEffect } from 'react';
import { getItems } from '../services/api';  // 작성한 API 함수 임포트
import ItemCard from './ItemCard';  // 아이템을 보여줄 카드 컴포넌트

const ItemList = () => {
  const [items, setItems] = useState([]);  // 아이템 목록을 상태로 관리
  const [loading, setLoading] = useState(true);  // 로딩 상태 관리
  const [error, setError] = useState(null);  // 에러 상태 관리

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();  // API 호출
        setItems(data);  // 받은 데이터로 상태 업데이트
      } catch (error) {
        setError('Failed to load items');  // 에러 처리
      } finally {
        setLoading(false);  // 로딩 끝
      }
    };

    fetchItems();  // 컴포넌트가 마운트될 때 API 호출
  }, []);  // 빈 배열은 한 번만 실행되게 함 (컴포넌트가 마운트될 때만)

  if (loading) return <div>Loading...</div>;  // 로딩 중일 때
  if (error) return <div>{error}</div>;  // 에러가 있을 경우

  return (
    <div>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />  // 아이템 카드 컴포넌트로 렌더링
      ))}
    </div>
  );
};

export default ItemList;