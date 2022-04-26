import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ onToggle, color, buttonText }) => {

    const loc = useLocation();

    return (
        <header className='header'>
            {loc.pathname === '/' && <Button onClick={onToggle} className='btn' color={ color } text={ buttonText } />}
        </header>
    )
}

Header.defaultProps = {
    title: 'To Do',
}

Header.propTypes = {
    onToggle: PropTypes.func,
}

export default Header
