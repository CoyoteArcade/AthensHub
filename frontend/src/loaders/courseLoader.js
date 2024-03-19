import axios from 'axios';

const prod = import.meta.env.PROD;
const prodURL = "https://giddy-tan-ladybug.cyclic.app";

export async function loader() {
    const response = await axios.get(`${prod ? prodURL : "http://localhost:3001"}/api/courses`);
    return response.data;
}