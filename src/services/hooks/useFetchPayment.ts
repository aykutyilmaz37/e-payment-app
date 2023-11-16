import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { GetPaymentType } from 'types/payment';

type Props = {
  onSuccess?: (data: GetPaymentType) => void;
};

export default function useFetchPayment({ onSuccess }: Props) {
  return useQuery(
    ['payment'],
    () => axios.get(`${API_URL}/payment`).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
    }
  );
}
