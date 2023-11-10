import React, { useState, useRef } from 'react';
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import './Admissions.css';
import Contatos from '../Contatos/Contatos';


function Admission() {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensagem, setMensagem] = useState('');
  const formRef = useRef();

  const concatenateId = (publicKey, privateKey) => {
    const separator = '-';
    return publicKey + separator + privateKey;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = 'DwMnNTMXfjJ-J-Ykl';
    const privateKey = '8KKrXmrWfUXjOeX8l97Dl';
    const mergedId = concatenateId(publicKey, privateKey);

    // Configuração do serviço de e-mail
    //emailjs.init(publicKey);

    // Parâmetros do e-mail a ser enviado
    const templateParams = {
      from_name: email,
      to_name: 'office@amazonvalleyacademy.com',
      subject: 'Contato do formulário',
      message: mensagem,
      reply_to: whatsapp,
    };

    // Enviar e-mail
    emailjs.sendForm('service_p3y0afo', 'template_4feq8rw', formRef.current, publicKey)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response);
        // Limpar os campos do formulário
        setEmail('');
        setWhatsapp('');
        setMensagem('');
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
      });
  };

  return (
    <div>
    <div className='container'>
      <form ref={formRef} className='Admission-body' onSubmit={handleSubmit}>

        <h2 className='admission-title'>Come to AVA</h2>

        <div className='text'>
          <p>If you want to be part of AVA, send us
            a message that we will talk to you,
            Tell us what you would like to know:
          </p>
        </div>







        <div className="row" style={{ marginLeft: '5%' }}>
          <label className='admissions-titles' htmlFor="email">E-mail:</label>
          <input style={{ marginLeft: '2%', marginBottom: '1%' }}
            className='boxes'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <div className="row" style={{ marginLeft: '3%' }}>
            <label className='admissions-titles' htmlFor="whatsapp">WhatsApp:</label>
            <input style={{ marginLeft: '2%', marginBottom: '1%' }}
              className='boxes'
              type="text"
              id="whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>

          <div className="row" style={{ marginLeft: '5%' }} >
            <label className='admissions-titles' htmlFor="mensagem">Message:</label>
            <textarea style={{ marginLeft: '2%', marginBottom: '1%' }}
              className='box-message'
              id="mensagem"
              name="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <button className='submit-btn' type="submit">Submit</button>
          </div>
        </div>
      </form>

      
    </div>
    <Contatos />
    </div>
  );
}

export default Admission;
