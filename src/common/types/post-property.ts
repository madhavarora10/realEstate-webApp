export type PostProperty = {
  showMobile: number,
  status: number,
  body: {
    heading:string,
    firstForm: {
      heading:string,
      name: string,
      descp: string,
      sqft: string,
      parkingSelect: {
        text:string,
        select:Array<string>,
      },
      deposit: string,
      price: string,
      bedrooms: string,
      bathrooms: string,
      repairQuality: string,
    },
    secondForm: {
      heading:string,
      city: string,
      state: string,
      country: string,
      address: string,
      pincode: string,
      coordinates: {
        text:string,
        lat:string,
        long:string
      },
      type: {
        text: string,
        select: Array<string>,
      },
      heating: {
        text: string,
        select: Array<string>,
      },
      cooling: {
        text: string,
        select: Array<string>,
      },
      laundry: {
        text: string,
        select: Array<string>,
      },
    },
    thirdForm: {
      heading:string,
      imageCover:string,
      images: string,
    },
    modalContent: {
      title: string,
      content: string,
    },
    nextButton: string,
    prevButton: string,
    submitButton: string,
  },
};
