import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import UserType from 'types/user';

type Props = {
  onSuccess?: (data: any) => void;
};

export default function useMutateSignup({ onSuccess }: Props) {
  return useMutation(
    ['login'],
    (variables?: UserType) =>
      axios.post(`${API_URL}/signup`, variables).then((res) => res.data),
    {
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
    }
  );
}
