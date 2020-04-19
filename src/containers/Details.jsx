import React from 'react';
import Header from '../components/Header';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/Details.scss';

const API = 'https://corona.lmao.ninja/v2/countries/';

const Details = (props) => {
    const { country } = props.match.params;
    const data = useInitialState(`${API}${country}`);

    return(
    <>
        <Header/>
        <section>
            <div className="container">
                <div className="country-inner">
                    <section className="country-card">
                    {data.countryInfo ?
                        <img src={data.countryInfo.flag} alt={data.country}/>
                        :
                        null
                    }
                        <h2>{data.country}</h2>
                    </section>

                    <section className="country-card info">
                        <div>
                            <h3>Deaths: <span>{data.deaths}</span></h3>
                            <h3>Cases: <span>{data.cases}</span></h3>
                            <h3>Recovered: <span>{data.recovered}</span></h3>
                            <h3>Active: <span>{data.active}</span></h3>
                            <h3>Critical: <span>{data.critical}</span></h3>
                            <h3>Tests: <span>{data.tests}</span></h3>
                        </div>
                        <div>
                            <h3>Today cases: <span>{data.todayCases}</span></h3>
                            <h3>Today deaths: <span>{data.todayDeaths}</span></h3>
                            <h3>Cases per one million: <span>{data.casesPerOneMillion}</span></h3>
                            <h3>Deaths per one million: <span>{data.deathsPerOneMillion}</span></h3>
                            <h3>Tests per one million: <span>{data.testsPerOneMillion}</span></h3>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </>
    )

};

export default Details;