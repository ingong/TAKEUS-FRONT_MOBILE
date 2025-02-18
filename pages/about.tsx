import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Header from '@components/Header';

import LoadingImage from '@assets/LoadingImage.gif';
import { VerticalAlign } from '@styles/common';

const Container = styled.div`
  ${VerticalAlign}
  align-items: center;
  margin-top: 5rem;
  font: ${({ theme }) => theme.font.title2_btn};

  & > p {
    margin-bottom: 1rem;
  }

  & > button {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
    margin-top: 2rem;
  }
`;

const AboutPage = () => {
  const router = useRouter();
  const handleMainPage = () => {
    router.push('/');
  };
  const handleWebPage = () => {
    const DESKTOP_TAKEUSURL = process.env.TAKEUS_DESKTOP_URL as string;
    const DESKTOP_TAKEUS_ABOUTPAGE = DESKTOP_TAKEUSURL + '/about';
    router.push(DESKTOP_TAKEUS_ABOUTPAGE);
  };

  return (
    <div>
      <Header />
      <Container>
        <Image src={LoadingImage} width={350} height={350} alt="Loading Image" />
        <p>About 페이지는 현재 준비 중입니다. </p>
        <p>PC 버전을 이용해주세요. </p>
        <button onClick={handleWebPage}>PC 버전 About 페이지</button>
        <button onClick={handleMainPage}>메인 페이지로 돌아가기</button>
      </Container>
    </div>
  );
};

export default AboutPage;
