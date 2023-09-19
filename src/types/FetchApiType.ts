
interface ApiResponse {
  isSuccess: boolean | null;
  data: any;
  error: any;
  isLoading: boolean | null;
  isError: boolean | null;
}
export default ApiResponse