import type { AxiosResponse } from "axios";

type IRepositoryResponse<Response> = Promise<AxiosResponse<Response, any>>;

export type { IRepositoryResponse };
