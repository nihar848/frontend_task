import axios from "axios";

const baseurl = "https://demo-api.pritamdas.com";
//axios.defaults.withCredentials = true;

export const login = async (url: string, options: {}): Promise<any> => {
    const res = await axios.post(`${baseurl}/${url}`,options);
    console.log(res);
    return res.data;
}; //tyscript return type
export const signup = async (url: string, options: {}): Promise<any> => {
    const {data} = await axios.post(`${baseurl}/${url}`,options);
    return data;
};
export const profile = async (url: string): Promise<any> => {
    const {data} = await axios.get(`${baseurl}/${url}`);
    return data;
};