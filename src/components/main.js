import React, { Component } from 'react';
import axios from 'axios';

import { MdPeople, MdLocationCity } from 'react-icons/md';
import CountryLoader from './loader';

export default class main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countriesList: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getCountriesData();
    }

    async getCountriesData() {
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
            console.log(response);
            this.setState({
                countriesList: response.data,
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { isLoading, countriesList } = this.state;
        const { isDark } = this.props;
        return (
            <main className="mt-20 ">
                <div className="container mx-auto">
                    <div className="countries-header flex justify-between px-6 my-5">
                        <div className="w-20 bg-red-400 h-full"></div>
                        <div className="inline-block relative w-64">
                            <select
                                placeholder="Filter By Region"
                                className="block appearance-none w-full bg-gray-700 text-white border border-gray-900 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Filter By Region</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="countries-container flex flex-1 flex-wrap">
                        {!isLoading && countriesList && countriesList.length !== 0 ? (
                            countriesList.map((countries, index) => {
                                return (
                                    <div className="countries  w-full md:w-1/2 xl:w-1/4 p-5" key={index}>
                                        <div className="bg-gray-700 rounded-lg shadow-lg ">
                                            <img
                                                src={countries.flag}
                                                className="w-full object-cover h-40 rounded-t-lg"
                                                alt={countries.name}
                                            />
                                            <div className="countries-content p-3 ">
                                                <h2 className="text-2xl mb-2 text-gray-100">{countries.name}</h2>
                                                <p className="flex items-center text-gray-300">
                                                    <MdPeople className="mr-2" /> {countries.population}
                                                </p>
                                                <p className="flex items-center text-gray-300">
                                                    <MdLocationCity className="mr-2" /> {countries.capital}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <CountryLoader isDark={isDark} />
                        )}
                    </div>
                </div>
            </main>
        );
    }
}
