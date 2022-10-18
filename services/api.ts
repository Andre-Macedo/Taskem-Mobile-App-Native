import axios, { Method } from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = "http://192.168.220.129:3001" + '/api/';

const instance = axios.create({
    baseURL: URL,
    timeout: 30000
});

export const executeRequest = async (endpoint: string, method: Method, body?: any) => {

    const accessToken = await AsyncStorage.getItem('accessToken');

    let headers: any = { "Content-Type": "application/json" };
    if (accessToken) {
        headers['Authorization'] = 'Bearer ' + accessToken;
    }

    console.log(`executing: ${URL}${endpoint}, method: ${method}, body: ${JSON.stringify(body)}, header: ${JSON.stringify(headers)}`);

    return instance.request({
        url: endpoint,
        method: method,
        data: body ? body : undefined,
        headers: headers
    });
}