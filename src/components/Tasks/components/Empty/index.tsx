import styled from "styled-components";
import ClipBoardIcon from "../../../../assets/clipBoardIcon";

export default function Empty() {
  return (
    <EmptyContainer>
      <ClipBoardIcon />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e adicione seus itens a fazer</p>
    </EmptyContainer>
  );
}

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  color: ${(props) => props.theme.colors.gray[300]};
`;
