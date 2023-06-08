export type FormProps = {
  displayForm: (a:boolean) => void;
  displayBtn: (a:boolean) => void;
};

export type FormData = {
  service: string;
  login: string;
  senha: string;
  url: string;
};

export type Validation = {
  valid1: string;
  valid2: string;
  valid3: string;
  valid4: string;
};
