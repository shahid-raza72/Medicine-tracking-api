import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "../App.css";

import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap'
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import FormContainer from "./FormContainer";

function Input() {
  const [name,setMedicineName] = useState("")
  const [medicinetype, setMedicineType] = useState("")
  const [quantity, setQuantity] = useState("")
  const [ time, setTime]=useState("")
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDate = (date) => {
    setStartDate(date);
    setEndDate(null);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

 

  return (
      <>
      <FormContainer>
      
    
       
    <Form>
    <div>
    <label>Medicne Name</label>
    <Form.Group controlId='name'>
            
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setMedicineName(e.target.value)}
            ></Form.Control>
      </Form.Group>
      </div>
      <div>
      <label>Medicne Type</label>
      <Form.Group controlId='medicinetype'>
            
            <Form.Control
              type='medicinetype'
              placeholder='Enter medicine type'
              value={medicinetype}
              onChange={(e) => setMedicineType(e.target.value)}
            ></Form.Control>
      </Form.Group>
      </div>
    <div>
    <label>Quantity</label>
    <Form.Group controlId='quantity'>
            
            <Form.Control
              type='quantiy'
              placeholder='Enter quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></Form.Control>
      </Form.Group>
    </div>
    <div className='control-pane'>
            <div className='control-section'>
                <div className='datetimepicker-control-section'>
      
      <TimePickerComponent placeholder="select time"
              value={time}
              onChange ={(e) => setTime(e.target.value)}
          />
      
      </div>
      </div>
      </div>
      
    <div>
        <label>Starting-Date</label>
        <Form.Group>
        <DatePicker
          selected={startDate}
          minDate={new Date()}
          onChange={handleStartDate}
        />
        </Form.Group>
      </div>
      
      <div>
        <label>End-Date</label>
        <Form.Group>
        <DatePicker
          selected={endDate}
          minDate={startDate}
          onChange={handleEndDate}
        />
        </Form.Group>
      </div>
    
    {startDate && endDate && (
      <div className="summary">
        <p>
          You have Schedule The Medicine From {moment(startDate).format("LL")} to{" "}
          {moment(endDate).format("LL")}.
        </p>
      </div>
    )}
    <Button type='submit' variant='primary'>
             + Add New 
    </Button>
    </Form>  
    
    </FormContainer>
    
    </>
  );
}

export default Input;