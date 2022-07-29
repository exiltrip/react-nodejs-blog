import {default as axios} from "axios";

const PostsData = (
    axios.get('http://localhost:8080/api/post?id=2').then(response =>{
        console.log(response.data)
    })
)

export default PostsData;
