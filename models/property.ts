import mongoose from 'mongoose';

// Creating a mongoose model
const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A property must have a name'],
      unique: true,
      trim: true,
      maxlength: [150, 'A property name must have less or equal then 150 characters'],
      minlength: [5, 'A property name must have more or equal then 10 characters'],
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
      default: 'not Available',
    },
    squareArea: {
      type: Number,
      default: 'not Available',
    },
    lotSize: {
      type: Number,
      default: 'not Available',

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
      required: [true, 'A property must have a status'],
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
    // priceDiscount: {
    //   type: Number,
    //   validate: {
    //     validator(val:number) {
    //       // this only points to current doc on NEW document creation
    //       return val < this.price;
    //     },
    //     message: 'Discount price ({VALUE}) should be below regular price',
    //   },
    // },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    // location: {
    //   // GeoJSON
    //   type: {
    //     type: String,
    //     default: 'Point',
    //     enum: ['Point'],
    //   },
    // },
    coordinates: [Number],
    Available: {
      type: String,
    },
    type: {
      type: String,
      enum: {
        values: ['Home', 'TownHouse', 'Flat'],
        message: 'Status is either: Home, TownHouse, flat',
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

    // agent: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'Agent',
    //   },
    // ],

  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// // 11.21 for icreasing the speed of query
// tourSchema.index({ price: 1, ratingsAverage: -1 });
// tourSchema.index({ startLocation: '2dsphere' });

// tourSchema.virtual('durationWeeks').get(function () {
//   return this.duration / 7;
// });

// Virtual populate
// tourSchema.virtual('reviews', {
//   ref: 'Review',
//   foreignField: 'tour',
//   localField: '_id',
//   strict: false,
// });

// tourSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// tourSchema.pre('save',async function(next){
//   const guidesPromises=this.guides.map(async id=> await User.findById(id));
//   this.guides=await Promise.all(guidesPromises);
//   next();
// });

// Documents Middleware: runs before .save()and .create()
// tourSchema.pre(/^find/, function (next) {
//   this.find({ secretTour: { $ne: true } });
//   next();
// });

// tourSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'guides',
//     select: '-__v -passwordChangeAt',
//   });
//   next();
// });

export const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
