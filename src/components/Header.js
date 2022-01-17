import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt='Netflix'></img>
                </a>
            </div>
            <div className='header--user'>
                <a href='/' >
                    <img src="https://i.pinimg.com/474x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="Usuário"></img>
                </a>
            </div>
        </header>
    );
}