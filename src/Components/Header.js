import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onToggle, color, buttonText }) => {

    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button onClick={onToggle} className='btn' color={ color } text={ buttonText } />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onToggle: PropTypes.func,
}

export default Header
