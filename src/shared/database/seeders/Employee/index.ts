import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function fakeEmployeeGenerator(): Promise<Array<any>> {
  const Employees: string = fs.readFileSync(
    `${__dirname}/Employee.json`,
    {
      encoding: 'utf-8'
    }
  );
  const EmployeesList: Array<any> = JSON.parse(Employees);
  return EmployeesList;
}