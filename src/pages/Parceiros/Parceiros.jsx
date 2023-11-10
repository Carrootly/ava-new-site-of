import '../Parceiros/styles.css'
import Abeka from '../../assets/Abeka.png'
import ACSI from '../../assets/ACSI.png'
import background from '../../assets/parceiros-background.png'

export default function Parceiros(){
    return(
        <div className='Parceiros'>

            <div>
   

            <div className='parceiros-pic-cont'>
            <img className='Parceiros-pictures' src={Abeka} />
            <img className='Parceiros-pictures1' src={ACSI} />
            </div>

            </div>
            
        </div>
    )
}

