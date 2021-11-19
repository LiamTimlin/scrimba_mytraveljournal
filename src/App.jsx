import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";

const App = () => {
    return (
        <main>
            <Header />
            <CardList />
        </main>
    );
};

export default App;
