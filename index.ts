import Data from './src/Data';

async function getData() {
    const data = new Data();
    const result = await data.fetchData();
    console.log('result :>> ', result);
}

getData();
