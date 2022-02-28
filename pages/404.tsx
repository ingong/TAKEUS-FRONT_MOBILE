import Image from 'next/image';
import Loading from '@assets/Loading.gif';
import styled from '@emotion/styled';
import { VerticalAlign } from '@styles/common';

const Container = styled.div`
  ${VerticalAlign};
  align-items: center;
  margin-top: 15rem;
  font: ${({ theme }) => theme.font.title2_btn};

  & > p {
    margin-bottom: 2rem;
  }

  & > button {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
  }
`;

export default function Custom404() {
  return (
    <Container>
      <Image src={Loading} width={350} height={350} alt="Loading Image" />
      <p>존재하지 않는 페이지입니다.</p>
      <button>메인 페이지로 돌아가기</button>
    </Container>
  );
}
