import axios from 'axios';

export async function loader() {
    const response = await axios.get('http://localhost:3001/api/courses');
    return response.data;
}