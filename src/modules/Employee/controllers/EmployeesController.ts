import { BaseController } from "../../../shared/core/BaseController";
import { SearchDTO } from "../dtos/EmployeesDTO";
import Repository from "../repository/EmployeesRepository";
export default class Controller extends BaseController {
  private repository = new Repository();

  async get(req, res) {
    try {
      const data: SearchDTO = req.query

      const employees = await this.repository.get(data)
      return this.ok(res, employees)
    } catch (e) {
      return this.fail(res, `${e}`)
    }
  }
}