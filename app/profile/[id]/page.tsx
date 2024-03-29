import React from "react";
import apiClients from '../../lib/apiClients'; 
import { PostType } from "@/app/types/types";

const UserProfile = async ({ params }: { params: { id: string }}) => {
    const profileResponse = await apiClients.get(`/users/profile/${params.id}`);
    const postResponse = await apiClients.get(`/posts/${params.id}`);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="w-full max-w-xl mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <div className="flex items-center">
                    <img className="w-20 h-20 rounded-full mr-4" alt="User Avatar" src={profileResponse.data.profileImage} />
                    <div>
                        <h2 className="text-2xl font-semibold mb-1">{profileResponse.data.user.username}</h2>
                        <p className="text-gray-600">{profileResponse.data.bio}</p>
                    </div>
                    </div>
                </div>
                {postResponse.data.map((post: PostType) =>  (
                    <div className="bg-white shadow-md rounded p-4 mb-4" key={post.id}>
                        <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <img className="w-10 h-10 rounded-full mr-2" alt="User Avatar" src={profileResponse.data.profileImage} />
                            <div>
                            <h2 className="font-semibold text-md">{post.author.username}</h2>
                            <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">{post.content}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );       
};

export default UserProfile;