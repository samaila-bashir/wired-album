import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from "./appBar-styled"
import PropTypes from 'prop-types';

export default function AppBar({ search,onChangeText,title,onClick,IconComponent }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            onClick={onClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           {IconComponent}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
          { search && (
             <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onChange={ (e) => onChangeText(e.target.value) }
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
             </Search>
          ) }
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
AppBar.propTypes = {
  search: PropTypes.bool,
  onChangeText: PropTypes.func,
  title: PropTypes.string,
  onClick: PropTypes.func,
  IconComponent: PropTypes.element.isRequired
}

