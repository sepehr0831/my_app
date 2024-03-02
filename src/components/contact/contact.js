import React,{useState , useRef, useEffect} from "react";
import Button from "../button/button";
import './contact.css'

const Contact = () => {

    const [Errors,setErrors] = useState({})
    const [subject,setsubject] = useState();
    const inputsubjectRef = useRef(null);



    const handleChangeInputText = (event) => {
        setsubject(event.target.value)    };


    const validateEmail = (email) => {
         return String(email)
        .toLowerCase()
        .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         );};
   

      


    const [email,setemail] = useState();
    const handleChangeInputemail = (event) => {

        if(validateEmail(event.target.value)){
        setemail(event.target.value)  
        setErrors({
            ...Errors,
            email:null
        })
        }else {
            setErrors({
                ...Errors,
                email:"Email is not valid"
            });}
        
        };


    const[text,settext] = useState();
    const handleChangeInputarea = (event) => {
        settext(event.target.value)    };


    const handleclickk = () => {
        console.log("Submited");
        console.log('subject',subject);
        console.log('email',email);
        console.log('text',text);
    };


    useEffect(() => {
        inputsubjectRef.current.focus();

    },[]);
   




    return (


        <div className="Contact">
            <div className="formControl">
            <label>Subject :  </label> &nbsp;&nbsp;&nbsp;
            <input 
            ref={inputsubjectRef}
            type="text" onChange={handleChangeInputText}  />
            </div>
            <div className="formControl">
            <label>Your email :  </label> &nbsp;

            <input type="email"   onChange={handleChangeInputemail} />
            <br></br>
            <span>{Errors.email}</span>
            </div>
            
            <div className="formControl">
            <label>Your text :  </label> &nbsp;<br></br>

            <textarea onChange={handleChangeInputarea} >
                Your request here
            </textarea>
            </div>
            <br></br>
            <div className="formControl1">
                &nbsp;<Button handleclick={handleclickk} text= "Submit"/>
            </div>



    </div>
)}

export default Contact