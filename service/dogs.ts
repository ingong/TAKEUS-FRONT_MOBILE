import { instance, isErrorByStatusCode, ERROR_TYPE } from 'service/index';
import { DogCardListType, DogCardType } from '@Customtypes/dog';

interface DogListResponse {
  error: ERROR_TYPE | null;
  dogList: DogCardListType;
  length: number;
}

export interface DogResponse {
  error: ERROR_TYPE | null;
  dog: DogCardType;
}

export const getDogs = async (): Promise<DogListResponse> => {
  const response = await instance.get('/api/dogs');
  const error = isErrorByStatusCode(response.status);
  const dogList = response.data.data as DogCardListType;

  return {
    error,
    dogList,
    length: dogList.length,
  };
};

export const getDogByAirport = async (airport: string): Promise<DogListResponse> => {
  const response = await instance.get(`/api/dogs/search/${airport}`, {
    params: {
      order: 'latest',
      page: 1,
    },
  });
  const error = isErrorByStatusCode(response.status);
  const dogList = response.data.data as DogCardListType;
  const length = response.data.totalNums as number;

  return {
    error,
    dogList,
    length,
  };
};

export const getDogById = async (id: string): Promise<DogResponse> => {
  const response = await instance.get(`/api/dogs/detail/${id}`);
  const error = isErrorByStatusCode(response.status);
  const dog = response.data.data as DogCardType;

  return {
    error,
    dog,
  };
};
