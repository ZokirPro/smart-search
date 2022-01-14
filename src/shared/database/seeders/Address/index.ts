import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function fakeAddresGenerator(): Promise<Array<any>> {
  const Address: string = fs.readFileSync(
    `${__dirname}/Address.json`,
    {
      encoding: 'utf-8'
    }
  );
  const AddressList: Array<any> = JSON.parse(Address);
  return AddressList;
}