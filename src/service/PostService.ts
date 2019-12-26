import Post from '../model/Post'
import PostAPI, { PostInfo } from './API/PostAPI'

export default class PostService {
    private postAPI = new PostAPI()

    async createPost(postInfo: PostInfo): Promise<Post> {
        return this.postAPI.createPost(postInfo)
    }

    async getPost(id: string): Promise<Post> {
        return this.postAPI.getPost(id)
    }
}
