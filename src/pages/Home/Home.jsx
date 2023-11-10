
import Topo from '../Header/header'
import NavBar from '../navbar/navbar';
import Slides from '../carousel';
import Contatos from '../Contatos/Contatos';
import Parceiros from '../Parceiros/Parceiros';
import EducationaLevels from '../Education-levels/education-levels';
function Home() {
    return(
        <div style={{backgroundColor: 'rgb(233, 228, 228)'}} >
            <Slides/>
            <Parceiros/>
            <EducationaLevels/>
            <Contatos/>
            

        </div>

    );
}

export default Home;