export interface ApiError {
    message: string;
    status: number;
}

export interface ApiResponse {
    isSuccess: boolean | null;
    data: any;
    error: any;
    isLoading: boolean | null;
    isError: boolean | null;
}
  