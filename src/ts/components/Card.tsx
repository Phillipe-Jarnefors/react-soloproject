import React from "react";
import Pinpoint from "../../assets/pinpoint.png"

type TypeProps = {
		id: number,
        title: string,
        location: string,
        googleMapsUrl: string,
        startDate: string,
        endDate: string,
        description: string,
        imageUrl: string
}

function Card(props: TypeProps) {
	let upperCase: string = props.location.toUpperCase()
	return(
		<main className="cards">
			<div className="card--image-container">
				<img src={props.imageUrl} className="card--image"/>
			</div>
			<section className="card-section">
				<p className="section--country"><img src={Pinpoint}/> {upperCase} 
					<a href={props.googleMapsUrl} className="section--link">View on Google Maps</a>
				</p>
				<h1 className="section--title">{props.title}</h1>
				<h6 className="section--date">{props.startDate} - {props.endDate}</h6>
				<p className="section--description">{props.description}</p>
				<hr />
			</section>
		</main>
	)
}

export default Card