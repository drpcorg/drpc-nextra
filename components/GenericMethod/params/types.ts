import { TParamType } from "../types";

export type ReqResParam = {
  type: TParamType;
  paramName: string;
  paramDescription?: string;
  paramEnum?: {
    value: string;
    description: string;
    isDefault?: boolean;
  }[];
  childrenParams?: ReqResParam[];
  childrenParamsType?: TParamType;
};

export type RequestParamProp = ReqResParam[] | null;
