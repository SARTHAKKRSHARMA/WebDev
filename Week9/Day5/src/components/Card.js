import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';



export default function Card(props) 
{
    return (
        <div>
            <div className='flex justify-center items-center overflow-hidden w-[100px] h-[100px] rounded-full absolute -top-[3rem] left-5'>
                <img src={props.review.image}></img>
            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
                <h3 className='text-[20px] font-extrabold'>{props.review.name}</h3>
                <p className=' opacity-50'>{props.review.job}</p>
            </div>
            <div className='flex flex-col gap-2 mt-2 items-center text-center mb-5'>
                <RiDoubleQuotesL />
                <div className='h-[120px]'>{props.review.text}</div>
                <RiDoubleQuotesR />
            </div>
        </div>
    )
}