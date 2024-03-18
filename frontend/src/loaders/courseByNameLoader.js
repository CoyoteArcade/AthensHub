import axios from 'axios';
import { useParams } from 'react-router-dom';

export async function loader({params}) {
    let path = params.courseId;
    console.log(path);
    let encodedName = encodeURI(path);
    // let courseName = path.split('/').pop();
    // console.log(courseName);
    // let decodedName = decodeURI(courseName);
    // console.log(decodedName);
    try {
        const response = await axios.get(`http://localhost:3001/api/courses/${encodedName}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}