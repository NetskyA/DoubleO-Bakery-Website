import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import { Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconHouse from "../Image/icon/house.png";
import iconOutlet from "../Image/icon/logo.png";

// Define the icon for the marker
const ImgLocation = new L.Icon({
    iconUrl: iconHouse,
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const ImgOutlet = new L.Icon({
    iconUrl: iconOutlet,
    iconSize: [75, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function haversineDistance(coords1, coords2) {
    function toRad(x) {
        return (x * Math.PI) / 180;
    }

    const R = 6371;
    const dLat = toRad(coords2.lat - coords1.lat);
    const dLon = toRad(coords2.lng - coords1.lng);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(coords1.lat)) *
        Math.cos(toRad(coords2.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

const nearbyOutlets = [
    { id: 1, name: 'Double O Kebraon', lat: -7.333150072744697, lng: 112.70105211569975, address: "Jl. Kebraon Indah Permai, Surabaya", phone: "+62 82331423600" },
    { id: 2, name: 'Double O Driyorejo', lat: -7.335373583081282, lng: 112.64208555756218, address: "Jl. Raya Driyorejo, Gresik", phone: "+62 81393552600" },
    { id: 3, name: 'Double O Mulyosari', lat: -7.263903982405329, lng: 112.79578205510391, address: "Jl. Mulyosari, Surabaya", phone: "+62 82331423900" },
    { id: 4, name: 'Double O Magetan', lat: -7.651933372921325, lng: 111.3223966407922, address: "Jl. Raya Magetan", phone: "+62 82226674600" },
    { id: 5, name: 'Double O Jember', lat: -8.17334539269335, lng: 113.71996779469389, address: "Jl. Kalimantan, Jember", phone: "+62 000-0000-0000" },
];

export default function MapView({ setLocationUser, setOutlet }) {
    const [userLocation, setUserLocation] = useState(null);
    const [location, setLocation] = useState(null); // Fixed useState definition
    const [distances, setDistances] = useState([]);
    const [error] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error("Error getting location: ", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setUserLocation(location);

                    const calculatedDistances = nearbyOutlets.map((outlet) => ({
                        name: outlet.name,
                        address: outlet.address, // Added address
                        phone: outlet.phone, // Added phone
                        distance: haversineDistance(location, { lat: outlet.lat, lng: outlet.lng }).toFixed(2),
                    }));
                    setDistances(calculatedDistances);
                },
                (error) => {
                    console.error(error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                }
            );
        }
    }, []);

    const [newOutlet, setNewOutlet] = useState({
        name: '',
        lat: '',
        lng: ''
    });

    // Tangani perubahan input
    const handleInputChange = (e) => {
        setNewOutlet({ ...newOutlet, [e.target.name]: e.target.value });
    };

    // Tangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newOutlet.name || !newOutlet.lat || !newOutlet.lng) {
            // Tambahkan validasi sesuai kebutuhan
            alert('Please fill all the fields');
            return;
        }
        const newOutletWithId = { ...newOutlet, id: Date.now() }; // tambahkan unique id, misal menggunakan timestamp
        setOutlet((prevOutlets) => [...prevOutlets, newOutletWithId]);
        // Reset input form
        setNewOutlet({
            name: '',
            lat: '',
            lng: ''
        });
    };

    setLocationUser(distances);
    setOutlet(nearbyOutlets);
    return (
        <>
            <MapContainer className="rounded-2xl" center={userLocation || { lat: -7.333150072744697, lng: 112.70105211569975 }} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {userLocation && (
                    <>
                        <Marker position={userLocation} icon={ImgLocation}>
                            <Popup>
                                <p>Lokasi Anda</p>
                                <a href={`https://www.google.com/maps/search/?api=1&query=${userLocation.lat},${userLocation.lng}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                                    Buka Google Maps
                                </a>
                            </Popup>
                        </Marker>
                        <Circle
                            center={userLocation}
                            radius={1500} // radius in meters
                            fillOpacity={0.1}
                            color="#f97316"
                        />
                    </>
                )}
                {nearbyOutlets.map((outlet) => (
                    <Marker key={outlet.id} position={[outlet.lat, outlet.lng]} icon={ImgOutlet}>
                        <Popup>
                            <div className="p-2">
                                <h3 className="font-bold">{outlet.name}</h3>
                                <p>{outlet.address}</p> {/* Display address */}
                                <p>Phone: {outlet.phone}</p> {/* Display phone */}
                                <a href={`https://www.google.com/maps/search/?api=1&query=${outlet.lat},${outlet.lng}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                                    Buka Google Maps
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </>
    );
}
