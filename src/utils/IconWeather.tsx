import {Component} from "react";

export function getUrlForIcon(code: string) {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
}

interface IconDisplayProps {
    iconCode: string | null;
    size?: number;
}

class IconDisplay extends Component<IconDisplayProps> {
    static defaultProps = {
        width: 100,
        height: 100,
    };
    render() {
        const {iconCode, size} = this.props;
        if (iconCode) {
            const iconUrl = getUrlForIcon(iconCode);
            return (
                <object data={iconUrl}  width={size} height={size}/>
            );
        }

    }
}

export default IconDisplay;