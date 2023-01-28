import HttpClient from './HttpClient';
import {inject} from './di/inject';

type Album = {
    userId: number;
    id: number;
    title: string;
};

interface AlbumsResponse {
    data: Album[];
}

class Data {
    @inject('HttpClient')
    httpClient: HttpClient;

    fetchData() {
        return new Promise<Album[]>((resolve, reject) => {
            this.httpClient
                .get<AlbumsResponse>('https://jsonplaceholder.typicode.com/albums')
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default Data;
