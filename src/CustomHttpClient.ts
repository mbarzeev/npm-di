import HttpClient from './HttpClient';

interface ResponseData {
    data: any;
}

const CustomHttpClient: HttpClient = {
    get<T>(url: string): Promise<T> {
        console.log('Fetching data with CustomHttpClient');
        return new Promise<T>(async (resolve, reject) => {
            const response = await fetch(url);
            const data = await response.json();
            resolve({data} as T);
        });
    },
};

export default CustomHttpClient;
