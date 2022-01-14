import { Document, model, RefType, Schema } from "mongoose";
import { v4 as uuid } from 'uuid'

interface Employee extends Document {
  _id: string,
  fullname: string,
  department: string,
  position: string,
  addressId: RefType
}

const EmployeeSchema = new Schema<Employee>({
  _id: {
    type: String,
    default: uuid
  },
  fullname: {
    type: String,
    required: true,
    index: true
  },
  department: {
    type: String,
  },
  position: {
    type: String,
  },
  addressId: {
    type: String,
    ref: 'Address'
  }
}, {
  versionKey: false,
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
})

export default model<Employee>('Employee', EmployeeSchema)