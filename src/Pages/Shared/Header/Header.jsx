import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='grid justify-center text-center mt-10'>
            <img className='' src={logo} alt="header logo" />
            <p className='mt-3 text-lg font-normal text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <h2 className='mt-2 text-xl font-medium text-[#403F3F]'>{moment().format("dddd, MMMM D, YYYY")}</h2>
        </div>
    );
};

export default Header;