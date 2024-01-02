export type Profile = {

  showMobile: number,
  status: number,
  body: {
    heading: string,
    heading2: string,
    userImg:string,
    userName:string,
    form: {
      name:string,
      emailLabel:string,
      passwordLabel: string,
      passwordConfirmLabel: string,
      saveButton: string,
    },
    modalContent:{
      title:string,
      content:string
    },
    imageModalContent:{
      title:string,
      content:string
    },
    nameModalContent:{
      title:string,
      content:string
    },
    
  },

};
