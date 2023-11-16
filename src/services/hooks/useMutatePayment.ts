import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { PostPaymentType } from 'types/payment';

type Props = {
  onSuccess?: (data: any) => void;
};

export default function useMutatePayment({ onSuccess }: Props) {
  return useMutation(
    ['payment'],
    (variables?: PostPaymentType) =>
      axios.post(`${API_URL}/payment`, variables).then((res) => res.data),
    {
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
    }
  );
}
