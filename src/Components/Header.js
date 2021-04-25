import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onToggle, color, buttonText }) => {

    const loc = useLocation();

    return (
        <header className='header'>
            <h1>{ title }</h1>
            {loc.pathname === '/' && <Button onClick={onToggle} className='btn' color={ color } text={ buttonText } />}
        </header>
    )
}

Header.defaultProps = {
    title: 'To Do',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onToggle: PropTypes.func,
}

export default Header
