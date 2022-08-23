import React, { Component } from 'react';
import Home from '../services/Home';
import Movies from '../services/Movies';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <h1>Movie Se</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/movies'>Movies</Link>
                        </li>
                        <li>
                            <Link to='/series'>Series</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/movies' element={<Movies />}/>
                    <Route path='/series' element={<Series />}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Header;