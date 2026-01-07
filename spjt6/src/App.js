import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Number from './comp/Number';
import Nav from './comp/Nav';
import Form from './comp/Form';
import Card from './comp/Card';

function App() {

  let btnName = '확인';
  let number = 100;

  return (
    <div className="App">

      <Nav />

      <h2>메인페이지</h2>
      {/* 컴포넌트로 값을 전달 : props값 (매개변수 - 변수, 함수, useState ..) */}
      <Number btnName={btnName} number={number} />

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* Form */}
      <Form />

      {/* Card */}
      <Card />

    </div>
  );
}

export default App;
