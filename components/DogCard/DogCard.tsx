import { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { DogCardType } from '@Customtypes/dog';
import TestImage from '@assets/TestImage.png';
import Location from '@assets/Location.svg';
import { DogCardWrapper } from './DogCardStyle';

const DogCard = ({ dogCardInfo }: { dogCardInfo: DogCardType }): ReactElement => {
  const router = useRouter();
  const { shortenedDogName, shortenedAirport, thumbNail, isInstitution, _id } = dogCardInfo;
  const handleClick = (id: string) => router.push(`/dogs/${id}`);

  return (
    <DogCardWrapper onClick={() => handleClick(_id)}>
      <Image src={thumbNail || TestImage} width={150} height={150} alt="TestImage" />
      <div className="info__dog">
        <p className="name"> {shortenedDogName} </p>
        <p className="airport">
          <Location />
          {shortenedAirport}
        </p>
      </div>
      <div className="info__person">
        <p>{isInstitution ? '단체 |' : '개인 |'}</p>
        <p>{isInstitution ? '웰컴독 코리아' : '개인 구조자'}</p>
      </div>
    </DogCardWrapper>
  );
};

export default DogCard;
