import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';

const TitleBlock = () => {
  return (
    <>
      <GiHamburgerMenu size={28} className="hamburger" />
      <div className="brand"><Link to={'/'}>Maura</Link></div>
    </>
  )
};

export default TitleBlock;
