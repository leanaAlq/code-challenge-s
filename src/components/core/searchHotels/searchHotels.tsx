import { DatePicker } from "@mui/lab";
import { Button, Slider } from "@mui/material";
import { log } from "console";
import { useState } from "react";
import { HotelsService } from "../../../services/hotels.service";
import DateInput from "../../datePicker/dateInput";
import HotelCard from "../../hotelCard/hotelCard";
import "./searchHotels.scss";
import React from "react";
import SearchInput from "../../searchInput/searchInput";
const SearchHotels = () => {
	const [from, setFrom] = useState<Date | null>(new Date());
	const [to, setTo] = useState<Date | null>(new Date());
	const [hotels, setHotels]: any[] = useState([]);
	const [ShowHotels, setShowHotels] = useState(false);
	const [diff, setDiff] = useState(0);
	const hotelsService: any = new HotelsService();
	const onFromChange = (val: Date) => {
		setFrom(val);
		console.log("from ", val);
	};

	const onToChange = (val: Date) => {
		setTo(val);
		console.log("to", val);
	};

	const setDifference = () => {
		// @ts-ignore
		const diffInMs = new Date(to) - new Date(from);
		const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
		// @ts-ignore
		setDiff(Math.round(diffInDays));
	};
	const getHotels = () => {
		hotelsService
			.getHotels(null, [])
			.then((res: any) => {
				setDifference();
				setHotels(res);
				setShowHotels(true);
			})
			.catch(() => {
				setShowHotels(true);
			});
	};

	const filterHotels = (e: any) => {
		console.log(e.target.value);
		let list: any[] = [...hotels];
		list = list.filter((hotel: any) => hotel.name.includes(e.target.value));
		console.log(list);

		setHotels(list);
	};

	return ShowHotels ? (
		<div className="hotelsList">
			{hotels && !!hotels.length ? (
				<div className="hotels">
					<div className="actions">
						<SearchInput onChange={filterHotels} />
						<div className="price-range">
							<span>Price Range</span>
							<Slider
								size="small"
								defaultValue={1000}
								aria-label="Small"
								valueLabelDisplay="auto"
								min={100}
								max={1000}
							/>
						</div>
					</div>
					<div className="list-container">
						<div className="header">
							<span className="label">Total Nights: {diff}</span>
							<div>
								<span>sort by name</span>
								<span>sort by price</span>
							</div>
						</div>
						<div className="hotelsContainer">
							{hotels.map((hotel: any, i: number) => (
								<HotelCard hotel={hotel} i={i} />
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="not-found">No results Found!</div>
			)}
		</div>
	) : (
		<div className="SearchHotels">
			<div className="background"></div>
			<DateInput label="from" value={from} onChange={onFromChange} />
			<DateInput label="to" value={to} onChange={onToChange} />
			<Button className="searchBtn" onClick={getHotels} variant="outlined">
				Search
			</Button>
		</div>
	);
};

export default SearchHotels;
