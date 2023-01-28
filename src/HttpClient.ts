export default interface HttpClient {
    get: <T>(...rest: any) => Promise<T>;
}
