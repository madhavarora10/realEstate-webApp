/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import mongoose from 'mongoose';

const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'email please'],

  },
  photo: String,

  password: {
    type: String,
    required: [true, 'password provide '],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm password'],
    validate: {
      validator(el) {
        return el === this.password;
      },
      message: 'password not confirmed',
    },
  },

  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },

});

userSchema.pre('save', async function (next) {
  // only runs this function if paasword was modified
  if (!this.isModified('password')) return next();

  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // does not save confirm password in database
  this.passwordConfirm = undefined;
});

userSchema.methods.correctPassword = async function (
  candidatePassword:number,
  userPassword:number,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
//   if (this.passwordChangedAt) {
//     const changedTimestamp = parseInt(
//       this.passwordChangedAt.getTime() / 1000,
//       10,
//     );
//     return JWTTimestamp < changedTimestamp;
//   }
//   return false;
// };

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

// userSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');

//   this.passwordResetToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');

//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

//   return resetToken;
// };

export const User = mongoose.models.User || mongoose.model('User', userSchema);