import axios from "axios";



//const baseurl = "https://demo-api.pritamdas.com";
//axios.defaults.withCredentials = true;

export const login = async (url: string, options: {}): Promise<any> => {
    const {data} = await axios.post('/api/login',options);
    console.log(data);
    return data;
}; //tyscript return type
export const signup = async (url: string, options: {}): Promise<any> => {
    const {data} = await axios.post('/api/signup',options);
    return data;
};
export const profile = async (url: string): Promise<any> => {
    const {data} = await axios.get('/api/profile');
    return data;
};
export const updateProfile = async (url: string, options: {}): Promise<any> => {
    const {data} = await axios.post('/api/update-profile',options);
    return data;
};