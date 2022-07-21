import { Admin } from '../models/Admin.js'
import jwt from 'jsonwebtoken'

function index(req, res) {
  Admin.find({})
    .then(admins => {
      res.json(admins)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

async function create(req, res) {
  let result = {}
  try {
    let AdminRecord = await Admin.findOne({
      $or:[
        { userName: req.body.userName },
        { emailAddress: req.body.emailAddress }
      ]
    })
    if (AdminRecord) {
      result.status = 'error'
      result.message = 'Found an existing username or email address for another admin.'
    } else {
      AdminRecord = await new Admin({
        fullName: req.body.fullName,
        userName: req.body.userName,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        roles: "Admin"
      })
      await AdminRecord.save()
      result.status = 'success'
      result.message = 'Successfully created an admin account.'
      result.account = AdminRecord
    }
    return res.status(201).json(result)
  } catch (err) {
    console.log(err.toString())
    return res.status(500).json({ error: err.toString() });
  }
}

function login(req, res) {
  Admin.findOne({ userName: req.body.userName })
  .then(user => {
    if (!user) return res.status(401).json({ err: 'User not found'})
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user)
        res.json({ token })
      } else {
        res.status(401).json({ err: 'Incorrect password' })
      }
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

/* --== Helper Functions ==-- */

function createJWT(user) {
  return jwt.sign(
    { user }, 
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

export { index, create, login }