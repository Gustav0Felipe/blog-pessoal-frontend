import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
        
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    
    function handleClick(){
        if(openMenu)
            setOpenMenu(false)
        else
            setOpenMenu(true)
        console.log(openMenu)
    }

    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to={"/home"}> Blog Pessoal </Link>

                    <div className='flex gap-4'>
                        {!openMenu &&
                        <button className="burguer-menu material-icons" onClick={handleClick}>menu</button>
                        }
                        {openMenu && <>	
                            <button className="burguer-menu material-icons" onClick={handleClick}>menu</button>
                            <nav id="menu">
                                <ul>
                                    <li><Link to={"/"}> Home </Link></li>
                                    <li><Link to={"/postagens"}> Postagens </Link></li>
                                    <li><Link to={"/cadastrar-tema"}> Cadastrar tema </Link></li>
                                    <li><Link to={"/perfil"}> Perfil </Link></li>
                                    <li><Link to={"/sair"}> Sair </Link></li>
                                </ul>
                            </nav>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar