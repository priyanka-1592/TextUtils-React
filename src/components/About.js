import React from 'react'

export default function About(props) {
  
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'#13466e':'white',
   
  }
    
  return(
    <div className="container">
        <h1 className="my-3" style={{color:props.mode === "dark"?"white":"#042743"}}>About Us</h1>
      <div className="accordion" id="accordionExample"style={myStyle}>
    <div className="accordion-item"style={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Sure, I can analyze a text. Please provide the text you'd like me to analyze. If you have any specific aspects of the text you want analyzed (e.g., tone, style, content, etc.), please let me know.
      </div>
    </div>
    </div>
    <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      When considering text that is "free to use," it typically refers to content that falls under public domain or certain types of licenses that allow free use, such as Creative Commons licenses. Here's a brief analysis of these categories:
      </div>
    </div>
   </div>
   <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      Browser compatibility refers to the ability of a web application or website to function correctly across different web browsers and their various versions. 
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

