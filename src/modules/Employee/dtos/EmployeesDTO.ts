import { Document, RefType } from "mongoose";

export interface SearchDTO {
  pattern: string
}

export interface EmployeeItem extends Document {
  _id: string,
  fullname: string,
  department: string,
  position: string
  addressId: RefType
}