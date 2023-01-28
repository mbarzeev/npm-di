import axios from 'axios';
import CustomHttpClient from '../CustomHttpClient';

export type DiConfig = Record<string, any>;

const config: DiConfig = {
    // HttpClient: axios,
    HttpClient: CustomHttpClient,
};

export default config;
