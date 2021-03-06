import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  Col,
} from "shards-react";
import Select, { components } from 'react-select'
import { FaLightbulb, FaTemperatureHigh, FaPlayCircle, FaCoffee, FaWifi, FaWind, FaTv } from "react-icons/fa";
import { IoWater } from "react-icons/io5";


const { Option } = components
const CustomSelectOption = props => (
  <Option {...props} selectProps>
    {props.data.icon}
    {props.data.label}
  </Option>
)

const CustomSelectValue = props => (
  <div>
    {props.data.icon}
    {props.data.label}
  </div>
)

const options = [
  { value: 'ligth', icon: <FaLightbulb /> },
  { value: 'water', icon: <IoWater /> },
  { value: 'temperature', icon: <FaTemperatureHigh /> },
  { value: 'music', icon: <FaPlayCircle /> },
  { value: 'coffe', icon: <FaCoffee /> },
  { value: 'fan', icon: <FaWind /> },
  { value: 'wifi', icon: <FaWifi /> },
  { value: 'tv', icon: <FaTv /> },
]


const FormNewDevice = ({ title }) => (
        <Card small className="h-100 py-3 col-sm-8">

            <CardHeader className="border-bottom">
            <h5 className="m-0">{title}</h5>
            </CardHeader>

            <CardBody className="d-flex flex-column">
            <Form className="quick-post-form">

                <FormGroup className="row">
                    <Col md="12" lg="5">
                        <label htmlFor="deName">Name</label>    
                        <FormInput placeholder="" if="deName"/>
                    </Col>
                    <Col sm="7" md="8" lg="4">
                        <label htmlFor="deType">Type</label>
                        <FormSelect id="deType">
                            <option value="Light">Light</option>
                            <option value="Temperature">Temperature</option>
                            <option value="Humidity">Humidity</option>
                            <option value="Eletronic">Eletronic</option>
                        </FormSelect>
                    </Col>
                    <Col sm="5" md="4" lg="3">
                        <label htmlFor="deIcon">Icon</label>
                        <Select options={options} id="deIcon" placeholder="" defaultValue={options[0]}
                        components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }} />
                    </Col>
                </FormGroup>

                <FormGroup className="row">
                    <Col sm="12">
                        <label htmlFor="deNotes">Notes</label>
                        <FormTextarea placeholder="" id="deNotes"/>
                    </Col>
                </FormGroup>

                <FormGroup className="mb-0 d-flex justify-content-center mt-3">
                    <Button theme="accent" type="submit" className="bg-primary text-white text-center rounded"
                     style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", fontSize: "16px", width:  "150px", height:  "40px" }}>
                        Add Device
                    </Button>
                </FormGroup>

            </Form>
            </CardBody>
        </Card>
);

FormNewDevice.propTypes = {
    title: PropTypes.string
};

FormNewDevice.defaultProps = {
title: "New Device"
};

export default FormNewDevice;