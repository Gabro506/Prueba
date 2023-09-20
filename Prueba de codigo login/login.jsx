import { useState,userEffect} from 'react';

function Login(){
    const [user, setUser] = useState ("");
    const [pass, setPass] = useState ("");
    const [error, setError] = useState ("");
    const [msg, setMsg] = useState ("");

    userEffect(() => {
        setTimeout(function(){
            setMsg("");
        }, 5000 );
    }, [msg] );

    const handleInputChange = (e, type) =>{
        switch(type){
            case "user";
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("Username ha dejado en blanco");
                    }   
                    break;
            case "pass";
                setError("");
                setPass(e.target.value);
                if(e.target.value === ""){
                    setError("Password ha dejado en blanco");
                    }   
                    break;
                    default:
                }
    }

    function LoginSubmit(){
        if(user !==  "" &&  pass !== "" ){
            var url "http://localhost/react/login.php"
            var headers ={
                "Accept": "applicaction/json",
                "Content -type": "applicaction/json",
            }
            var Data ={
                user: user,
                pass: pass,
            };
            fetch(url,{
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) =>response.json())
            .then((response) => {
                setMsg(response[0].result);
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        }
        else{
            setError("All field are requierd!")

        }

    }

    return(
        <div className="form">
            <p>
                {
                    error !== "" ?
                    <span className="error">{error}</span>:
                    <span className="success">{msg}</span>
                }
            </p>
            <label>Username</label>
            <input 
                type "text"
                value={user}
                onChange={(e) =>handleInputChange(e, "user")}
            />
             <label>Password</label>
            <input 
                type "password"
                value={pass}
                onChange={(e) =>handleInputChange(e, "pass")}
            />
            <label></label>
            <input 
                type="submit"
                defaultValue="Login"
                className="button"
                onClick={LoginSubmit}
            />
        </div>
    );
}

export default Login;