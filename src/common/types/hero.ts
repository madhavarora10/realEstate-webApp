export type ArrayObjectsType = {
  apiLabel: string;
  input: string;
  name?: string;
  profile?: string;
  pfp?: any;
  commasImage?: any;
  label?:string,
  id?:string,
  options?:Array<string>
  heading?:string,
  descp?:string,
  placeholder?:string,
  icon?:{ alt:string, width:number, height:number, url:string }
  number?:string
};
export type CardsProps = {
  heading?:string,
  img?:any,
  price?:string,
  area?:{ [key:string]:string },
  location?:string,
  popular?:string,
  button?:{ [key:string]:string },
};

export type MyObject = {
  label:string,
  value:string
};
export type imgObj = {
  url: string,
  height: string,
  width: string,
  alt: string,
};
export type buttonObj = {
  link:string,
  label:string,
  icon?:string
};
export type amenities = {
  label:string,
  apiLabel:string,
  icon:string
};
export type LinkObj = {
  label: string,
  link: string,
};

export type socialsLinksObj = {
  icons:string,
  link:string
};
