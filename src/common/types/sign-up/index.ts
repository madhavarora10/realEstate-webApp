export type SignUp = {

  showMobile:number,
  status: number,
  body: {
    heading: string,
    descp: string,
    form:{
      nameLabel: string,
      emailLabel: string,
      passwordLabel: string,
      confirmPasswordLabel: string,
    }
    signButton: string,

  },

};
