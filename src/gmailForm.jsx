
import { useState } from "react"
import "./gmail.css"

function GmailForm(){
    const [check,setcheck]=useState();
    const [mail,setmail]=useState();
    const [error,seterror]=useState(false);
    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function emailCheck(){
        setcheck(mail);
        if(pattern.test(check)){
            seterror(false)
        }
        else{
            seterror(true)
        }
    }
    function emailInput(e){
        setmail(e.target.value);
    }

    return(<div className="backG">
        <div className="gmail-form">
            <h2>35,000+ already joined</h2>
            <h1>Stay up-to-date with what we’re doing</h1>
            <div className="gmail-input">
                <input className={error? "error":null} type="text" placeholder="Enter your email address" onChange={emailInput}/>
                <div className={error ? "err act":"err"}>
                   <span>Whoops,make sure it's an email</span> 
                </div>
                <button onClick={()=>emailCheck()}>Contact Us</button>
            </div>
        </div>
        

    </div>)

}

export default GmailForm