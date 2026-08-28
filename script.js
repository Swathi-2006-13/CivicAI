function submitReport(event) {

    event.preventDefault();

    alert(
        "✅ Report submitted successfully!\n\n" +
        "CivicAI is analyzing your image..."
    );

    window.location.href = "analysis.html";
}


function getLocation() {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported by your browser.");

        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude.toFixed(5);

            const longitude =
                position.coords.longitude.toFixed(5);

            document.getElementById("location").value =
                "Latitude: " +
                latitude +
                ", Longitude: " +
                longitude;

        },

        function() {

            alert(
                "Unable to get your location. " +
                "Please enter it manually."
            );

        }

    );
}


function acceptResolution() {

    document.getElementById("message").innerHTML =
        "✅ Thank you! The resolution has been verified successfully.";

}


function rejectResolution() {

    document.getElementById("message").innerHTML =
        "❌ Resolution rejected. The issue will be sent for further review.";

}


function unableToVerify() {

    document.getElementById("message").innerHTML =
        "ℹ️ Verification marked as unavailable. More evidence is required.";

}


/* Character counter */

const description =
    document.getElementById("description");

if (description) {

    description.addEventListener("input", function() {

        const counter =
            document.querySelector(".counter");

        counter.textContent =
            this.value.length + "/500";

    });

}
