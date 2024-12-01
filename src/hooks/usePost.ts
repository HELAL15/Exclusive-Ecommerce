import { isCancel, AxiosResponse } from "axios";
import { useState } from "react";
import { request } from "../api/request";

type UsePostParams = {
  [key: string]: any;
};

type UsePostResult<T> = {
  data: T | null;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
  isLoading: boolean;
  error: string;
  response: AxiosResponse<T> | null;
  postData: (payload: UsePostParams) => Promise<void>;
};

function usePost<T = any>(url: string | null): UsePostResult<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);

  const postData = async (payload: UsePostParams) => {
    if (!url) return;

    setIsLoading(true);
    setError("");

    const controller = new AbortController();

    try {
      const res = await request.post<T>(url, payload, {
        signal: controller.signal,
      });
      setData(res.data);
      setResponse(res);
    } catch (err: any) {
      if (isCancel(err)) return;
      setError(err || "Something went wrong");
      setResponse(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, setData, isLoading, error, response, postData };
}

export default usePost;
