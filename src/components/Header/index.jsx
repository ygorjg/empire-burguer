import { useState } from "react";
import { Container } from "./style";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <img src="/assets/logo.png" className="logo" alt="Logo Empire Burguer" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Promoção</li>
          <li>Cardápio</li>
          <li>Comentários</li>
          <li>Contato</li>
        </ul>
      </nav>
      <span>
        <span className="social-icons">
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/white-ifood.svg"
              className="ifood-icon"
              alt="Logo iFood"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/white-instagram.svg"
              className="instagram-icon"
              alt="Logo Instagram"
            />
          </a>
        </span>
        <span className="tab"></span>
        <a
          className="contact-box"
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/whatsapp.svg" alt="Logo WhatsApp" />
          <p>WhatsApp</p>
        </a>
      </span>
      <MenuIcon
        className="menu-icon"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></MenuIcon>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Promoção</MenuItem>
        <MenuItem onClick={handleClose}>Cardápio</MenuItem>
        <MenuItem onClick={handleClose}>Comentários</MenuItem>
        <MenuItem onClick={handleClose}>Contato</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
