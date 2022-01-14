import { Router } from "express";
import Controller from "../controllers/EmployeesController";

const router = Router({
  mergeParams: true
})

const EmployeeController = new Controller()

router.route('/employees').get(async (req, res) => {
  return await EmployeeController.get(req as any, res)
})

export default router