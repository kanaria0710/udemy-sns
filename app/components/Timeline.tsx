'use client';
import React, { useState } from "react";
import Post from "./Post";
import apiClients from "../lib/apiClients";
import { PostType } from "../types/types";

const Timeline = () => {
    const [postText, setPostText] = useState<string>("");
    // const [latestPosts, setLatestPosts] = useState<PostType[]>([]);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // const newPost = await apiClients.post("/posts/post", {
            //     content: postText,
            // });

            await apiClients.post("/posts/post", {
                content: postText,
                authorId: 1,
            });

            // setLatestPosts((prevPost) => [newPost.data, ...prevPost]);
            setPostText("");
        } catch(error) {
            alert(error);
            console.log(error);
        }
    } 
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto py-4">
                <div className="bg-white shadow-md rounded p-4 mb-4">
                <form onSubmit={handleSubmit}>
                    <textarea
                    id="post"
                    name="post"
                    className="w-full h-24 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="What's on your mind?"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPostText(e.target.value)}
                    value={postText}
                    ></textarea>
                    <button
                    type="submit"
                    className="mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded"
                    >
                    投稿
                    </button>
                </form>
                </div>
                {/* {latestPosts.map((post: PostType) => (
                    <Post key={post.id} post={post} />
                ))}; */}
            </main>
        </div>
     );
};

export default Timeline;