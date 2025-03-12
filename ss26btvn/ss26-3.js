const arrayEmail =["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"] 
const checkEmail = arrayEmail.filter((value)=>{if(value.includes("@") && !value.includes(" ") ) {
    console.log(`${value}`)}})