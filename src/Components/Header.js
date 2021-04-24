import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onToggle }) => {
    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button onClick={onToggle} className='btn' color='green' text='Add'/>
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
