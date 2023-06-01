import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import "./alert.css"

function AlertComp(props) {
    if(props.isVisible) {
        return (
            <div className="alert">
                <Alert className="top" variant="success" style={{ width: "42rem" }}>
                    <Alert.Heading>
                        Mensagem enviada
                    </Alert.Heading>
                </Alert>
            </div>
        )
    } else {
        return <></>
    }
    
}

export default AlertComp;  