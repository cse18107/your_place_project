import React from 'react';
import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://i.ibb.co/pdtGrVX/christopher-czermak-l8v-KWxh-Vuts-unsplash-1.jpg',
        address:"New York, NY 10001, USA",
        location:{
            lat:"40.748484",
            lng:"-73.98583"
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://i.ibb.co/pdtGrVX/christopher-czermak-l8v-KWxh-Vuts-unsplash-1.jpg',
        address:"New York, NY 10001, USA",
        location:{
            lat:"40.748484",
            lng:"-73.98583"
        },
        creator:'u2'
    }
]


const UserPlaces =()=> {

    return <PlaceList items={DUMMY_PLACES}/>;

};

export default UserPlaces
