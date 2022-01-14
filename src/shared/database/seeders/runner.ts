import mockAddress from './Address';
import mockEmployee from './Employee'
import Address from '../entities/Address';
import Employee from '../entities/Employee'
export default async function () {

  try {
    const AddressList = await mockAddress();
    await Address.deleteMany()
    await Address.insertMany(AddressList);
  }
  catch (error) {
    throw new Error(`Address seeders error: ${error}`);
  }

  try {
    const EmployeeList = await mockEmployee();
    await Employee.deleteMany()
    await Employee.insertMany(EmployeeList);
  }
  catch (error) {
    throw new Error(`Employee seeders error: ${error}`);
  }
}