import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from "./navbar-styled"

export default function SearchAppBar({ showSearch }) {

  // const [filterPhotos, setFilterPhotos] = React.useState([]);

  const renderSearch = () => {
    if (showSearch) {
      return (
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              // onChange={ (e) => setFilterPhotos(e.target.value) }
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      );
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            WIREDALBUM
          </Typography>
          { renderSearch() }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
