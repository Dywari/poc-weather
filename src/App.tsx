import React, {useEffect, useState} from 'react';
import './App.css';
import {MainLayout} from "./view/MainLayout";
import OverlayWaitingPermission from "./utils/OverlayWaitingPermission";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    const [displayOverlayPermission, setDisplayOverlayPermission] = useState(true);

    useEffect(() => {
        if ("geolocation" in navigator) {
            const options = {
                enableHighAccuracy: true,
                maximumAge: 10000,
            };
            navigator.geolocation.getCurrentPosition(
                () => {
                    setDisplayOverlayPermission(false);
                },
                (err) => {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                },
                options
            );
        }

    }, []);
    return (
            <QueryClientProvider client={queryClient}>
                {displayOverlayPermission && <OverlayWaitingPermission/>}
                <MainLayout></MainLayout>
            </QueryClientProvider>
    );


}


export default App;
