import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const SALT_ROUNDS = 6;

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  fullName: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true},
  emailAddress: {type: String, required: true, lowercase: true},
  roles: {type: String, required: true}
}, {
  timestamps: true
})

adminSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, SALT_ROUNDS)
  .then(hash => {
    user.password = hash
    next()
  })
  .catch(err => {
    next(err)
  })
})

adminSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

const Admin = mongoose.model('Admin', adminSchema)
export { Admin }