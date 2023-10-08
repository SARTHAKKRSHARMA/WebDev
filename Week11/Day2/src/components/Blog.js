export default function Blog(props)
{
    const post = props.post;
    return (
        <div className=" mb-12">
            <p className=" font-bold text-[18px]">{post.title}</p>
            <p className=" italic text-[14px]">By {post.author} on <span className=" font-bold underline text-[14px] cursor-pointer">{post.category}</span></p>
            <p className="">Posted on {post.date}</p>
            <p className="max-w-[600px]">{post.content}</p>
            <ul className="flex text-blue-500 gap-2 text-[14px] underline font-bold">{post.tags.map((tag, index) => <li key={index}><a>#{tag}</a></li>)}</ul>
        </div>
    );
}