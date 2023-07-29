import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: 1,
    maxLength: 100,
    default: `YaliUser${ Math.round(Math.random() * 10000) }`
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 13,
    maxLength: 13,
    math: /^[\+][0-9]{12}$/
  },
  password: {
    type: String,
    required: true,
    // math: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
  },
  joinDate: {
    type: Date,
    default: new Date()
  }
})

const User = mongoose.model('user', userSchema);

export { User }