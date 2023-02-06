export interface IFailure {
  message: string;
  code: number;
}

export class Failure {
  constructor(public message: string, public code: number) {}
}
