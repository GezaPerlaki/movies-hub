import './Header.css';

const Header = () => {
  return (
    <header onClick={() => window.scroll(0, 0)} className='header'>
      🎥 Movies Hub 🎥{' '}
    </header>
  );
};

export default Header;
