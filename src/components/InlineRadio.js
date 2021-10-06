import "./InlineRadio.css";
import { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

function InlineRadio() {
  const [value, setValue] = useState(null);

  const selectRadioValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormGroup>
        <h5>Name</h5>

        <FormGroup className="formGroupRadios">
          <FormGroup>
            <Input id="radio1" type="radio" value="1" checked={value == 1 ? true : false} onChange={selectRadioValue} />
            <Label for="radio1">Radio 1</Label>
          </FormGroup>

          <FormGroup>
            <Input id="radio2" type="radio" value="2" checked={value == 2 ? true : false} onChange={selectRadioValue} />
            <Label for="radio2">Radio 2</Label>
          </FormGroup>

          <FormGroup>
            <Input id="radio3" type="radio" value="3" checked={value == 3 ? true : false} onChange={selectRadioValue} />
            <Label for="radio3">Radio 3</Label>
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

export default InlineRadio;
