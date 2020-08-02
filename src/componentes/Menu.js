import React from 'react';
import Logo from "../recursos/Logo.png";
import "./Menu.css";
import Button from "./Button.js";
import { Link } from 'react-router-dom';

/*
	Button as="a" é o componente Button se comportando como tag a
para usar o css
*/
function Menu(){
	return (
		
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={Logo} alt="AnaFlix" />
			</Link>
			<Button as={Link} className="ButtonLink" to="/cadastro/video">
				Novo vídeo
			</Button>
		</nav>
	);
}

export default Menu;