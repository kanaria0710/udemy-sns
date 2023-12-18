export interface UserType {
    id: number;
    username: string;
    email: string;
    password: string;
    posts: PostType[];
    profile: ProfileType;
};

export interface PostType {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    authorId: number;
    author: UserType;
};

export interface ProfileType {
    id: number;
    bio: string;
    profileImage: string;
    userId: number;
    user: UserType;
};