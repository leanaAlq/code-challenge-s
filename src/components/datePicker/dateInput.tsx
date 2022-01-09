import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./dateInput.scss";
interface IProps {
	label: String;
	value: Date | null;
	onChange: any;
}
export default function DateInput(props: IProps) {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				disablePast
				label={props.label}
				openTo="month"
				views={["year", "month", "day"]}
				value={props.value}
				onChange={(val) => props.onChange(val)}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}
