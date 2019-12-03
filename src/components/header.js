import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <header className="w-full bg-gray-700 h-16 shadow">
                <div className="container mx-auto">
                    <div className="flex h-16 justify-between">
                        <div className="logo text-white h-full flex items-center text-xl uppercase ">
                            Where is the World?
                        </div>
                        <div className="theme-switcher w-1/3 h-full bg-red-100 h-full "></div>
                    </div>
                </div>
            </header>
        );
    }
}
