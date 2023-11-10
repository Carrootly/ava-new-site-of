import './MiddleSchool.css'

function MiddleSchool(){
    return (
        <div>

            <div className='ms-1'>
                <div>
                    <h1 className='title-ms'>
                        Middle School
                    </h1>
                    <p className='ms-words1' >Our school is based on traditional Education<br />
                        and totally USA based curriculum, our classroom are organized in centers,<br />
                        that help our studends develop the sense of organization and time.
                        Our material is from  Abeka that is
                        biblically-based curriculum.
                    </p>
                </div>
                <div>
                    <img className='ms-picture1' src="assets/ms-cards.png" alt='students' />
                </div>
            </div>

            <div className='ms-2'>
                <div>
                    <h1 className='ms-title2'> Grades</h1>
                    <p className='ms-words2'>
                        Our Middle School is divided in 3 levels.<br />
                        -5th Grade<br />
                        -6th Grade<br />
                        -7th Grade<br />
                        -8th Grade<br/>

                        Our school year starts in August and ends in May.
                    </p>
                </div>
                <div>
                    <img className='ms-picture2' src="assets/ms-cards.png" alt='students'  />


                </div>


            </div>
        </div>
    );
}

export default MiddleSchool;