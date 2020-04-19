import React, {useState, useEffect} from 'react';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import Item from '../components/Item';
import '../assets/styles/Home.scss';

const API = 'https://corona.lmao.ninja/v2/countries';

const Home = () => {
    const initialState = useInitialState(API);

    const [ query, setQuery] = useState([]);

    const filteredCountries = initialState.filter(item => {
        return item.country.toLowerCase().includes(query);
    })

    return (
        <>
            <Header/>
            <section className="main container">
                <input
                    type="text"
                    className="input"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value.toLowerCase());
                    }}
                />
            </section>

            <main className="content">
                    {filteredCountries.map(data =>
                        <Item key={data.country} {...data}/>
                    )}
            </main>
        </>
    );
}

export default Home;
