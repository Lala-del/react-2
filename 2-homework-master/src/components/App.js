import React from 'react'
import ProductList from './ProductList'
import Navbar from "./Navbar";
import AddedFiles from "./AddedFiles";
import Favorites from "./Favorites";
import {BrowserRouter as Router, Switch , Route} from  'react-router-dom'

function App(){
    return (
        <Router>
            <div>
                    <Navbar/>
                    <Switch>
                        <Route path = "/addedFiles" component={AddedFiles}/>
                        <Route path = "/favorites" component={Favorites}/>
                        <Route path = "/" component={ProductList}/>
                    </Switch>
            </div>
        </Router>
    )
}


export default App;