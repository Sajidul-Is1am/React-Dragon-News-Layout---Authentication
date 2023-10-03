import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BiLogoInstagramAlt } from 'react-icons/bi';
// import image for Q Zone
import Qimage1 from '../../../assets/qZone1.png' 
import Qimage2 from '../../../assets/qZone2.png' 
import Qimage3 from '../../../assets/qZone3.png' 
import { BsTwitter } from 'react-icons/bs';
const RightSideNav = () => {
    return (
        <div>
            {/* login with part start */}
            <div className='p-3 mb-8'>
                <h3 className="text-2xl font-bold mb-8">Login With</h3>
                <button className="btn btn-outline w-full border-spacing-1 font-medium mb-2 text-blue-600">
                    <FcGoogle></FcGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full border-spacing-1 font-medium mb-2">
                    <AiFillGithub></AiFillGithub>
                    Login With Github
                </button>
            </div>
            {/* find on us part start */}

            <div className='p-3 mb-8 '>
                <h3 className="text-2xl font-bold mb-6">Find On</h3>
                <button className="btn btn-outline w-full border-spacing-1 font-medium rounded  text-blue-600">
                    <BiLogoFacebookCircle></BiLogoFacebookCircle>
                    FaceBook
                </button>
                <button className="btn btn-outline w-full border-spacing-1 border-t-0  rounded font-medium text-blue-600">
                    <BiLogoInstagramAlt></BiLogoInstagramAlt>
                    Instragram
                </button>
                <button className="btn btn-outline w-full border-spacing-1 border-t-0 rounded  font-medium text-blue-600">
                    <BsTwitter></BsTwitter>
                    Twiter
                </button>

            </div>

            {/* Q zone start */}

            <div className='p-3 mb-8 '>
                <h3 className="text-2xl font-bold mb-6">Find On</h3>
                <div>
                    <img className='mb-7' src={Qimage1} alt="" />
                    <img className='mb-7' src={Qimage2} alt="" />
                    <img className='mb-7' src={Qimage3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;