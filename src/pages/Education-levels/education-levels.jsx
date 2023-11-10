import { Link } from 'react-router-dom';
import kindergarten from '../../assets/kindergarten-level.png';
import HS from '../../assets/hs-cards.jpg';
import Middle from '../../assets/middle-s.png';
import Primary from '../../assets/Primary2.png';
import Visit from '../../assets/visit2.jpg';
import './styles.css'


function EducationaLevels(){
    return(
        <di id="eduEdu">
            <Link to='kindergarten'>
            <div className='k'>
            <img className='eduLevels-pic' src={kindergarten} alt="kindergarten" />
            <h1 className='cards'>Early Childhood Education</h1>
            </div>
            </Link>

            <Link to='primary-school'>
            <div className='primary'>
            <img className='eduLevels-pic' src={Primary} alt="Primary" />
            <h1 className='cards'>Primary School</h1>
            </div>
            </Link>

            <Link to='middle-school'>
            <div className='middle'>
            <img className='eduLevels-pic' src={Middle} alt="Middle" />
            <h1 className='cards'> Middle School</h1>
            </div>
            </Link>

            <Link to='/high-school'>
            <div className='highschool'>
            <img className='eduLevels-pic' src={HS} alt= "HS" />
            <h1 className='cards'>High School</h1>
            </div>
            </Link>

                <Link to="/admission">
            <div className='visit'>
                    <h1 className='cards'>Visit us</h1>
                    <img className='eduLevels-pic' src={Visit} alt= "Visit" />
            </div>
                </Link>
          
        </di>

    );
}

export default EducationaLevels;