export type TErrorSource = {
  message: string;
  path: string;
};

export type TErrorDetails =
  | {
      issues: TErrorSource[];
    }
  | string;

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorDetails: TErrorDetails;
};
