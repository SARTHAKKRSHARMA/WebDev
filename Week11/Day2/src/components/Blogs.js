import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Blog from "./Blog";
import Spinner from "./Spinner";

export default function Blogs()
{
    const { loading, posts, fetchBlogPost} = useContext(AppContext);
    useEffect(() => 
    {
        fetchBlogPost();
    }, [])
    
    return (
        <div className={`w-[60%] mx-auto mt-[80px] p-3 min-h-full flex flex-col justify-center ${loading ? "items-center" : "items-start"}`}>
            {loading ? <Spinner /> : posts.map((post) => <Blog key={post.id} post={post} />)}
        </div>
    )
}