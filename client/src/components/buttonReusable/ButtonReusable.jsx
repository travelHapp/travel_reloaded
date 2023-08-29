import './ButtonReusable.css'

const ButtonReusable = ({text,id,onClick,nameClass}) => {

    return (
        
        <button 
        className = {nameClass}
        id={id} 
        onClick={()=>{
        onClick() 
        }}
        >
        {text}
        </button> 
    
)

}
export default ButtonReusable;