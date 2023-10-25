import React, { useState } from 'react';
import styled from 'styled-components';

export const CoverLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Tab = styled.div`
  margin-top: 20px;
`;
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123456') {
      window.location = '/';
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  return (
    <CoverLogin>
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
      <Tab>
        <button onClick={handleLogin}>Đăng nhập</button>
      </Tab>
    </CoverLogin>
  );
};

export default LoginPage;
