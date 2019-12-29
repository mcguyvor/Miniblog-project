import Post, { Reaction } from '../model/Post'
import PostAPI, { PostInfo } from './API/PostAPI'

export default class PostService {
    private postAPI = new PostAPI()

    async createPost(postInfo: PostInfo): Promise<Post> {
        return this.postAPI.createPost(postInfo)
    }

    async getPost(id: string): Promise<Post> {
        return this.postAPI.getPost(id)
    }

    async likePost(id: string): Promise<Post> {
        return this.postAPI.reactPost(id, Reaction.LIKE)
    }

    async unlikePost(id: string): Promise<Post> {
        return this.postAPI.reactPost(id, Reaction.NONE)
    }

    async commentPost(id: string, text: string): Promise<Post> {
        return this.postAPI.commentPost(id, text)
    }
}
