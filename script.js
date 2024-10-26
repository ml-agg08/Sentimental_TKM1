function calculateLove() {
    
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 === "" || name2 === "") {
        document.getElementById('result').innerText = "Please enter both names!";
        return;
    }

    // Simple calculation logic for fun
    const loveScore = Math.floor(Math.random() * 100) + 1;

    // Using string concatenation instead of template literals
    let message = name1 + " and " + name2 + "'s love score is " + loveScore + "%";

    if (loveScore > 80) {
        message += " ❤️ You're a perfect match!";
    } else if (loveScore > 50) {
        message += " 😊 There's potential!";
    } else {
        message += " 😅 It might be tough, but don't give up!";
    }

    document.getElementById('result').innerText = message;
}
