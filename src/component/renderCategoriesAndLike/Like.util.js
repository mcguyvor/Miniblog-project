
import PostService from '../../service/PostService'

const singleBlogLike = async(wasLike, setWasLike,detail ,setDetail,userInfo,blogId) =>{
        
    const postService = new PostService();


    if(detail._id === userInfo._id){
        return ;
    }else if(wasLike){
        await postService.unlikePost(detail._id);
        setWasLike(!wasLike);
        const data = await postService.getPost(blogId);
        setDetail(data.post);
    }else{ 
    await postService.likePost(detail._id);
    setWasLike(!wasLike);
    const data = await postService.getPost(blogId);
    setDetail(data.post);
    }
    
}

export default singleBlogLike;