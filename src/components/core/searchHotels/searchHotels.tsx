import { DatePicker } from "@mui/lab";
import { Button } from "@mui/material";
import { log } from "console";
import { useState } from "react";
import { HotelsService } from "../../../services/hotels.service";
import DateInput from "../../datePicker/dateInput";
import "./searchHotels.scss";
const SearchHotels = () => {
	const [from, setFrom] = useState<Date | null>(new Date());
	const [to, setTo] = useState<Date | null>(new Date());
	const hotelsService : any = new  HotelsService;
	const onFromChange = (val: Date) => {
		setFrom(val);
		console.log("from ", val);
	};
	const onToChange = (val: Date) => {
		setTo(val);
		console.log("to", val);
	};
	const getHotels = () => {
		hotelsService.getHotels( null, []).then((res: any) => {
			
		});
	};
	return (
		<div className="SearchHotels">
			<DateInput label="from" value={from} onChange={onFromChange} />
			<DateInput label="to" value={to} onChange={onToChange} />
			<Button className="searchBtn" onClick={getHotels} variant="outlined">
				Search
			</Button>
		</div>
	);
};

export default SearchHotels;
