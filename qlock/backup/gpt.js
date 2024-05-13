function getSevenSegmentTime() {
  // Get the current time
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Pad hours, minutes, and seconds with leading zeros if necessary
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  // Convert hours, minutes, and seconds to seven segment ASCII art
  var sevenSegmentHours = convertToSevenSegment(hours);
  var sevenSegmentMinutes = convertToSevenSegment(minutes);
  var sevenSegmentSeconds = convertToSevenSegment(seconds);

  // Display the time in seven segment ASCII art
  console.log(sevenSegmentHours + ' .\n . \n' + sevenSegmentMinutes + ' .\n . \n' + sevenSegmentSeconds);
}

function convertToSevenSegment(time) {
  // Convert the time to an array of digits
  var digits = time.toString().split('');

  // Convert each digit to seven segment ASCII art
  var result = '';
  for (var i = 0; i < digits.length; i++) {
    result += convertDigitToSevenSegment(digits[i]);
  }

  return result;
}

function convertDigitToSevenSegment(digit) {
  // Define the ASCII art for each digit in seven segment format
  var digits = [    ' _ \n| |\n|_|\n',    '   \n  |\n  |\n',    ' _ \n _|\n|_ \n',    ' _ \n _|\n _|\n',    '   \n|_|\n  |\n',    ' _ \n|_ \n _|\n',    ' _ \n|_ \n|_|\n',    ' _ \n  |\n  |\n',    ' _ \n|_|\n|_|\n',    ' _ \n|_|\n _|\n'  ];

  // Return the ASCII art for the specified digit
  return digits[digit];
}

// Display the current time every second
setInterval(getSevenSegmentTime, 1000);