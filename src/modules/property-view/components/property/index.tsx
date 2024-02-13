/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
// import Image from 'next/image';
import { Image } from 'antd';
import AgentCard from '../../../../common/components/AgentCard';
import { ImageCarousel } from '../../../../common/components/ImageCarousel';
import PriceCard from '../../../../common/components/PriceCard';
import { Map } from '../../../../common/googleMap';
import { PropertyPageProps } from '../../../../common/types/property-page';

const PropertyPage = (props:PropertyPageProps) => {
  const {
    heros,
    doc,
  } = props;
  // console.log('from docs', doc[0]);
  const nowDate = new Date(doc[0]?.date);
  const date = `${nowDate.getFullYear()}/${nowDate.getMonth() + 1}/${nowDate.getDate()}`;
  // console.log(doc[0]);
  // console.log(heros);

  return (
    <div className="mt-0 md:mt-12 lg:mt-8 ">
      <div className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row justify-between items-start">
        <div>
          <h1 className=" font-primaryRegula break-words text-fs-2 lg:text-fs-3 font-wt-700 leading-lh-3.5">{doc[0].name}</h1>
          <p className=" text-descp-color text-fs-1 font-wt-400 leading-6 font-primaryRegular">{doc[0].address}</p>
        </div>
        <div className=" w-64 flex justify-between">
          {heros.buttons.map((el, index) => (
            <span className=" text-primary flex justify-center items-center p-1 rounded-md cursor-pointer border-e3e3e3   text-fs-0.875 bg-F7f7FD" key={index}>{el.label}</span>
          ))}
        </div>
      </div>

      <div className=" mt-12 ">
        <div>

          <div className=" relative  w-full py-6  flex justify-center rounded-lg  transition-all ">
            <Image className=" relative border-4 hover:border-primary rounded-lg border-e3e3e3" alt="properties Images" src={`/properties-images/image-covers/${doc[0].imageCover}`} />
            {/* <Image src="/properties/temp.png" style={{ borderRadius: '16px' }} className=" object-fill object-center p-2  " fill alt="" /> */}
          </div>
          <div className=" mt-1 lg:mt-8 w-full  transition-all  ">
            <ImageCarousel height={120} width={240} imageArray={doc[0].images} />
          </div>
        </div>

        <div className="flex gap-16 flex-wrap lg:flex-nowrap">

          <div className=" w-full  md:w-2/3">
            <div className="mt-12 font-primaryRegular rounded-lg border-4 w-full  py-1 lg:py-4 flex flex-wrap gap-2 px-8  lg:gap-16 border-e3e3e3">
              <div className="flex flex-col">
                <span className=" text-fs-0.875 text-descp-color">
                  {heros.bedrooms.label}
                </span>
                <span className=" text-fs-0.875 font-wt-700">
                  {doc[0].bedrooms}
                </span>
              </div>
              <div className="flex flex-col">
                <span className=" text-fs-0.875  text-descp-color">
                  {heros.bathrooms.label}
                </span>
                <span className=" text-fs-0.875 font-wt-700">
                  {doc[0].bathrooms}
                </span>
              </div>
              <div className="flex flex-col">
                <span className=" text-fs-0.875  text-descp-color">
                  {heros.squareArea.label}
                </span>
                <span className=" text-fs-0.875 font-wt-700">
                  {doc[0].squareArea}
                </span>
              </div>
              <div className="flex flex-col">
                <span className=" text-fs-0.875  text-descp-color">
                  {heros.repair.label}
                </span>
                <span className=" text-fs-0.875 font-wt-700">
                  {doc[0].repairQuality}
                </span>
              </div>
              <div className="flex flex-col">
                <span className=" text-fs-0.875  text-descp-color">
                  {heros.statusVal.label}
                </span>
                <span className=" text-fs-0.875 font-wt-700">
                  {doc[0].status}
                </span>
              </div>

            </div>
            <div className="mt-12 font-primaryRegular w-full  ">
              <h1 className=" font-wt-700 text-fs-1.5 leading-9 text-secondary">{heros.heading}</h1>
              <p className=" leading-7 py-4 text-fs-0.875 lg:text-fs-1 font-wt-400 text-descp-color  text-left">{doc[0].description}</p>
            </div>
            <div>
              <h1 className=" mt-12 font-wt-700 text-fs-1.5 leading-9 text-secondary font-primaryRegular">
                {heros.features.heading}
              </h1>
              <div className=" border-b-2 border-e3e3e3 py-12 flex flex-wrap gap-20">
                <div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.listedLabel}</span>
                    <span className=" font-wt-600">{date}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.cityLabel}</span>
                    <span className=" font-wt-600">{doc[0].city}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.yearLabel}</span>
                    <span className=" font-wt-600">{doc[0].yearBuilt}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.countryLabel}</span>
                    <span className=" font-wt-600">{doc[0].country}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.sizeLabel}</span>
                    <span className=" font-wt-600">{doc[0].lotSize}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.parkingLabel}</span>
                    <span className=" font-wt-600">{doc[0].parkingArea}</span>
                  </div>
                </div>
                <div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.dateLabel}</span>
                    <span className=" font-wt-600">{doc[0].dateAvailable}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.laundryLabel}</span>
                    <span className=" font-wt-600">{doc[0].laundry}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.coolingLabel}</span>
                    <span className=" font-wt-600">{doc[0].cooling}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.heatingLabel}</span>
                    <span className=" font-wt-600">{doc[0].heating}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.typeLabel}</span>
                    <span className=" font-wt-600">{doc[0].type}</span>
                  </div>
                  <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                    <span className=" text-descp-color ">{heros.features.codeLabel}</span>
                    <span className=" font-wt-600">{doc[0].pinCode}</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className=" mt-12 font-wt-700 text-fs-1.5 leading-9 text-secondary font-primaryRegular">{heros.mapHeading}</h1>
            <Map coordinates={doc[0].coordinates} />
            <p className=" mt-12 py-4 text-fs-0.7 text-descp-color  text-left">{heros.privacyText}</p>
          </div>

          <div className=" mt-12 w-full  ">
            <PriceCard price={doc[0].price} {...heros.requestCard} />
            <AgentCard heading={heros.listedHeading} placeholder={heros.pfpImage} data={doc[0].agent_details} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
