document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

 
    let feedbackData = {
        name: name,
        email: email,
        feedback: feedback
    };
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));


    window.location.href = "feedback.html";
});
