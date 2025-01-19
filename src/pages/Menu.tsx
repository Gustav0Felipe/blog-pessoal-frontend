import { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu () {
	
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	if(window.innerWidth < 769){
		setOpenMenu(false)
	}		
	
	function handleClick(){
		if(openMenu)
			setOpenMenu(false)
		else
			setOpenMenu(true)
		console.log(openMenu)
	}

	return(
	<>
		{!openMenu &&
            <span className="burguer-menu material-icons" onClick={handleClick}>menu</span>
		}
		{openMenu && <>	
            <span className="burguer-menu material-icons" onClick={handleClick}>menu</span>
			<nav id="menu">
				<ul>
					<li><Link to={"/"}> Home </Link></li>
				</ul>
			</nav>
			</>
		}
        </>
        )
	}

export default Menu;
