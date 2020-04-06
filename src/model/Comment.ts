import User from './User'

export interface CommentContentInfo {
    text: string;
}

export interface SubCommentInfo {
    comments: CommentModel[];
    count: number;
}

export interface CommentModel extends Document {
    post: string;
    parent?: string;
    creator: User;
    content: CommentContentInfo;
    createdAt: Date;
    subCommentInfo: SubCommentInfo;
}
