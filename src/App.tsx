import React, {useEffect, useState} from 'react';
import './App.css';
import {MainLayout} from "./view/MainLayout";
import OverlayWaitingPermission from "./utils/OverlayWaitingPermission";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GetWeather from "./services/WeatherService";


const queryClient = new QueryClient();

function App() {

    const [displayOverlayPermission, setDisplayOverlayPermission] = useState(true);


    // useEffect(() => {
        if ("geolocation" in navigator) {
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            };
            navigator.geolocation.getCurrentPosition(
                () => {
                    setDisplayOverlayPermission(false);
                    // GetGeolocation();
                },
                (err) => {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                },
                options
            );
        }

    // }, []);
    return (
        <>
            <header>
            </header>
            <body className="h-screen w-screen">
            <QueryClientProvider client={queryClient}>
                {displayOverlayPermission && <OverlayWaitingPermission/>}
                <MainLayout></MainLayout>
            </QueryClientProvider>
            </body>
        </>
    );


}


export default App;
