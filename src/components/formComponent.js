import React from "react";
import { FormGroup, FieldGroup, Radio, Checkbox, ControlLabel, FormControl, HelpBlock, Button } from "react-bootstrap";

class FormComponent extends React.Component {
	render() {
		function FieldGroup({ id, label, help, ...props }) {
			return (
				<FormGroup controlId={id}>
					<ControlLabel>{label}</ControlLabel>
					<FormControl {...props} />
					{help && <HelpBlock>{help}</HelpBlock>}
				</FormGroup>
			);
		}
		return (
			<div className="container">
				<div className="well text-center">React Redux Form Example</div>
				<br />
				<form>
					<FieldGroup
						id="formControlsText"
						type="text"
						label="Text"
						placeholder="Enter text"
					/>
					<FieldGroup
						id="formControlsEmail"
						type="email"
						label="Email address"
						placeholder="Enter email"
					/>
					<FieldGroup
						id="formControlsPassword"
						label="Password"
						type="password"
					/>
					<FieldGroup
						id="formControlsFile"
						type="file"
						label="File"
						help="Example block-level help text here."
					/>

					<Checkbox checked readOnly>
						Checkbox
					</Checkbox>
					<Radio checked readOnly>
						Radio
					</Radio>

					<FormGroup>
						<Checkbox inline>
							1
						</Checkbox>
						{" "}
						<Checkbox inline>
							2
						</Checkbox>
						{" "}
						<Checkbox inline>
							3
						</Checkbox>
					</FormGroup>
					<FormGroup>
						<Radio name="radioGroup" inline>
							1
						</Radio>
						{" "}
						<Radio name="radioGroup" inline>
							2
						</Radio>
						{" "}
						<Radio name="radioGroup" inline>
							3
						</Radio>
					</FormGroup>

					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Select</ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option value="select">select</option>
							<option value="other">sdfsdf</option>
							<option value="1">select adsf</option>
							<option value="2">select fasd</option>
							<option value="3">select fdsafasdf</option>
						</FormControl>
					</FormGroup>
					<FormGroup controlId="formControlsSelectMultiple">
						<ControlLabel>Multiple select</ControlLabel>
						<FormControl componentClass="select" multiple>
							<option value="select">select (multiple)</option>
							<option value="other">select something</option>
							<option value="1">select adsf</option>
							<option value="2">select fasd</option>
							<option value="3">select fdsafasdf</option>

						</FormControl>
					</FormGroup>

					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Textarea</ControlLabel>
						<FormControl componentClass="textarea" placeholder="textarea" />
					</FormGroup>

					<FormGroup>
						<ControlLabel>Static text</ControlLabel>
						<FormControl.Static>
							email@example.com
						</FormControl.Static>
					</FormGroup>

					<Button type="submit">
						Submit
					</Button>
				</form>
			</div>
		);
	}
}
export default FormComponent;
