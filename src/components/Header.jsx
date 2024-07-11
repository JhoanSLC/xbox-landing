import '../css/header.css'

function Header() {
    return (
        <>  
            <div className="headerContainer">
                <article className="logoContainer">
                    <img class="microsoftLogo" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Logo header de microsoft" />
                </article>

                <article className="xboxLogoContainer">
                    <img class="xboxLogo" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e" alt="Logo header de xbox" />
                </article>

                <section className="navBarContainer"> 
                    <ul className="navBarUl">
                        <a class="navItem gamePassNav">Game Pass</a>
                        <a class="navItem juegosNav">Juegos</a>
                        <a class="navItem dispoNav">Dispositivos</a>
                        <a class="navItem tiendaNav">Tienda</a>
                        <a class="navItem masNav">Más</a>
                    </ul>
                </section>

                <section className="rightSideHeaderContainer">
                    <ul className="rightUlNav">
                        <a className="rightNavItem todoMicroNav">Todo Microsoft</a>
                    </ul>

                    <article className="searchContainer"><p>Buscar</p><img src="searchIcon.svg" alt="Icono de busqueda" className="searchIcon" /></article>

                    <article className="cartContainer"><p class="cartText">Carro</p><img src="cartIcon.svg" alt="Icono de compras" className="cartIcon" /></article>

                    <article className="loginContainer"><p class="loginText">Iniciar Sesión</p><img src="loginIcon.svg" alt="Crear cuenta o iniciar sesión" className="loginIcon" /></article>

                </section>
            </div>
        </>

    );
}

export default Header;