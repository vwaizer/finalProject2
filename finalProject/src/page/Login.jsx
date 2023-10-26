import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

export const CoverBox = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 500px;
  background-color: grey;
  color: white;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Tab = styled.div`
  margin-bottom: 20px;
`;

export const ButtonTab = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
`;
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123456') {
      window.location = '/'
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  const handleReset = () => {
    window.location = "/login"
  }

  return (
    <CoverBox>
        <Login>
      <Title>
        <h2>Đăng nhập</h2>
        <p>{error}</p>
      </Title>
      <Tab>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tên đăng nhập"
        />
      </Tab>
      <Tab>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
        />
      </Tab>
      <ButtonTab>
        <button onClick={handleLogin}>Đăng nhập</button>
        <button onClick={handleReset}>Reset</button>
      </ButtonTab>
    </Login>
    </CoverBox>
  );
};

export default LoginPage;
