import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Pagination()
{
    const {pageCount, totalPages, handlePageChange} = useContext(AppContext);
    
    return (
        <div className=" fixed bottom-0 w-[100%] bg-white border-2">
            <div className="w-[40%] mx-auto flex justify-between items-center py-2">
                <div className="flex gap-2">
                    {(pageCount > 1) && <button className="px-2 py-1 border-2 rounded-md" onClick={() => handlePageChange(pageCount-1)}>Previous</button>}
                    {(pageCount < totalPages) && <button className="px-2 py-1 border-2 rounded-md" onClick={() => handlePageChange(pageCount+1)}>Next</button>}
                </div>
                <div>
                    <p className=" font-bold">Page {pageCount} of {totalPages}</p>
                </div>
            </div>
            
        </div>
    )
}