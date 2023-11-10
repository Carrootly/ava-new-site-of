import './Primary.css'

function Primary(){
    return(
        <div>


            <div className='primary1'>
                <div>

                    <h2 className='primary-words-title'>Primary School</h2>
                    <p className='primary-words1' >
                    Our school is based on traditional Education<br />
                        and totally USA based curriculum, our classroom are organized in centers,<br />
                        that help our studends develop the sense of organization and time.
                        Our material is from  Abeka that is
                        biblically-based curriculum.
                        
                    </p>
                </div>
                <div>
                    <img className='primary-picture1' src="assets/primary-school.jpg"  alt="students "/>
                </div>
            </div>

            <div className='primary2'>
                <div>
                    <h1 className='primary-title2'> Grades</h1>
                    <p className='primary-kwords2'>
                        Our High School is divided in 4 levels.<br />
                        -1st Grade<br />
                        -2nd Grade<br />
                        -3rd Grade<br />
                        -4th Grade<br/> <br/>

                        Our school year starts in August and ends in May.
                    </p>
                </div>
                <div>
                    <img className='primary-picture2' src="assets/primary-school.jpg" alt="students"/>


                </div>
                

            </div>

        </div>
    );
}

export default Primary;