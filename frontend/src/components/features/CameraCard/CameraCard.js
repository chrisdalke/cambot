import {Card} from '@blueprintjs/core';
import CardHeading from '../../ui/CardHeading/CardHeading';
import './CameraCard.scss';

function CameraCard() {
    return (<Card>
        <CardHeading title="Camera Card" />
        <div className="CameraCard">
            <div className="CameraCard__noSignal">
                No Signal
            </div>
            <img src={`http://${window.location.hostname}:8081/`} />
        </div>
    </Card>)
}

export default CameraCard;
