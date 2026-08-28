function submitReport(event) {

    event.preventDefault();

    alert(
        "✅ Report submitted successfully!\n\n" +
        "AI is analyzing your report..."
    );

    window.location.href = "analysis.html";
}


function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                document.getElementById("location").value =
                    "Latitude: " +
                    position.coords.latitude.toFixed(5) +
                    ", Longitude: " +
                    position.coords.longitude.toFixed(5);

            },

            function() {

                alert("Unable to get your location.");

            }

        );

    } else {

        alert("Geolocation is not supported.");

    }
}


function acceptResolution() {

    document.getElementById("message").innerHTML =
        "✅ Thank you! The resolution has been verified by the citizen.";

}


function rejectResolution() {

    document.getElementById("message").innerHTML =
        "❌ Resolution rejected. The issue will be sent for further review.";

}
