import {Component} from "react";
import {Backdrop, CircularProgress} from "@mui/material";

interface OverlayWaitingPermissionProps {
}

class OverlayWaitingPermission extends Component<OverlayWaitingPermissionProps> {

    render() {
        return (

                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={true}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <span>You must accept the geolocation request to continue</span>
                        <CircularProgress className={'mt-[10px]'} color="inherit"/>
                    </div>

                </Backdrop>

        );
    }
}

export default OverlayWaitingPermission;