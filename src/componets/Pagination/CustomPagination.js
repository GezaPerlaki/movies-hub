import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { setSourceMapRange } from 'typescript';
import './CustomPagination.css';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = page => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className='style'>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={e => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color='primary'
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
