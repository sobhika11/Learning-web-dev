import React from 'react';
function Header(){
    return(
        <>
        <header>
            <img src="../react-logo-half.png" alt="React Logo" width="40" />
        </header>
        </>
    )
}
function Mainfunc(){
    return(
        <>
        <ul>
            <li>1.strawberry</li>
            <li>blueberry</li>
            <li>Mango</li>
        </ul>
        </>
    )
}
function Footer(){
    return(
        <>
        <footer>
            <span>© 20xx React development. All rights reserved.</span>
        </footer>
        </>
    )
}
function Page(){
    return(
        <>
            <Header/>
            <Mainfunc/>
            <Footer/>
        </>
    )
}
export default Page;