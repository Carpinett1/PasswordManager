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
