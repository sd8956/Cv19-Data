import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Item.scss';

const Item = (item) => (
        <Link to={`/${item.country}`}>
            <div className="item">
                <figure>
                    <img src={item.countryInfo.flag}/>
                </figure>
                <section>
                    <h4>{item.country}</h4>
                    <div className="item__details">
                        <p>Deaths: {item.deaths}</p>
                        <p>Cases: {item.cases}</p>
                        <p>Recovered: {item.recovered}</p>
                    </div>
                </section>
            </div>
        </Link>
);

export default Item;