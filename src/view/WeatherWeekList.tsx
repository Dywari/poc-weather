import {Avatar, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField} from "@mui/material";
import {Abc, BeachAccess, Place, WorkHistory} from "@mui/icons-material";
import {Subject} from "rxjs";
import City from "../entities/City";
import { useEffect, useState} from "react";
interface WeatherWeekListProps {
    city: Subject<City>;
}

export function WeatherWeekList({city}:WeatherWeekListProps){
    const [displayCity, setDisplayCity] = useState<City>(City.emptyCity());
    useEffect(() => {
        const subscription = city.asObservable().subscribe((v: City) => {
            setDisplayCity(v);
            console.log(displayCity);
        });

        // Cleanup function to unsubscribe
        return () => {
            subscription.unsubscribe();
        };
    }, [city, displayCity]);
    return (<>
        <div className='h-full w-full'>
            <div className={'p-[5px]'}>
                <TextField className={'w-full'}
                           InputProps={{
                               readOnly: true,
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <Place/>
                                   </InputAdornment>
                               ),
                           }}
                           value={displayCity?.name}
                           variant="outlined"/>
            </div>


            <List sx={{bgcolor: 'background.paper'}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Abc/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkHistory/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccess/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                </ListItem>
            </List>
        </div>
    </>);
}