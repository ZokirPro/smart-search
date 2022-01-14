import express from 'express';
import { json } from 'body-parser';
import MongoDB from './shared/core/connect'
import appConfig from './config/app';
import EmployeesRoutes from './modules/Employee/routes/index'

const app = express();
app.use(json());
app.use('/', EmployeesRoutes);

const mongoDb = new MongoDB();

(async function () {
  console.log(mongoDb.url);

  await mongoDb.connect();
  console.log(`[Mongodb]: Connected to mongodb server`);
})(); 


app.listen(appConfig.port, () => {
  console.log(`Server is listening on port ${appConfig.port}`);
})
