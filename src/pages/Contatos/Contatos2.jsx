import React from 'react';
import telefoneIcon from '../../assets/telefone-icon.png';
import pino from "../../assets/pino.png";
import email from "../../assets/email-icon.png"
import instagram from "../../assets/icon-instagram-grey.svg"

import './styles.css';


export default function Contatos2 (BackGroundColor){
    return(
        <div  id='contato2' className='contatos2'>
            <div>
                <h3 className='title-contatos2 letters'>Contact us</h3>
                

                <div>
                    <div>
                        
                        
                        <div className='container-contacts'>
                            <img className='contato-imagens' src={pino} alt="Pino de localização" title="Pino de localização"/>
                            <p className="contatos-end cont letters">Travessa Tenhi, 132- Coqueiro - Ananindeua</p>
                        </div>

                        <div className='container-contacts'>
                            <img className='contato-imagens' src={email}alt="email-icon" title="email-icon" />
                            <p className="contatos-email cont letters">office@amazonvalleyacademy.com</p>
                        </div>
                        
                        <div className='container-contacts'>
                            <img className='contato-imagens' src={telefoneIcon} alt="telefone-icon" title="telefone-icon" />
                            <p className="contatos-telefone cont letters">+55(91)3245-2566 </p>
                        </div>

                        <div className='container-contacts'>
                            <div>
                                <a href="https://www.instagram.com/amazonvalleyacademy/"><img className='contato-imagens' src={instagram} alt="instagram-icon" title="instagram-icon" /></a>
                            </div>

                            <p className='cont letters'>Social Media</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}