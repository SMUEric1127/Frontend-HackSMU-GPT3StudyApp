export async function fetchCartesiData() {
  // Turn this off to save EC2 cost, will use static data for now
  // try {
  //   const url = "http://34.238.254.89:3000/notices";
  //   const response = await fetch(url)

  //   if (response.status === 200) {
  //     const jsonResponse = await response.json();
  //     // console.log(jsonResponse);
  //     return jsonResponse
  //   } else {
  //     console.error('Error:', response.status);
  //   }
  // } catch (e) {
  //     console.log(e)
  // }
  return [
    {
      echo: {
        title: "Computer Science Fundamentals Quiz",
        questions: [
          {
            question: "What does HTML stand for?",
            answer: "Hypertext Markup Language",
          },
          {
            question:
              "Which programming language is often used for web development and is known for its flexibility and simplicity?",
            answer: "JavaScript",
          },
          {
            question: "What is the purpose of a firewall in computer security?",
            answer:
              "To monitor and control incoming and outgoing network traffic",
          },
          {
            question: "What does CPU stand for in computing?",
            answer: "Central Processing Unit",
          },
          {
            question:
              "Which data structure follows the Last-In-First-Out (LIFO) principle?",
            answer: "Stack",
          },
          {
            question: "What is the primary function of an operating system?",
            answer:
              "To manage hardware and provide services for software applications",
          },
          {
            question: "Which company developed the Windows operating system?",
            answer: "Microsoft",
          },
          {
            question: "What is the binary number system based on?",
            answer: "Base-2",
          },
          {
            question: "What is a DNS server used for in networking?",
            answer: "To translate domain names into IP addresses",
          },
          {
            question:
              "What is the concept of 'inheritance' in object-oriented programming?",
            answer:
              "It allows a class to inherit properties and methods from another class.",
          },
        ],
      },
    },
    {
      echo: {
        title: "World History Quiz - Ancient Civilizations",
        questions: [
          {
            question:
              "Which ancient civilization built the Great Pyramids of Giza?",
            answer: "Ancient Egyptians",
          },
          {
            question: "Who was the first Emperor of the Roman Empire?",
            answer: "Augustus Caesar",
          },
          {
            question:
              "Which famous explorer is known for his voyages to the New World in the late 15th century?",
            answer: "Christopher Columbus",
          },
          {
            question:
              "During which period did the Renaissance flourish in Europe?",
            answer: "14th to 17th centuries",
          },
          {
            question:
              "Who is credited with the invention of the printing press?",
            answer: "Johannes Gutenberg",
          },
          {
            question: "What event marked the beginning of World War I?",
            answer:
              "Assassination of Archduke Franz Ferdinand of Austria-Hungary",
          },
          {
            question:
              "In which year did the United States declare its independence from Great Britain?",
            answer: "1776",
          },
          {
            question:
              "Who was the leader of the Indian independence movement against British rule?",
            answer: "Mahatma Gandhi",
          },
          {
            question:
              "What was the significance of the Silk Road in ancient trade?",
            answer:
              "It facilitated cultural exchange and trade between East and West.",
          },
          {
            question:
              "Which civilization is known for developing the first known system of writing, known as cuneiform?",
            answer: "Sumerians",
          },
        ],
      },
    },
    {
      echo: {
        title: "Basic Math Quiz",
        questions: [
          {
            question: "What is the result of 5 + 7?",
            answer: "12",
          },
          {
            question: "What is the product of 3 * 4?",
            answer: "12",
          },
          {
            question:
              "If you have 10 apples and you give away 3, how many apples do you have left?",
            answer: "7",
          },
          {
            question: "What is the square root of 16?",
            answer: "4",
          },
          {
            question:
              "If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
            answer: "40 square units",
          },
          {
            question: "What is 1/2 as a decimal?",
            answer: "0.5",
          },
          {
            question:
              "If you have a pizza cut into 8 slices and you eat 3 slices, how many slices are left?",
            answer: "5",
          },
          {
            question: "What is 20% of 80?",
            answer: "16",
          },
          {
            question:
              "If a train is traveling at 60 miles per hour, how far will it travel in 2 hours?",
            answer: "120 miles",
          },
          {
            question:
              "What is the next number in the sequence: 2, 4, 6, 8, ...?",
            answer: "10",
          },
        ],
      },
    },
    {
      echo: {
        title: "Basic Physics Quiz",
        questions: [
          {
            question:
              "What is the force that pulls objects toward the center of the Earth?",
            answer: "Gravity",
          },
          {
            question: "What is the SI unit of force?",
            answer: "Newton (N)",
          },
          {
            question: "What is the formula for calculating speed?",
            answer: "Speed = Distance / Time",
          },
          {
            question:
              "Which law of motion states that 'Every action has an equal and opposite reaction'?",
            answer: "Newton's Third Law of Motion",
          },
          {
            question: "What is the energy possessed by a body in motion?",
            answer: "Kinetic Energy",
          },
          {
            question: "What is the SI unit of energy?",
            answer: "Joule (J)",
          },
          {
            question: "What is the formula for calculating work done?",
            answer: "Work = Force × Distance × cos(θ)",
          },
          {
            question:
              "Which type of energy is stored in an object due to its position or condition?",
            answer: "Potential Energy",
          },
          {
            question:
              "What is the law that states 'The total energy of an isolated system remains constant'?",
            answer: "Law of Conservation of Energy",
          },
          {
            question:
              "What is the acceleration due to gravity on Earth (approximately)?",
            answer: "9.81 m/s²",
          },
        ],
      },
    },
  ];
}
export async function getQuizOpenAI(content) {
  try {
    console.log("Sending: " + content);
    const url = "https://z03aj3glff.execute-api.us-east-1.amazonaws.com/Prod"; // Replace with your API endpoint URL

    const data = {
      question: content,
      type: "quiz",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.result);
      return jsonResponse.result;
    } else {
      console.error("Error:", response.status);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getOpenAi(content) {
  return testGetOpenAi(content);
}

export async function testGetOpenAi(content) {
  try {
    const url = "https://z03aj3glff.execute-api.us-east-1.amazonaws.com/Prod"; // Replace with your API endpoint URL

    const data = {
      question: content,
      type: "message",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse.result);
      return jsonResponse.result;
    } else {
      console.error("Error:", response.status);
    }
  } catch (e) {
    console.log(e);
  }
}
