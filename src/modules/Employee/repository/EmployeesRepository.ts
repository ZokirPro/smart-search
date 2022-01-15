import BaseRepository from "../../../shared/core/BaseRepository";
import Employee from "../../../shared/database/entities/Employee";
import { EmployeeItem } from "../dtos/EmployeesDTO";

export default class Repository extends BaseRepository {
  constructor() {
    super()
  }

  async get(data) {
    try {
      const { pattern } = data
      const pipeline = this.aggregateBuilderForSearch(pattern.trim().split(' '), ['fullname', 'position', 'address.name'])
      const employees: EmployeeItem[] = await Employee.aggregate(pipeline)
      return employees
    } catch (e) {
      throw new Error(`${e}`);
    }
  }
}