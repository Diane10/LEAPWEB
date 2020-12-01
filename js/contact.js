// functions
const add_contact =async()=>{
    const names = document.getElementById('names').value
    const emails = document.getElementById('emails').value
    const subjects = document.getElementById('subjects').value
    const messages = document.getElementById('messages').value
    if(names&emails&subjects&messages>0){
    
        const response = await fetch('https://rlsgl2020.herokuapp.com/contact',{
            method:"POST",
            body:JSON.stringify({
                name:names,
                email:emails,
                subject:subjects,
                message:messages

            }),
            headers:{
                "Content-Type": "application/json"
            }
        })

        const responseData = await response.json()
        console.log(responseData)
        if(response.ok){
            location.href="../../contact.html"
        }else{
            alert(responseData.error)
        }
    }
}


// events

document.getElementById('submit').addEventListener('click',add_contact)