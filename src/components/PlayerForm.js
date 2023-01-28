import React, { useRef } from 'react';
import styled from 'styled-components';
import S from './Styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  border-radius: 4px;
  box-shadow: inset 0 3px 6px rgba(50, 50, 50, 0.4);
`;

const UserForm = ({ register }) => {
  const nameInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInput.current.value.trim();
    if (name.length) {
      register(name);
      nameInput.current.value = '';
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <NameInput
        ref={nameInput}
        type="text"
        placeholder="Enter your name"
        required
      />
      <S.Button type="submit">Join Leaderboard</S.Button>
    </Form>
  );
};

export default UserForm;
