import React, {Component} from 'react'
import Tilt from 'react-tilt';

class Us extends Component{

    render(){

        return(


            <section id="us">
                <div className='container'>

                <h2 style={{textAlign:'center', lineHeigt:'3rem'}}>NUESTRA HISTORIA</h2>
                <br/>
                <br/>

                  <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-4">
                    <Tilt className="Tilt" options={{ max : 30, scale: 1.05, speed: 500 }}>
                    <img className='imageus' src="https://res.cloudinary.com/mishulicious/image/upload/v1539709018/gogasmakeup/CARUSEL/22813982_10160041061740131_7192469084644671743_n.jpg" alt="us"/>
                    </Tilt>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-8 historia">
                        
                        <p>Nosotras somos <strong>Rubí  y Mishel</strong> , desde chicas nos encanta caracterizarnos. Nuestra mamá nos disfrazaba para distintos eventos escolares y lo que nos hacia diferentes de las demás niñas era ... <strong>¡EL MAQUILLAJE!</strong>  </p>
                        <p>Hace 5 años  hicimos una <strong>fiesta de Halloween</strong> y mi hermana Rubí contrató a un maquillista que había trabajado en televisoras, pero una cosa es el maquillaje profesional y otra el <strong> MAKEUP ART</strong> (algunos lo conocen como facepainting/caracterización) el caso es que ella quería que la maquillara de calaca y el resultado no fue como esperaba. Todos le dijimos que ella hubiera podido hacer mejor. </p>
                        <p>Tiempo después en la empresa que trabajaba le preguntaron si podría pintarlos de calaca y sin dudarlo tomó las pinturas que ellos tenían y los pintó.... <strong>quedaron impactados!</strong></p>
                        <p>A raíz de eso la gente empezó a llamarla para distintos<strong> eventos</strong>, y aquí es donde entré yo a escena ... me pidió que la ayudara y nos dimos cuenta que hacíamos un <strong>gran equipo.</strong> </p>
                        <p>Rubí estudia Mercadotecnia y  es Fitness Coach, y yo (Mishel) soy Lic. en Diseño y Comunicación Visual y actualmente estoy en un bootcamp de Desarrollo Web, es por eso que no hacemos Makeup Art todos los días pero cuando <strong>nos recomiendan</strong> y nos piden en sus eventos lo disfrutamos muchísimo, nos motiva ver que <strong>a la gente le gusta </strong>y  ver que quedan contentos con el resultado.</p>
                    </div>

                  </div>            

                </div>    
            </section>



            
        )
    }
}

export default Us