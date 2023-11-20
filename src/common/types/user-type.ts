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
