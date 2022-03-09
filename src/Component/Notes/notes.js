import '../Notes/notes.css';
const Notes = () =>{
    let arr =[1,2,3];
    return(
        <div>
        <h1>User Notes</h1>
           <div className='wrapper'>
               {arr.map((item)=>{
                   return(
                    <div className='notes-card'>
                    <div className='head'>
                    <h1>{localStorage.getItem('title')}</h1>
                        </div>
                
                <div className='body'>
                <p>{localStorage.getItem('desc')}</p>
                    </div>
                
                </div>
                   );
               })}
               </div>
        </div>
    );
}

export default Notes;