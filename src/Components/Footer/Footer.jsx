import Container from "../Container/Container";
import logo from "../../Assets/logo.png";

const Footer = () => {
   return (
      <div className="bg-neutral text-neutral-content items-center py-4">
         <Container>
            <footer className="footer">
               <aside className="grid-flow-col items-center">
                  <div className="flex items-center gap-2 font-extrabold text-3xl ">
                     <img
                        style={{ width: 60, height: 60 }}
                        src={logo}
                        alt="Study Sphere"
                     />
                     <p>
                        <span className="text-[#3890d8]">Study</span>
                        <span className="text-[#FFC338]">Sphere</span>
                     </p>
                  </div>
               </aside>
               <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <p>
                     Copyright © {new Date().getFullYear()} - All right reserved
                  </p>
               </nav>
            </footer>
         </Container>
      </div>
   );
};

export default Footer;
