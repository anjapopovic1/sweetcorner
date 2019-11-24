function weightConverter(valNum) {
    window.document.getElementById("outputPounds").innerHTML=(valNum*0.0022).toFixed(2);
    window.document.getElementById("outputCups").innerHTML=(valNum/236).toFixed(2);
    window.document.getElementById("outputOunces").innerHTML=(valNum*0.035).toFixed(2);
    window.document.getElementById("outputPints").innerHTML=(valNum/473).toFixed(2);
  }

