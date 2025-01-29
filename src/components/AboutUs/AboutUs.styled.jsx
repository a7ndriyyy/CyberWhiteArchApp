
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Summary = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const SummaryItem = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    font-weight: bold;
  }
`;