import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
        
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext);
    
    function handleClick(){
        if(openMenu)
            setOpenMenu(false)
        else
            setOpenMenu(true)
        console.log(openMenu)
    }
    
    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }
    
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div>
                    {!openMenu &&
                        <button className="burguer-menu material-icons" onClick={handleClick}>menu</button>
                        }
                        {openMenu && <>	
                            <button className="burguer-menu material-icons" onClick={handleClick}>menu</button>
                            <nav id="menu">
                                <ul>
                                    <li><Link to={"/home"}> Home </Link></li>
                                    <li><Link to={"/postagens"}> Postagens </Link></li>
                                    <li><Link to={"/cadastrar-tema"}> Cadastrar tema </Link></li>
                                    <li><Link to={"/perfil"}> Perfil </Link></li>
                                    <li><Link to='' onClick={logout} className='hover:underline'>Sair</Link></li>
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