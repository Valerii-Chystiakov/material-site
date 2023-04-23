import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';


function App() {
 
  
  return (
    
    <div className="App">

      <header className="App-header">
        <Demo/>
        <AppBar position="sticky" color="default">
          <Toolbar>
              <IconButton aria-label="hello" >
                <MenuItem ></MenuItem>
              </IconButton>
            <Typography variant="h6">
              Hello
            </Typography>
          </Toolbar>
        </AppBar>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', alignItems: "center"}}><IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography></Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </header>
    </div>
  );
}

export default App;
