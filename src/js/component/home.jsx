import React, { useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Semaforo = () => {
	const[state, setState] = useState("rojo");
	const [change, setChange] = useState(false)

	const cambiarColor = (color) => {
		setState(color)
	}
	
	useEffect(()=>{
		if(change){
			const  interval = setInterval(() => {
				if (state ==="rojo"){
					setState("amarillo")
				}else if (state === "amarillo"){
					setState("verde")
				}else if (state === "verde"){
					setState("rojo")
				}
					
		    }, 2000)
					
		return ()=> clearInterval(interval)

		}
			
	}, [change, state])

	
	  return (
		  <main>
			  <div className="luces">
				  <div 
				      className={`rojo ${state === "rojo" ? "encendido": ""}`}
					  onClick={()=>cambiarColor("rojo")}
				  ></div>

				  <div 
				       className={`amarillo ${state === "amarillo" ? "encendido": ""}`}
				       onClick={()=>cambiarColor("amarillo")}
				  ></div>
				  <div 
				       className={`verde ${state === "verde" ? "encendido": ""}`}
				       onClick={()=>cambiarColor("verde")}
				  ></div>
  
			  </div>
			  <button onClick={()=>setChange(!change)} className="boton">Cambio de luces</button>
		  </main>
	  );
  }
	


	
	

export default Semaforo;
