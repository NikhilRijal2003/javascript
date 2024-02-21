// Define word options for each button
const wordChoices = {
    1: ["Samir", "The boy", "My friend", "Superman", "The tiger"],
    2: ["played with", "ate", "liked", "kissed", "danced with"],
    3: ["a furious", "a grumpy", "a funny", "a tiny", "a beautiful"],
    4: ["crocodile", "chimp", "cow", "butterfly", "mouse"],
    5: ["in the forest.", "on the mountain.", "in the park.", "under the stars.", "on a sunny day."]
};

// Object to store chosen words
let selectedWords = {};

// Function to cycle through word options for a button
function cycleWords(buttonNumber) {
    const currentWord = selectedWords[buttonNumber];
    const options = wordChoices[buttonNumber];
    const currentIndex = options.indexOf(currentWord);
    const newIndex = (currentIndex + 1) % options.length;
    selectedWords[buttonNumber] = options[newIndex];
    document.getElementById(`button${buttonNumber}`).innerText = options[newIndex];
}

// Function to generate a random story
function generateRandomStory() {
    for (let i = 1; i <= 5; i++) {
      const options = wordChoices[i];
      const randomIndex = Math.floor(Math.random() * options.length);
      selectedWords[i] = options[randomIndex];
      document.getElementById(`button${i}`).innerText = options[randomIndex];
    }
    updateNarrative(); // Call the function to update the story output
  }
  
  // Function to update the story output
  function updateNarrative() {
    let story = "";
    for (let i = 1; i <= 5; i++) {
      story += selectedWords[i] ? selectedWords[i] + " " : "____ ";
    }
    document.getElementById("story-output").innerText = story;
  }
  
  // Function to reset the story
function resetStory() {
    // Clear the selectedWords object
    selectedWords = {};
    // Reset the button texts
    for (let i = 1; i <= 5; i++) {
      document.getElementById(`button${i}`).innerText = `Word ${i}`;
    }
    // Clear the story output
    document.getElementById("story-output").innerText = "";
  }
  
  // Function to view the story
  function viewStory() {
    updateNarrative(); // Call the function to update the story output
  }
