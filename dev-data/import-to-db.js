// import { Db, MongoClient } from 'mongodb';

// const connectMongoDB = require('../../libs/mongodb');
const { Property } = require('../models/property');

const props = [
  {
    name: '364-Seneca-Dr,-Austin,-TX-78737',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '364 Seneca Dr',
    state: 'TX',
    city: 'Austin',
    pinCode: 78737,
    yearBuilt: 2018,
    parkingArea: 'Yes',
    bedrooms: 3,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T04:10:54.051Z',
    coordinates: [30.190639, -97.990657],
    Available: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 330000,
    status: 'Active',
  },
  {
    name: '12166-Metric-Blvd,-Apt-212,-Austin,-TX-78758',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '12166 Metric Blvd',
    state: 'TX',
    city: 'Austin',
    pinCode: 78758,
    yearBuilt: 1986,
    parkingArea: 'Yes',
    bedrooms: 2,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T05:26:05.426Z',
    coordinates: [30.406796, -97.697869],
    dateAvailable: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 210000,
    status: 'Active',

  },
  {
    name: '8417-Lakewood-Ridge-Cv,-Austin,-TX-78738',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '12166 Metric Blvd',
    state: 'TX',
    city: 'Austin',
    pinCode: 78738,
    yearBuilt: 1986,
    parkingArea: 'Yes',
    bedrooms: 2,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T05:26:05.426Z',
    coordinates: [30.295995, -98.03995],
    dateAvailable: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 799000,
    status: 'Active',

  },
  {
    name: '1716-S-5th-St,-Unit-2,-Austin,-TX-78704',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '1716 S 5th St',
    state: 'TX',
    city: 'Austin',
    pinCode: 78704,
    yearBuilt: 1986,
    parkingArea: 'Yes',
    bedrooms: 2,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T05:26:05.426Z',
    coordinates: [30.249548, -97.761668],
    dateAvailable: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 1245000,
    status: 'Active',

  },
  {
    name: '6304-Caudill-Ln,-Austin,-TX-78738',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '6304-Caudill-Ln,-Austin,-TX-78738',
    state: 'TX',
    city: 'Austin',
    pinCode: 78738,
    yearBuilt: 1986,
    parkingArea: 'Yes',
    bedrooms: 2,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T05:26:05.426Z',
    coordinates: [30.306985, -98.002406],
    dateAvailable: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 2625000,
    status: 'Active',

  },
  {
    name: '1702 Cherry Orchard Dr',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '1702-Cherry-Orchard-Dr,-Austin,-TX-78745',
    state: 'TX',
    city: 'Austin',
    pinCode: 78745,
    yearBuilt: 1986,
    parkingArea: 'Yes',
    bedrooms: 2,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T05:26:05.426Z',
    coordinates: [30.201436, -97.802849],
    dateAvailable: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 387000,
    status: 'Active',

  },
  {
    name: '2537 Lavendale Ct',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '2537-Lavendale-Ct,-Austin,-TX-78748',
    state: 'TX',
    city: 'Austin',
    pinCode: 78745,
    yearBuilt: 1986,
    parkingArea: 'Yes',
    bedrooms: 2,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T05:26:05.426Z',
    coordinates: [30.156366, -97.840464],
    dateAvailable: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 470000,
    status: 'Active',

  },
  {
    name: '807 Arroweye Trl',
    country: 'Us',
    description: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.',
    address: '807-Arroweye-Trl,-Austin,-TX-78733',
    state: 'TX',
    city: 'Austin',
    pinCode: 78733,
    yearBuilt: 1986,
    parkingArea: 'Yes',
    bedrooms: 2,
    lotSize: 14680,
    bathrooms: 2,
    squareArea: 10003,
    repairQuality: 'New',
    imageCover: '/',
    images: ['/', '/'],
    createdAt: '2020-09-15T05:26:05.426Z',
    coordinates: [30.339072, -97.879124],
    dateAvailable: 'Available',
    type: 'Home',
    date: '2022-12-30T00:00:00.000Z',
    laundry: 'In Unit',
    cooling: 'Air Conditioner',
    heating: 'Forced Air',
    price: 575000,
    status: 'Active',

  },
];
const uri = 'mongodb+srv://madhavarora1101:v6cQ2QvPhq9zOmHK@realestate.pkwf5b4.mongodb.net/realEstate';
// const client = new MongoClient(uri);
const importToDb = async () => {
  try {
    // console.log(`${props} dd`);
    // await connectMongoDB();
    // const database = client.db('realEstate');
    // const properties = database.collection('properties');
    // const result= await properties.insertMany(props);
    // await Property.insertMany(props, { ordered: false });
    // ?console.log(serverRuntimeConfig.DATABASE);
  } catch (e) {
    console.log(e);
  }
};

const updateDb = async () => {
  try {
  //  await connectMongoDB();
    const doc = await Property.aggregate([
      {
        $addFields: {
          agent: '6559852f725c0ac67fce9ecf',
        },
      },

    ]);
    console.log(doc);
  } catch (e) {
    console.log(e);
  }
};

if (process.argv[2] === '--import') {
  importToDb();
}
if (process.argv[2] === '--update') {
  updateDb();
}
