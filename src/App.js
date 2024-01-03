import React from "react";
import Header from './Components/Header'
import Card from './Components/Card'

export default function App () {
    const data = [
        {
            id: 1,
            country: 'japan',
            name: 'Mount Fuji',
            date: '12 Jan 2021 - 24 Jan 2021',
            desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'fuji.jpg'
        },
        {
            id: 2,
            country: 'australia',
            name: 'Sydney Opera House',
            date: '12 Jan 2021 - 24 Jan 2021',
            desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'sydney.jpg'
        },
        {
            id: 3,
            country: 'norway',
            name: 'Geirangerfjord',
            date: '12 Jan 2021 - 24 Jan 2021',
            desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'norway.jpg'
        }
    ]
    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />
    })

    return (
        <>
            <Header />
            <div className="mt-5">
                {cards}
            </div>
        </>
    )
}