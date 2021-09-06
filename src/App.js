import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App =() => {
return (
<>
<Navbar />
<Switch>

    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/contact" component={Contact} />
    {/* <Redirect  to="/" /> */}
    </Switch>
    <Footer />
</>
);
};
export default App;
