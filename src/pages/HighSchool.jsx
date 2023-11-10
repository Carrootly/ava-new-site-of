import React, { useEffect } from 'react';
import './HighSchool.css'

function HighSchool() {
    useEffect(() => {
        // Este efeito será executado após a montagem do componente
        console.log('HighSchool foi clicado');
    
        // Retorno de função para limpeza (opcional)
        return () => {
          // Este código será executado antes da desmontagem do componente
          console.log('redirecionado');
        };
      }, []); // O array de dependências vazio garante que o efeito será executado apenas após a montagem
    return (
        <div>


            <div className='hs1'>

                <div>
                    <h1 className='title-hs'>
                        High School
                    </h1>
                    <p className='hs-words1' >
                    Our school is based on traditional Education<br />
                        and totally USA based curriculum, our classroom are organized in centers,<br />
                        that help our studends develop the sense of organization and time.
                        Our material is from  Abeka that is
                        biblically-based curriculum.
                    </p>
                </div>
                <div>
                    <img className='hs-picture1' src="assets/hs-cards.jpg" />
                </div>
            </div>

            <div className='hs2'>
                <div>
                    <h1 className='hs-title2'> Grades</h1>
                    <p className='hs-kwords2'>
                        Our High School is divided in 4 levels.<br />
                        -Grade 9th<br />
                        -Grade 10th<br />
                        -Grade 11th<br />
                        -Grade 12th<br /> <br />

                        Our school year starts in August and ends in May.
                    </p>
                </div>
                <div>
                    <img className='hs-picture2' src="assets/hs-cards.jpg" />


                </div>


            </div>
        </div>

    );
}

export default HighSchool;