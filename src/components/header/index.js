import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../static/images/salon.jpg";
import { Modal, makeStyles, TextField, Button, rgbToHex } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,

    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 610, alignContent:"center",
    height: 310,
    backgroundColor:"#3D3D3D",
    border: "3px solid #102",
    borderRadius: 25,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(5, 5, 5),
    color: "black",
  }
}));

function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [register, setRegister] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link to="#" type="button" onClick={handleOpen}>
        Login
      </Link>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {register == false ? (
          <div style={modalStyle} className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="filled-basic"
                label="phone number"
                variant="filled"
                name="phone"
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                type="password"
                label="password"
                variant="outlined"
              />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="contained" color="black">
                Login
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                variant="contained"
                onClick={() => {
                  setRegister(true);
                }}
              >
                Register me
              </Button>
            </form>
          </div>
        ) : (
          <div style={modalStyle} className={classes.paper}>


            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="filled-basic" label="name" variant="filled" />
              <br />
              <br />
              <TextField
                id="filled-basic"
                label="phone number"
                variant="filled"
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                type="password"
                label="password"
                variant="outlined"
              />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={() => {
                  setRegister(false);
                }}
                variant="contained"
                color="black"
              >
                Login
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="contained">Register me</Button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, showDropdownMenu: false };
  }
  openMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };
  openDropdown = () => {
    this.setState(({ showDropdownMenu }) => ({
      showDropdownMenu: !showDropdownMenu
    }));
  };
  hideMenu = () => {
    this.setState(({ showDropdownMenu, showMenu }) => ({
      showDropdownMenu: !showDropdownMenu,
      showMenu: !showMenu
    }));
  };

  onSubmit(){
    const apiUrl = 'http://127.0.0.1:8000/api/user/register';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
 

  render() {
    return (
      <div className="iparys_inherited">
        <div className="parsys iparsys header-wrap">
          <div className="header-wrapper section">
            <header>
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      onClick={this.openMenu}
                      className="navbar-toggle navbar-toggle--main collapsed"
                      data-toggle="collapse"
                      data-target="#navbar-collapse-main"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icomoon-menu"></span>
                      <span className="icomoon-dropdown-nav"></span>
                    </button>
                    <div className="logo-component parbase main_logo">
                      <div className="footer-logo-component">
                        <div className="image" title="">
                          <Link to="/">
                            Thairpy{" "}
                            <span style={{ fontSize: "10px" }}>
                              Spa &amp; Salon
                            </span>
                            <img
                              title="M & M SALON & SPA "
                              alt="null"
                              style={{ width: "100px", borderRadius: "50px" }}
                              src={LogoImg}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topnav nav-bar">
                    <div
                      className={
                        this.state.showMenu
                          ? "collapse navbar-collapse in"
                          : "collapse navbar-collapse"
                      }
                      id="navbar-collapse-main"
                    >
                      <ul className="nav navbar-nav">
                        <li>
                          <Link to="/team">Team</Link>
                        </li>
                        <li>
                          <Link to="/services/salon">The Salon</Link>
                        </li>
                        <li>
                          <Link to="/services/spa">The Spa</Link>
                        </li>
                        <li
                          className={this.state.showDropdownMenu ? "open" : ""}
                          onMouseEnter={this.openDropdown}
                          onMouseLeave={this.openDropdown}
                        >
                          <Link to="#">
                            Services
                            <span className="icomoon-down-dir"></span>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/services/massage">Massage</Link>
                            </li>
                            <li>
                              <Link to="/services/barber">Barber Services</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>

                        <li>
                          <Link to="/book">Book now</Link>
                        </li>
                        <li>
                          <SimpleModal />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="location top-right-location-par"></div>
                  <div className="cartlink top-right-cartlink-par"></div>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
