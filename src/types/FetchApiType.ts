import { AxiosResponse } from "axios";

interface ApiResponse {
  isSuccess: boolean | null;
  data: AxiosResponse | null;
  error: any;
  isLoading: boolean | null;
  isError: boolean | null;
}
export default ApiResponse