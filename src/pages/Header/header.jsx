import './styles.css';
import LogoNew from '../Header/LogoNew.png'

export default function Topo() {
    return (
        <header>
            <div className='pre-nav'>
                <img className='logo' src={LogoNew} alt='LogoAva' title='Logo da escola' />
                <p id="myDIV" className='aniversary'>65 YEARS IN EDUCATION</p>

            </div>
        </header>
    );
}