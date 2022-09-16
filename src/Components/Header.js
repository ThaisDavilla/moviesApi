import React, { Component } from 'react';
import Home from '../services/Home.js';
import Movies from '../services/Movies.js';
import Series from '../services/Series.js'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import * as S from '../Components/Styled'

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <S.BoxHeader>
                    <S.Titulo>🎬 D'AvillaFlix 📽️</S.Titulo>
                    <S.Navegar>
                        <ul>
                            <li>
                                <Link to='/'>Início</Link>
                            </li>
                            <li>
                                <Link to='/movies'>Filmes</Link>
                            </li>
                            <li>
                                <Link to='/series'>Séries</Link>
                            </li>
                        </ul>
                    </S.Navegar>
                </S.BoxHeader>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/series' element={<Series />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Header;