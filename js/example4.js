function MenuChoice(selection)
{
	document.getElementById("section1").style.visibility = "hidden";
	document.getElementById("section2").style.visibility = "hidden";
	document.getElementById("location").style.visibility = "hidden";
	
	switch (selection)
	{
		case "Section 1":
			document.getElementById("section1").style.visibility = "visible";
			break;
		case "Section 2":
			document.getElementById("section2").style.visibility = "visible";
			break;
		case "Geolocation":
			document.getElementById("location").style.visibility = "visible";
			break;
		case "None":
			// No menu item selected, so no section should be displayed
			break;
		default:
			alert("Please select a different menu option");
	}
}

// Calls the Geolocation function built in to the web browser
function Location()
{
	// Reference the Web Browser (navigator) geolocation service
	var geo = navigator.geolocation;
	
	// Tests to see if geolocation service is available
	if(geo)
	{
		// If the geolocation service is available it gets the position
		// and calls a function to display it
		geo.getCurrentPosition(showPosition);
	} else {
		// If the geolocation service is not available it displays
		// a message
		alert("Geolocation is not supported");
	}
}

// Function receives the geolocation data and displays it
function showPosition(position)
{
	var latitude = position.coords.latitude; // Retrieves latitude data
	var longitude = position.coords.longitude; // Retrieves longitude data
	document.getElementById("latitude").innerHTML = latitude;
	document.getElementById("longitude").innerHTML = longitude;
}






