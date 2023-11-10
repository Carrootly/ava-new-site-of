import styled from 'styled-components';


const Contacts = styled.div`
height: 200px;
display: flex;
background-color:  #c8d415;
height: 500px;
justify-content: center;
align-items: center;
width: ${(props) => {
    if(props.width) return props.width;
    return '90%'
}};
text-align: center;
align-items: center;

.contato-imagens{
    height: 30px;
    width: 30px;

}

.contatos-end{
    
    white-space: nowrap;
}

.contatos-email{


}

.contatos-telefone{

}

.contatos-title{

}

.social-media-title{

}

.contatos-body{
    display: flex;
    text-align: center;
    justify-content: space-evenly;
}

`; 

export default Contacts;


