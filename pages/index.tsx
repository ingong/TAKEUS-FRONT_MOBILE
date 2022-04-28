import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import DogCardContainer from '@components/DogCardContainer';
import MainPageInform from '@components/MainPageInform';
import MobileInform from '@components/Common/MobileInform';
import { getDogs } from '@service/dogs';
import { getDepartureList } from '@service/utils';

import { DepartureType } from '@Customtypes/utils';
import { DogCardListType } from '@Customtypes/dog';
import { NextPageContainer } from '@styles/page/main';
import { shortenTextWithDot } from '@pipe/text.pipe';

interface HomePageProps {
  dogListCarousel: DogCardListType;
  departureList: DepartureType;
}

const Home = ({ dogListCarousel, departureList }: HomePageProps) => {
  return (
    <NextPageContainer>
      <div className="mobile">
        <Header />
        <SearchBar departureList={departureList} />
        <DogCardContainer dogListCarousel={dogListCarousel} />
        <MainPageInform />
      </div>
      <MobileInform />
    </NextPageContainer>
  );
};

export async function getStaticProps() {
  const { dogList } = await getDogs();
  const { departureList } = await getDepartureList();
  const dogListCarousel = dogList.slice(0, 10).map((dogCard) => {
    const { name, endingAirport, ...origin } = dogCard;
    const shortenedDogName = shortenTextWithDot({ text: name, limit: 4, isDotNeed: true });
    const shortenedAirport = shortenTextWithDot({
      text: endingAirport,
      limit: 7,
      isDotNeed: false,
    });
    return {
      shortenedDogName,
      shortenedAirport,
      origin,
    };
  });

  return {
    props: {
      dogListCarousel,
      departureList,
    },
    revalidate: 60 * 1000,
  };
}

export default Home;
