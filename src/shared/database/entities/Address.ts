import { Document, model, RefType, Schema } from "mongoose";
import { v4 as uuid } from 'uuid'

interface Address extends Document {
  addressId: string,
  name: string
}

const AdressSchema = new Schema<Address>({
  _id: {
    type: String,
    default: uuid
  },
  name: {
    type: String,
    required: true
  }

}, {
  versionKey: false,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
})

export default model<Address>('Address', AdressSchema)