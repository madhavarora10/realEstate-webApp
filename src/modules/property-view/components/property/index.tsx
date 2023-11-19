/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import PriceCard from '../../../../common/components/PriceCard';
import { Map } from '../../../../common/googleMap';
import { buttonObj } from '../../../../common/types/hero';
import { PropertyPageProps } from '../../../../common/types/property-page';

const PropertyPage = (props:PropertyPageProps) => {
  const {
    heros,
    doc,
  } = props;
  const nowDate = new Date(doc.date);
  const date = `${nowDate.getFullYear()}/${nowDate.getMonth() + 1}/${nowDate.getDate()}`;
  // console.log(doc);
  return (
    <div className="mt-8 grid">
      <div className="flex justify-between items-start">
        <div>
          <h1 className=" font-primaryRegula break-words text-fs-3 font-wt-700 leading-lh-3.5">{doc.name}</h1>
          <p className=" text-descp-color text-fs-1 font-wt-400 leading-6 font-primaryRegular">{doc.address}</p>
        </div>
        <div className=" w-64 flex justify-between">
          {heros.buttons.map((el, index) => (
            <span className=" text-primary flex justify-center items-center p-1 rounded-md cursor-pointer border-e3e3e3 border-2  text-fs-0.875 bg-F7f7FD" key={index}>{el.label}</span>
          ))}
        </div>
      </div>
      <div className=" flex mt-12 gap-8 justify-between">
        <div className=" w-2/3">
          <div className="flex justify-between">
            <div className=" relative border-4 w-full h-106 hover:border-primary rounded-lg border-e3e3e3 transition-all ">
              <Image src="/properties/temp.png" style={{ borderRadius: '16px' }} className=" object-fill object-center p-2  " fill alt="" />
            </div>

          </div>
          <div className="mt-12 font-primaryRegular rounded-lg border-4 px-8 py-4 w-full flex justify-between gap-16  border-e3e3e3">
            <div className="flex flex-col">
              <span className=" text-fs-0.875 text-descp-color">
                {heros.bedrooms.label}
              </span>
              <span className=" text-fs-0.875 font-wt-700">
                {doc.bedrooms}
              </span>
            </div>
            <div className="flex flex-col">
              <span className=" text-fs-0.875  text-descp-color">
                {heros.bathrooms.label}
              </span>
              <span className=" text-fs-0.875 font-wt-700">
                {doc.bathrooms}
              </span>
            </div>
            <div className="flex flex-col">
              <span className=" text-fs-0.875  text-descp-color">
                {heros.squareArea.label}
              </span>
              <span className=" text-fs-0.875 font-wt-700">
                {doc.squareArea}
              </span>
            </div>
            <div className="flex flex-col">
              <span className=" text-fs-0.875  text-descp-color">
                {heros.repair.label}
              </span>
              <span className=" text-fs-0.875 font-wt-700">
                {doc.repairQuality}
              </span>
            </div>
            <div className="flex flex-col">
              <span className=" text-fs-0.875  text-descp-color">
                {heros.statusVal.label}
              </span>
              <span className=" text-fs-0.875 font-wt-700">
                {doc.status}
              </span>
            </div>

          </div>
          <div className="mt-12 font-primaryRegular w-full">
            <h1 className=" font-wt-700 text-fs-1.5 leading-9 text-secondary">{heros.heading}</h1>
            <p className=" leading-7 py-4 text-fs-1 font-wt-400 text-descp-color  text-left">{doc.description}</p>
          </div>
          <div>
            <h1 className=" mt-12 font-wt-700 text-fs-1.5 leading-9 text-secondary font-primaryRegular">
              {heros.features.heading}
            </h1>
            <div className=" border-b-2 border-e3e3e3 py-12 flex gap-20">
              <div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.listedLabel}</span>
                  <span className=" font-wt-600">{date}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.cityLabel}</span>
                  <span className=" font-wt-600">{doc.city}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.yearLabel}</span>
                  <span className=" font-wt-600">{doc.yearBuilt}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.countryLabel}</span>
                  <span className=" font-wt-600">{doc.country}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.sizeLabel}</span>
                  <span className=" font-wt-600">{doc.lotSize}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.parkingLabel}</span>
                  <span className=" font-wt-600">{doc.parkingArea}</span>
                </div>
              </div>
              <div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.dateLabel}</span>
                  <span className=" font-wt-600">{doc.dateAvailable}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.laundryLabel}</span>
                  <span className=" font-wt-600">{doc.laundry}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.coolingLabel}</span>
                  <span className=" font-wt-600">{doc.cooling}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.heatingLabel}</span>
                  <span className=" font-wt-600">{doc.heating}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.typeLabel}</span>
                  <span className=" font-wt-600">{doc.type}</span>
                </div>
                <div className=" text-fs-1 leading-8 flex justify-between gap-28">
                  <span className=" text-descp-color ">{heros.features.codeLabel}</span>
                  <span className=" font-wt-600">{doc.pinCode}</span>
                </div>
              </div>
            </div>
          </div>
          <h1 className=" mt-12 font-wt-700 text-fs-1.5 leading-9 text-secondary font-primaryRegular">{heros.mapHeading}</h1>
          <Map coordinates={doc.coordinates} />
          <p className=" mt-12 py-4 text-fs-0.7 text-descp-color  text-left">{heros.privacyText}</p>
        </div>
        <div className="w-1/3">
          <div className=" flex flex-col gap-8 ">
            <div className=" relative border-4 w-full h-56 hover:border-primary rounded-lg border-e3e3e3 transition-all ">
              <Image src="/properties/temp.png" style={{ borderRadius: '16px' }} className=" object-fill object-center p-2  " fill alt="" />
            </div>
            <div className=" relative border-4  h-56  hover:border-primary rounded-lg border-e3e3e3 transition-all ">
              <Image src="/properties/temp.png" style={{ borderRadius: '16px' }} className=" object-fill object-center p-2  " fill alt="" />
              <span className=" font-primaryRegular  flex justify-center items-center p-2 rounded-md cursor-pointer border-none  outline-none absolute bottom-6 right-6 text-fs-0.875 bg-white">{heros.viewButton.label}</span>

            </div>
          </div>
          <div className=" mt-12">
            <PriceCard price={doc.price} {...heros.requestCard} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
