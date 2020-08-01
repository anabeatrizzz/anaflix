import React from 'react';
import Logo from "../recursos/Logo.png";
import "./Menu.css";
import Button from "./Button.js";

/*
	No JS a palavra class é reservada, então usa-se ClassName
para referenciar classes .css 
	Button as="a" é o componente Button se comportando como tag a
para usar o css
*/
function Menu(){
	return (
		
		<nav className="Menu">
			<a href="/">
				<img className="Logo" src={Logo} alt="AnaFlix" />
			</a>
			<Button as="a" className="ButtonLink" href="/">
				Novo vídeo
			</Button>
		</nav>
	);
}

export default Menu;