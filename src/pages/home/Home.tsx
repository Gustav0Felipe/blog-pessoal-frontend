import Menu from "../Menu"

function Home() {
    return (
        <>
            <div className="w-screen flex justify-center">
                <div>
                    <div className="max-w-7xl flex flex-col items-center">
                        <h2>Seja Bem Vinde!</h2>
                        <p>Expresse aqui seus pensamentos e opniões</p>
                        <Menu></Menu>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da Página Home"
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home