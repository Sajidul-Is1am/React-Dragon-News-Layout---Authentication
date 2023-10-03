import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-5 my-8">
            <button className=" text-white btn rounded-none bg-[#D72050]">Breaking News</button>  
            <Marquee pauseOnHover={true} speed={100}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente assumenda, ratione officia optio repudiandae, praesentium nobis natus ad rerum esse voluptas cupiditate non omnis consequuntur perferendis in nesciunt corporis dolor quibusdam eius voluptatum aliquid! Corrupti maxime inventore, neque, debitis similique fugit, illum id esse quisquam fugiat ducimus nesciunt. Dolorem qui illo quae magni obcaecati. Laudantium, minus? Laboriosam non veniam, nisi natus molestiae quam illum sed vitae consequatur ab itaque perspiciatis quod quibusdam officia quasi voluptatem doloremque eum ullam at dicta laborum eligendi eaque repudiandae assumenda. Dicta, voluptatum numquam! Eius architecto, itaque rem odio non officia laboriosam earum perferendis quod pariatur.</Marquee>         
        </div>
    );
};

export default BreakingNews;