import {Component} from "react";

export function getUrlForIcon(code: string) {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
}

interface IconDisplayProps {
    iconCode: string;
    size?: number;
}

class IconDisplay extends Component<IconDisplayProps> {
    static defaultProps = {
        width: 100,
        height: 100,
    };
    render() {
        const {iconCode, size} = this.props;
        const iconUrl = getUrlForIcon(iconCode);

        return (
            <img src={iconUrl} alt={`Icon for ${iconCode}`} width={size} height={size}/>
        );
    }
}

export default IconDisplay;