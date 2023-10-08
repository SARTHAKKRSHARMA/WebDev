import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

export const AppContext = createContext();

export function AppContextProvider({children})
{
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogPost(page = 1)
    {
        setLoading(true);
        try {
            let url = `${baseUrl}?page=${page}`
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setPosts(data.posts);
            setPageCount(data.page);
            setTotalPages(data.totalPages);
        } catch (error) {
            setLoading(false);
            alert(error)
            console.log(error);
        }
    }

    function handlePageChange(page)
    {
        fetchBlogPost(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        pageCount,
        setPageCount, 
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}