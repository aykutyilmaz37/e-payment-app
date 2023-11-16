import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { PackageType } from 'types/packages';

type Props = {
  onSuccess?: (data: PackageType[]) => void;
};

export default function useFetchPackages({ onSuccess }: Props) {
  return useQuery(
    ['packages'],
    () => axios.get(`${API_URL}/packages`).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
    }
  );
}
