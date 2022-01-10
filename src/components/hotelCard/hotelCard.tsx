import * as React from "react";
import "./hotelCard.scss";
interface IProps {
	hotel: any;
	i: number;
	nights: number;
}
export default function HotelCard(props: IProps) {
	const { hotel, i, nights } = props;
	const { name, price, city, available_on } = hotel;

	return (
		<div className="HotelCard">
			<img src={`https://picsum.photos/300/150?random=${i}`}></img>
			<span className="name">{name}</span>
			<span className="city">{city}</span>
			<span className="price">{price * nights} AED</span>
		</div>
	);
}
