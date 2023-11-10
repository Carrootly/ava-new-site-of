import React from 'react';
import telefoneIcon from '../../assets/telefone-icon.png';
import pino from "../../assets/pino.png";
import email from "../../assets/email-icon.png"
import instagram from "../../assets/icon-instagram-grey.svg"

import './styles.css';


export default function Contatos (BackGroundColor){
    return(
        <div  id='contato' className='contatos'>
            <div>
                <h3 className='title-contatos'>Contact us</h3>
                

                <div>
                    <div>
                        
                        
                        <div>
                            <img className='contato-imagens' src={pino} alt="Pino de localização" title="Pino de localização"/>
                            <p className="contatos-end">Travessa Tenhi, 132- Coqueiro - Ananindeua</p>
                        </div>

                        <div>
                            <img className='contato-imagens' src={email}alt="email-icon" title="email-icon" />
                            <p className="contatos-email">office@amazonvalleyacademy.com</p>
                        </div>
                        
                        <div>
                            <img className='contato-imagens' src={telefoneIcon} alt="telefone-icon" title="telefone-icon" />
                            <p className="contatos-telefone">+55(91)3245-2566 </p>
                        </div>

                        <div>
                            
                            <div style={{marginLeft:'45%'}}>
                                <a  href="https://www.instagram.com/amazonvalleyacademy/"><img className='contato-imagens' src={instagram} alt="instagram-icon" title="instagram-icon" /></a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}