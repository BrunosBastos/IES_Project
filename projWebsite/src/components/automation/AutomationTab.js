import React from "react";
import { Card, CardBody, FormCheckbox, Button, Row, Col } from "shards-react";

import DeviceConfigs from "./DeviceConfigs";
import FormDivisionConfig from "./FormDivisionConfig";

import DivisionConfigService from "../../services/DivisionConfigService";
import DeviceService from "../../services/DeviceService";
import EditDeviceConfigs from "./EditDeviceConfigs";


class AutomationTab extends React.Component {

    constructor(props) {
        super(props);
        this.division = props.division;
        this.state = {
            edit: false,
            loading1: 0,
            loading2: 0,
            divisionConfigs: [],
            devices: [],
        }
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    componentDidMount() {
        this.setState({ loading1: 1, loading2: 1 });
        
        DivisionConfigService.getConfigurations(this.division.id)
			.then(data => {
				this.setState({ 
					divisionConfigs: data,
					loading1: 0
				});
			})
			.catch(error => {
				console.log(error) ;
				this.setState({ loading1: 2 })
			});
        
		DeviceService.getDevices(this.division.id)
			.then(data => {
				this.setState({ 
					devices: data,
					loading2: 0
				});
			})
			.catch(error => {
				console.log(error) ;
				this.setState({ loading2: 2 })
            });
    }
    
    toggleEdit() {
        this.setState({ edit: !this.state.edit });
    }
    
    render() {
        return !this.state.edit ? (
            <div>
                <Button className="float-right mx-2 mb-3">Set Default</Button>
                <Button className="float-right mx-2 mb-3">Set Economics</Button>
                <Button className="float-right mx-2 mb-3" onClick={this.toggleEdit}>Custom Edit</Button>
                <div className="clearfix"></div>
                <Row>
                    {this.state.divisionConfigs.map((config, index) => (
                        <Col key={index} lg="6">
                            <Card className="">
                                <CardBody>
                                    <h3>{config.type.name}</h3>
                                    <FormDivisionConfig config={config} />
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {this.state.devices.map((device, index) => (
                        <Col key={index} lg="4" className="py-3">
                            <Card className="">
                                <CardBody>
                                    <h4>{device.name}</h4>
                                    <Row>
                                        <Col lg="7">
                                            <FormCheckbox toggle checked={device.state ? true : false}> Off/On </FormCheckbox>
                                        </Col>
                                        <Col lg="5">
                                            <h6 style={{textAlign:"right"}}>{device.type.name}</h6>
                                        </Col>
                                    </Row>    
                                    <DeviceConfigs device={device} />
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        ) : (
            <div>
                <Button className="float-right mx-2 mb-3" theme="danger" onClick={this.toggleEdit}>Close</Button>
                <div className="clearfix"></div>
                <Row>
                    {this.state.devices.map((device, index) => (
                        <Col key={index} lg="12" className="py-3">
                            <Card className="">
                                <CardBody>
                                    <Row>
                                        <Col sm="6" md="7">
                                            <h3>
                                                {device.name}
                                            </h3>
                                        </Col>
                                        <Col sm="6" md="5">
                                            <h6 style={{textAlign:"right"}}>{device.type.name}</h6>
                                        </Col>
                                    </Row>
                                    <EditDeviceConfigs device={device} />
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default AutomationTab;