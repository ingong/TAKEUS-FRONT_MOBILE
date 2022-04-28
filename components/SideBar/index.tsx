import { useRouter } from 'next/router';
import Overlay from '@components/Common/Overlay';
import { modalList } from '@components/Modals';

import useModals from '@hooks/useModals';
import DeleteIcon from '@assets/DeleteIcon.svg';
import { TotalContainer, SideBarContainer } from './style';

const SideBar = (): JSX.Element => {
  const router = useRouter();
  const { closeModal } = useModals();
  const handleClose = () => {
    closeModal(modalList.SideBar);
  };
  const handleMove = (url: string) => {
    router.push(url);
    closeModal(modalList.SideBar);
  };

  return (
    <TotalContainer>
      <SideBarContainer>
        <div className="XBtn" onClick={handleClose}>
          <DeleteIcon />
        </div>
        <ul>
          <li onClick={() => handleMove('/')}>홈</li>
          <li onClick={() => handleMove('/information')}>이동봉사 정보</li>
          <li onClick={() => handleMove('/dogs')}>대상견 찾기</li>
          <li onClick={() => handleMove('/reviews')}>이동봉사 후기</li>
          <li onClick={() => handleMove('/about')}>About us</li>
        </ul>
      </SideBarContainer>
      <Overlay onClose={handleClose} />
    </TotalContainer>
  );
};

export default SideBar;
