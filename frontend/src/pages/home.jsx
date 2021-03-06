import React from 'react';

import { Route, Switch  } from 'react-router-dom';
// components
// containers
import Home from '../containers/homePage/homeContainer';
import Eventos from '../containers/eventos';
import Juegos from '../containers/juegos';
import Gallery from '../components/homePage/gallery';
import Contacto from '../components/homePage/contact';
import Foro from '../containers/foro';
import Noticias from '../containers/news';
import About from '../components/homePage/about';
// style
import './styles/homePage.css';


function LandingPage(){
	return(
        <div className="landing-page-super-container">
            {/* render the landing nav only in landing routes */}
            <div className="landing-content-container">
            	<Switch>                       
            		<Route exact path="/" component={Home} />
    				<Route exact path="/eventos" component={Eventos} />
                    <Route exact path="/juegos" component={Juegos} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route exact path="/galeria" component={Gallery} />
                    <Route exact path="/foro" component={Foro} />
                    <Route exact path="/noticias" component={Noticias} />
            	    <Route exact path="/about" component={About} />
                 </Switch>
            </div>
        </div>
    )
}

export default LandingPage;