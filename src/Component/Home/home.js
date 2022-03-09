import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = ()=>{
    const [title, setTitle] = useState();
    const [desc,setDesc] = useState();
    const navigate=useNavigate();

    const getInput = (e) =>{
        e.target.name==='title' ? setTitle(e.target.value):setDesc(e.target.value);
    }

    const handleSubmit =()=> {
        if(title===undefined|| desc===undefined){
            alert('title and description required');
        }else{
        
            localStorage.setItem('title',title);
            localStorage.setItem('desc',desc);
            alert('note saved sucessfully');
        }
    }

    const showProfile =()=>{
        navigate('/profile')
    }
    const showNote =()=>{
        navigate('/notes')
    }
    return(
        <div className="container">
            <div className="header">
                <h1>Add Notes</h1>
                <button className="profile-btn" onClick={showProfile}>Profile</button>
            </div>
            <div className="body">
            <label>Title</label> 
            <input type="text" name="title" onChange={(e)=>getInput(e)} value={title} placeholder="Title" />       
            <label>Description</label> 
            <textarea type="text" name="desc" onChange={(e)=>getInput(e)} value={desc} placeholder="Description" rows='10'/>
            <div className="btn-wrapper">
            <button type="button" className="btn" onClick={handleSubmit}>Submit</button> 
            <button type="button" className="btn-red" onClick={showNote}>Show Note</button>
            </div>
            </div>
        </div>
    );
}

export default Home;