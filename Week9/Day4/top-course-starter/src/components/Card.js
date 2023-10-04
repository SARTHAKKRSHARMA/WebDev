import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
export default function Card(props)
{
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    const [liked, changeLiked] = useState(false);    
    function likeHandler()
    {
        if(likedCourses(props.course.id))
        {
           setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
           toast.warning("Course removed from your favorites"); 
        }
        else
        {
            setLikedCourses((prev) => {
                return [...prev, props.course.id];
            })
            toast.success('Course Added to your favorites');
        }
        changeLiked(!liked); 
    }

    useEffect(() => {}, [likedCourses]);

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
            <div className='relative'>
                <img src={props.course.image.url} alt={props.course.image.alt}></img>
                <div className='absolute bottom-3 right-2 rounded-full w-[40px] h-[40px] bg-white grid place-items-center'>
                    <button onClick={likeHandler}>
                        {liked ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize={"1.75rem"}/>} 
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className=' text-white font-semibold text-lg leading-6'>{props.course.title}</p>
                <p className=' text-white mt-2'>{`${props.course.description.substring(120)}....`}</p>
            </div>
        </div>

    )
}