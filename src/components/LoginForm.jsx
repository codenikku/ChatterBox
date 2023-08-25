import { useState } from "react"
import axios from "axios";

const LoginForm = ()=>{

    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObject={'project-ID':"ed1f4ca3-2d7a-4d81-a519-08656273b235",'User-Name':username,'User-Secret':password}
        try {
           await axios.get('https://api.chatengine.io/chats', { headers:authObject })
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)
            window.location.reload();
        } catch (error) {
            setError('Oops, incorrect credentials.')
        }
    }
 
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">ChatterBox</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                    <button type="submit" className="button">
                        Start Chatting
                    </button>
                    </div>
                    <h2 className="error" align="center">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm