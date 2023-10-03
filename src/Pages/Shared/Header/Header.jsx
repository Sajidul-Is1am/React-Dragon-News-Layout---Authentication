import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='grid justify-center text-center'>
            <img src={logo} alt="header logo" />
            <p>Journalism Without Fear or Favour</p>
            <h2>{moment().format("dddd, MMMM D, YYYY")}</h2>
        </div>
    );
};

export default Header;