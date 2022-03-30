import { instance, isErrorByStatusCode } from '@service/index';
import { DepartureType } from '@Customtypes/utils';

interface UserType {
  id: string;
  email: string;
  accessToken: string;
  issuedAt: string;
}

export const postToken = async (token: string, social: string) => {
  const body = { token, social };
  const response = await instance.post('/api/users/login', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const error = isErrorByStatusCode(response.status);

  const data = response.data as UserType;
  const result = {
    id: data.id,
    email: data.email,
    token: data.accessToken,
    issuedAt: data.issuedAt,
  };
  return {
    error,
    data: result,
  };
};

interface DepartureRespType {
  departureList: DepartureType;
}

export const getDepartureList = async (): Promise<DepartureRespType> => {
  const response = await instance.get('/api/airports/country');
  const { _id, ...departureList } = response.data.data as DepartureType;

  return {
    departureList,
  };
};
