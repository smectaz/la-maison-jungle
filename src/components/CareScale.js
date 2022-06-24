import Sun from "../assets/sun.svg"
import Water from "../assets/water.svg"

function CareScale({scaleValue, careType}) {
	//const {scaleValue, careType} = props
	// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
	// const scaleValue = props.scaleValue et
	// const careType = props.careType
	const range = [1, 2, 3]
	const scaleType = 
		careType === 'light' ? (
				<img src={Sun} alt="sun-icon"/>
		) : (
			<img src={Water} alt="water-icon"/>
		)
	
	
	return (
		<div>
            {range.map((rangeElem) => 
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				 ) : null
            )}
        </div>
	)
}

export default CareScale;
