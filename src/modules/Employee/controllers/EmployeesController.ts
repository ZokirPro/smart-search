import { BaseController } from "../../../shared/core/BaseController";
import Repository from "../repository/EmployeesRepository";
export default class Controller extends BaseController {
  private repository = new Repository();

  async get(req, res) {
    try {
      const data = req.query
      if (!(data.pattern && data.pattern.trim())) {
        return this.clientError(res, 'Pattern is required in query params')
      }
      const employees = await this.repository.get(data)
      return this.ok(res, employees)
    } catch (e) {
      return this.fail(res, `${e}`)
    }
  }
}