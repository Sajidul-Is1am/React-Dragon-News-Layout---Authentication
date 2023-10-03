import { TbBadge } from 'react-icons/tb'
import { CiShare2 } from 'react-icons/ci'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const NewsItem = ({ news }) => {
    const { details, image_url, thumbnail_url, total_view, title, author, rating } = news;
    const { published_date, name, img } = author;
    const { number } = rating;
    return (
        <div className='mb-10 border-[#F3F3F3]'>
            <Link to={'/'}>
                {/* top clint profile information */}
                <div className='flex justify-between p-5 bg-[#F3F3F3]  rounded items-center'>
                    <div className="flex ">
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={img} />
                            </div>
                        </label>
                        <div>
                            <h4 className="text-xl">{name}</h4>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <TbBadge></TbBadge>
                        <CiShare2></CiShare2>
                    </div>
                </div>
                {/* item end */}
                <div className='px-5'>
                    <h3 className='text-xl font-bold text-[#403F3F] mt-8'>{title}</h3>
                    <img className='my-5' src={image_url} alt="" />
                    <div className='my-5'>
                        <p >{details}</p>
                        <button className='text-yellow-700'>see more</button>
                    </div>
                    <hr className='my-5' />
                    <div className='flex justify-between mb-5'>
                        <div className='flex gap-1 items-center'>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>{number}</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiFillEye></AiFillEye>
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default NewsItem;