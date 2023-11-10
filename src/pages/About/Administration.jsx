import "../About/Administration.css";


function Administration() {
    return (
        <div>
            <div className="title">
            <h1>Administration</h1>
            </div>
            
            <div className="body">

                <div className="body-1">
                    <div className="particles">
                        <div>
                            <img className="adm-pictures" src='assets/principal.png' />
                        </div>
                        <div>
                            <p className="adm-words">
                                Brent Wilson - Principal
                            </p>
                        </div>
                    </div>

                    <div className="particles">
                        <div>
                            <img className="adm-pictures" src='assets/office.png' />
                        </div>
                        <div>
                            <p className="adm-words">
                                Mrs. Bel Santos - Officer Manager
                            </p>
                        </div>
                    </div>


                    <div className="particles">
                        <div>
                            <img style={{width:'130px', height: '100px', borderRadius:'40%', marginLeft: '5%'}} className="adm-pictures" src='assets/financial.jpg' />
                        </div>
                        <div>
                            <p className="adm-words">
                                Mrs. Lene - Tresurer
                            </p>
                        </div>
                    </div>
                </div>



                <div className="body-2">
                    <div className="particles">
                        <div>
                            <img className="adm-pictures" src='assets/iago.png' />
                        </div>
                        <div>
                            <p className="adm-words">Mr Iago Queiroz - Lead Teacher</p>
                        </div>
                    </div>

                    <div className="particles">
                        <div>
                            <img className="adm-pictures" src='assets/moraes2.png ' />
                        </div>
                        <div>
                            <p className="adm-words">Ms. Moraes -ECE & Lower Elementary Lead Teacher/<br/> 1st Grade Homeroom Teacher </p>
                        </div>
                    </div>

                    <div className="particles">
                        <div>
                            <img className="adm-pictures" src='assets/coordination.png' />
                        </div>
                        <div>
                            <p className="adm-words">
                                Mrs. Vanja Terra - School and EFL Coordinator
                            </p>
                        </div>
                    </div>

                





                </div>

            </div>

        </div>

    );
}

export default Administration;