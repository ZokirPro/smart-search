import MongoDB from '../../core/connect';
import runner from './runner';
const mongodb = new MongoDB();

(async function () {
  try {
    await mongodb.connect();
    await runner();
    console.log("Seeders created successfully");
  }
  catch (error) {
    throw new Error(`${error}`);
  }
  process.exit(0);
})();