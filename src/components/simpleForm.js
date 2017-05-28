import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SampleForm extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? "has-danger" : ""}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control" type="text" {...field.input} />
				<div className="text-help">
					{touched ? error : ""}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="container">
				<br />
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						label="Element 1"
						name="elm1"
						component={this.renderField}
					/>
					<Field
						label="Element 2"
						name="elm2"
						component={this.renderField}
					/>
					<Field
						label="Element 3"
						name="elm3"
						component={this.renderField}
					/>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	// Validate the inputs from 'values'
	if (!values.elm1) {
		errors.elm1 = "This field is required";
	}
	if (!values.elm2) {
		errors.elm2 = "This field is required";
	}
	if (!values.elm3) {
		errors.elm3 = "This field is required";
	}

	return errors;
}

export default reduxForm({
	validate,
	form: "simpleFormElement"
})(SampleForm);
