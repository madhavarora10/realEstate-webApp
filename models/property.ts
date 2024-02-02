import mongoose, { Schema } from 'mongoose';

// Creating a mongoose model
const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A property must have a name'],
      unique: true,
      trim: true,
      maxlength: [150, 'A property name must have less or equal then 150 characters'],
      minlength: [5, 'A property name must have more or equal then 5 characters'],
      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
    description: {
      require: [true, 'Description is required'],
      type: String,
      maxlength: [1000, 'A description name must have less or equal then 1000 characters'],
      minlength: [10, 'A description name must have more or equal then 10 characters'],
    },
    city: {
      type: String,
      require: [true, 'city is required'],
    },
    state: {
      type: String,
      require: [true, 'state is required'],
    },
    country: {
      type: String,
      require: [true, 'country is required'],
    },
    yearBuilt: {
      type: Number,
      default: undefined,
    },
    squareArea: {
      type: Number,
      default: undefined,
    },
    lotSize: {
      type: Number,
      default: undefined,

    },
    parkingArea: {
      type: String,
      default: 'No',
      enum: {
        values: ['Yes', 'No'],
        message: 'parkingArea is either: Yes, No',
      },
    },
    deposit: {
      type: String,
      default: 'Nil',
    },
    address: {
      type: String,
      required: [true, 'A property must have a address'],
    },
    pinCode: {
      type: Number,
      required: [true, 'A property must have a  pinCode'],
    },
    status: {
      type: String,
      default: 'Active',
      enum: {
        values: ['Active', 'deActivated'],
        message: 'Status is either: Active, deActivated',
      },
    },
    bedrooms: {
      type: Number,
      default: 1,
      min: [1, 'bedrooms must be above atleast 1'],
    },
    bathrooms: {
      type: Number,
      default: 1,
      min: [1, 'bathrooms must be above atleast 1'],
    },
    price: {
      type: Number,
      required: [true, 'A property must have a price'],
    },
    repairQuality: {
      type: String,
      default: 'Modern Loft',
    },
    imageCover: {
      type: String,
      default: undefined,
    },
    images: {
      type: [String],
      default: undefined,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    coordinates: {
      type: [Schema.Types.Decimal128],
      default: undefined,
    },
    type: {
      type: String,
      enum: {
        values: ['House', 'TownHouse', 'Flat'],
        message: 'Status is either: House, TownHouse, flat',
      },
    },
    date: {
      type: String,
      default: 'Available now',
    },
    laundry: {
      type: String,
      enum: {
        values: ['In Unit', 'not Available'],
        message: 'laundary is either: In unit, not Available,',
      },
      default: 'Not Available',

    },
    cooling: {
      type: String,
      enum: {
        values: ['Air Conditioner', 'not Available'],
        message: 'cooling is either: Air Conditioner, not Available,',
      },
      default: 'Not Available',
    },
    heating: {
      type: String,
      enum: {
        values: ['Forced Air', 'Heater', 'not Available'],
        message: 'heating is either: Forced Air, not Available,',
      },
      default: 'Not Available',
    },

    agent: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },

  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Documents Middleware: runs before .save()and .create()

// propertySchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'guides',
//     select: '-__v -passwordChangeAt',
//   });
//   next();
// });
// propertySchema.pre('aggregate', function (next) {
//   this.populate({
//     path: 'guides',
//     select: '-__v -passwordChangeAt',
//   });
//   next();
// });

export const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
