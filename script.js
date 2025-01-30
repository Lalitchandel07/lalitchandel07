document.getElementById("btn").addEventListener("click", () => {
    // equal to arrow
    const fact = document.getElementById("fun-fact-text");
  
    //   triple equal to
    if (fact.style.display === "none") {
      fact.style.display = "block";
    } else {
      fact.style.display = "none";
    }
  });