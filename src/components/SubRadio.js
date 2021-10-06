import "./SubRadio.css";
import { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

function SubRadio() {
  const [value, setValue] = useState(null);

  const selectRadioValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormGroup>
        <h5>Subcomponent!</h5>

        <FormGroup className="formGroupRadios2">
          <FormGroup className="radioList">
            <Input id="radio1" type="radio" value="text" checked={value == "text" ? true : false} onChange={selectRadioValue} />
            <Label for="radio1"></Label>
            <Input type="text" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup className="radioList date">
            <Input id="radio2" type="radio" value="date" checked={value == "date" ? true : false} onChange={selectRadioValue} />

            <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
          </FormGroup>
          <FormGroup className="radioList unclickable">
            <Input id="radio3" type="radio" onChange={selectRadioValue} disabled />
            <Input type="text" name="text" id="exampleText" disabled />
          </FormGroup>
        </FormGroup>
      </FormGroup>

      <br />
      <p>
        Selected Radio : <b>{value}</b>
      </p>
    </>
  );
}

export default SubRadio;
