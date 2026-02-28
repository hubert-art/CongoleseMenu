import './navBar.css';

function NavBar() {
    return(
        <section className='headerSection'>
            <div className='headerSectionChild1'>
                {/* <div className='CongoIconDiv'>
                  <img src="../../../public/democratic-republic-congo-flag-wrinkled-dark-background-3d-render.jpg" alt="" />
                </div> */}
                <h2>Congolese Cultural Food</h2>
            </div>
            <div className='headerSectionChild2'>
                <p>Hello everyone, welcome to the official Congolese food menu.
                    Treat yourself and enjoy our dishes, the local specialties that make Congolese cuisine so proud and unique.
                </p>
                <p></p>
            </div>
        </section>
    );
} 
export default NavBar;