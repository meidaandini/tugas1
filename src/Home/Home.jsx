import React from 'react';
import Navbar from '../Tugas1/Navbar';
import Jumbotron from '../Tugas1/Jumbotron';
import Panel from '../Tugas1/Container/Panel';
import Workspace from '../Tugas1/Container/Workspace';
import Testimo from '../Tugas1/Container/Testimo';
import Footer from '../Tugas1/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <Panel />
            <Workspace/>
            <Testimo />
            <Footer />
        </div>
    )
}

export default Home;
