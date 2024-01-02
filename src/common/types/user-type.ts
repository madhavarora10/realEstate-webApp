export type UserType = {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
};
export type UserLoginBody = {
  email:string,
  password:string
};

export type UpdatePasswordBody = {
  password:string,
  passwordConfirm:string,
  email:string,
};

export type UpdateNameBody = {
  name:string,
  email:string
};
