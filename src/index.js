import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from 'components/Greeting';
import StudentRecords from 'components/StudentRecords';
import 'css/index.css';


let coll = document.getElementsByClassName("collapsible");
let i;
let msgArray=[];
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  let sendMessage = (event)=>{
    
    let x= document.getElementById("textMessage").value;
    msgArray.push(x);
    
    console.log("Message sent"+msgArray);
    
    ReactDOM.render(<Message message={msgArray[i]} />,document.getElementById('main'));
    
  }

const Message = ({message})=>{
  return(
    <div className="container">
    <img src="src/img/chat pic.png" alt="Avatar"  className="chatpic" readOnly/>
    <input type="text" defaultValue={message} readOnly/>
    {/* <p defaultValue = {message}></p> */}
    <span className="time-right">11:00</span>
  </div>

  )
}
const SideNavComponents = ()=>{
  return(
    <div>
      <div className="search-container">
            
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          
       
      </div>

      <a href="#about" className="collapsible"><i className="fas fa-users"></i>Groups</a>
      <div className="content">
          <ul>
              <li><a href="#" className="subgrp">Group 1</a></li>
              <li><a href="#" className="subgrp">Group 2</a></li>
              <li><a href="#" className="subgrp">Group 3</a></li>
              <li><a href="#" className="subgrp">Group 4</a></li>
          </ul>
        </div>
      <a href="#services" className="collapsible"><i className="fas fa-user-alt"></i>People</a>
      <div className="content">
          <ul>
              <li><a href="#" className="subgrp">People 1</a></li>
              <li><a href="#" className="subgrp">People 2</a></li>
              <li><a href="#" className="subgrp">People 3</a></li>
              <li><a href="#" className="subgrp">People 4</a></li>
          </ul>    
      </div>
      <a href="#clients" className="collapsible"><i className="far fa-file-image"></i>Files</a>
      <div className="content">
          <ul>
              <li><a href="#" className="subgrp">File 1</a></li>
              <li><a href="#" className="subgrp">File 2</a></li>
              <li><a href="#" className="subgrp">File 3</a></li>
              
          </ul>    
      </div>
      <a href="#contact" className="collapsible"><i className="fas fa-cog"></i>Settings</a>
      <div className="content">
          <ul>
              <li><a href="#" className="subgrp">New Group</a></li>
              <li><a href="#" className="subgrp">Profile</a></li>
              <li><a href="#" className="subgrp">Archived</a></li>
              <li><a href="#" className="subgrp">Starred</a></li>
              <li><a href="#" className="subgrp">Logout</a></li>
          </ul>
      </div>
    </div>
  )
}

const SidenavOpen= ()=>{
  return(
    <div>
      <div className="sidenav">
        
      <SideNavComponents />

      
      </div>
    </div>
  )
}
const SidenavClosed = ()=>{
return(
  <div>
    <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        <SideNavComponents />
    
    </div>

      <span  onClick={openNav} className="openNav">&#9776;</span>
  </div>
)

}
const MessageSender=()=>
{
  return (
    <div>
      <div className="footer">
              <input type="text" className="message_sender" placeholder="Write Message Here....." />
              <a href="#" className="send" onClick={sendMessage}><i className="far fa-arrow-alt-circle-right"></i></a>
              <a href="#" className="send"><i className="fas fa-paperclip"></i></a>
              <a href="#" className="send"><i className="fas fa-microphone"></i></a>
      </div>
    </div>
  )
}


const mainStruct = ({marr})=>{
  
  return (
    <div>
      <SidenavClosed />
      <SidenavOpen />
   
      
      
      
     <MessageSender />
      
      </div>
  );
}





const Struct = ({marr})=>{
  const arrmsg =marr.map(({message}, index)=> <Message key={index} message={message} />);
  
  return (
    <div>
      
   
      
      
      <div className="main" id="main">
         {/* <Message key="0" message={"hi, How are you"} />
        <Message key="1" message={"I am good, yourself?"} />  */}
        {arrmsg}
        
      </div>
     
      
      </div>
  );
}



const App = ()=>{
  const messages = [
    [{
      message:"hi, how are you?"
      
    }],[
    {
      message:"I am good. How is everything?"
    }
  ]
    ]    
  
        
  return(
    <div>
      <SidenavOpen />
      <SidenavClosed />
      <mainStruct />
      
      <Struct marr ={messages[0]} />
      <Struct marr ={messages[1]} />

      <MessageSender />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));



