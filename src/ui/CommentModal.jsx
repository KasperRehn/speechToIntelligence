import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  background-color: var(--color-grey-150);
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1040 !important; 
  `;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  min-width: 250px; 
  transition-duration: 0.4s;
  &:hover {
    background-color: #45a049;
  }
  &[variation="danger"] {
    background-color: #f44336 !important;
    &:hover {
      background-color: #e57373 !important;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; // to give space between the buttons
`;

const CommentModal = ({ isOpen, onClose, onSubmit, initialComment = "" }) => {
  const [comment, setComment] = useState(initialComment);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
    onClose();
  }

  return (
    <Overlay onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <StyledTextarea 
            value={comment} 
            onChange={e => setComment(e.target.value)} 
            placeholder="Skriv en bemærkning til opgaven ... "
          />

          <ButtonContainer>
          <Button type="submit">Tilføj kommentar</Button>
          <Button variation="danger" onClick={onClose}>Fortryd</Button>
        </ButtonContainer>
        </form>
      </StyledModal>
    </Overlay>
  );
};

CommentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialComment: PropTypes.string,
};


export default CommentModal;
