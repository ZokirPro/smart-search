import { Document, RefType } from "mongoose";

export interface EmployeeItem extends Document {
  _id: string,
  fullname: string,
  department: string,
  position: string
  addressId: RefType
}