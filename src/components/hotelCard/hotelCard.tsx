import * as React from "react";
import "./hotelCard.scss";
interface IProps {
	hotel: any;
	i: number;
}
export default function HotelCard(props: IProps) {
	const { hotel, i } = props;
	const { name, price, city, available_on } = hotel;

	return (
		<div className="HotelCard">
			<img src={`https://picsum.photos/300/150?random=${i}`}></img>
			<span>{name}</span>
			<span>{price}</span>
			<span>{city}</span>
			<span>{available_on}</span>
		</div>
	);
}
