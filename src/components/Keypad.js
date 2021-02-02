// Code Keypad Component Here
function Keypad(){
    function typeInput(event){
        console.log("Entering password...")
    }

    return(
        <input type = "password" placeholder = "type something" onChange = {typeInput}/>
    )
}

export default Keypad;