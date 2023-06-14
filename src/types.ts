export type FormProps = {
  displayForm: (a:boolean) => void;
  handleSubmit: (formInfo: FormData) => void
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

export type FormAndId = {
  service: string,
  login: string,
  senha: string,
  url: string,
  id: number,
};

export type PasswordProps = {
  formData: FormAndId;
  handleDelete: (id: number) => void;
  hidePassword: boolean;
};
