<template>
  <div class="kolbs-reflection">
    <h1>Kolb's Cycle Number {{currentCycle}}</h1>
    <!-- Header with Cycle Navigation and Buttons -->
    <div class="header">
      <!-- Zone 1: Left with Reset and Icons -->
      <div class="header-left">
        <button @click="resetCycle" class="reset-btn">
          <i class="fas fa-redo"></i> Reset
        </button>
      </div>

      <!-- Zone 2: Center with Page Indicator and Navigation Controls -->
      <div class="page-indicator-wrapper">
        <div class="navigation-buttons">
          <button @click="goToLeftmostPage" class="extreme-left">
            <i class="fas fa-step-backward"></i>
          </button>
          <button @click="goToPreviousPage" class="previous">
            <i class="fas fa-chevron-left"></i>
          </button>
          <strong class="center">{{ currentCycle }} / {{cyclesData.length}}</strong>
          <button @click="goToNextPage" class="next">
            <i class="fas fa-chevron-right"></i>
          </button>
          <button @click="goToRightmostPage" class="extreme-right">
            <i class="fas fa-step-forward"></i>
          </button>
        </div>
      </div>

      <!-- Zone 3: Right with Upload and Add buttons -->
      <div class="header-right">
        <button @click="uploadCycle" class="upload-btn">
          <i class="fas fa-cloud-upload-alt"></i> Upload
        </button>
        <button @click="saveCycle" class="add-btn">
          <i class="fas fa-save"></i> Save
        </button>
        <button @click="addCycle" class="add-btn">
          <i class="fas fa-plus-circle"></i> Add
        </button>
      </div>
    </div>
    <!-- Kolb's Cycle Steps -->
    <div class="kolbs-cycle">
      <!-- Step 1: Experience -->
      <div 
        class="cycle-step" 
        :class="{'active': currentStep === 1, 'step-1': true, 'completed': currentStep > 1}" 
        @click="setStep(1)"
      >
        <div class="icon-wrapper">
          <i class="fas fa-calendar-check"></i>
          <span class="cycle-label">Experience</span>
        </div>
      </div>
    
      <!-- Arrow to Next Step -->
      <div class="cycle-arrow" :class="{'active': currentStep >= 2}"><i class="fas fa-arrow-right"></i></div>
    
      <!-- Step 2: Reflection -->
      <div 
        class="cycle-step" 
        :class="{'active': currentStep === 2, 'step-2': true, 'completed': currentStep > 2}" 
        @click="setStep(2)"
      >
        <div class="icon-wrapper">
          <i class="fas fa-eye"></i>
          <span class="cycle-label">Reflection</span>
        </div>
      </div>
    
      <!-- Arrow to Next Step -->
      <div class="cycle-arrow" :class="{'active': currentStep >= 3}"><i class="fas fa-arrow-right"></i></div>
    
      <!-- Step 3: Abstraction -->
      <div 
        class="cycle-step" 
        :class="{'active': currentStep === 3, 'step-3': true, 'completed': currentStep > 3}" 
        @click="setStep(3)"
      >
        <div class="icon-wrapper">
          <i class="fas fa-brain"></i>
          <span class="cycle-label">Abstraction</span>
        </div>
      </div>
    
      <!-- Arrow to Next Step -->
      <div class="cycle-arrow" :class="{'active': currentStep >= 4}"><i class="fas fa-arrow-right"></i></div>
    
      <!-- Step 4: Experiment -->
      <div 
        class="cycle-step" 
        :class="{'active': currentStep === 4, 'step-4': true, 'completed': currentStep > 4}" 
        @click="setStep(4)"
      >
        <div class="icon-wrapper">
          <i class="fas fa-flask"></i>
          <span class="cycle-label">Experiment</span>
        </div>
      </div>
    </div>

    <!-- Kolb's Steps Content -->
    <div class="step-content">
      <!-- Step 1: Experience -->
      <div v-if="currentStep === 1" class="step-form">
        <span class="step-wrapper">
          <h2>Step 1: Experience</h2>
          <!-- Help button next to label -->
          <button @click="showHelp" class="help-button" type="button">
            <i class="fas fa-info-circle"></i> Guidelines
          </button>
        </span>
        <div class="form-section">
          <label for="experience">
            What experience do you want to reflect on?
          </label>
          <textarea
            id="experience"
            v-model="cyclesData[currentCycle - 1].experience"
            :placeholder="'Example: I noticed that I’ve been having trouble falling asleep lately and often feel tired during the day.'"
          ></textarea>
        
          <label for="motivation">
            Why do you want to improve on this?
          </label>
          <textarea 
            id="motivation"
            v-model="cyclesData[currentCycle - 1].motivation"
            placeholder="Example: I want to improve my sleep habits as I know the impact on the energy I have during the day.">
          </textarea>
        
          <div class="buttons">
            <button @click="previousStep" :disabled="currentStep === 1">Previous Step</button>
            <button @click="nextStep">Next Step</button>
          </div>
        </div>
      </div>

      <!-- Step 2: Reflection -->
      <div v-if="currentStep === 2" class="step-form">
        <span class="step-wrapper">
          <h2>Step 2: Reflection</h2>
          <!-- Help button next to label -->
          <button @click="showHelp" class="help-button" type="button">
            <i class="fas fa-info-circle"></i> Guidelines
          </button>
        </span>
        <div class="form-section">
          <label for="sequence">List and describe the sequence of events, in chronological order</label>
          <textarea id="sequence" v-model="cyclesData[currentCycle - 1].sequence" placeholder="Describe the events like watching a movie or having a mirror in front of you"></textarea>
          <label for="feelings">How did you feel about the experience?</label>
          <textarea id="feelings" v-model="cyclesData[currentCycle - 1].feelings" placeholder="Be specific and detailed about how you felt and when you felt this way. Heightened emotions often indicate key parts of the process that contributed to success or failure. For example, we can feel frustrated before we cognitively recognise which parts of the process make us feel that way."></textarea>
          <label for="triggers">What were the triggers to you feeling the way you did?</label>
          <textarea id="triggers" v-model="cyclesData[currentCycle - 1].triggers" placeholder="Triggers are cues, signs, events, actions, or exposures that made you feel or act a certain way. For example, some people are triggered to procrastinate when they see a social media icon. You might be triggered to feel very uncomfortable while learning as soon as you realise there are many potential relationships to think about."></textarea>
          <label for="difficultiesSuccesses">Which aspects (if any) of the process felt especially difficult? Which aspects felt like they went well?</label>
          <textarea id="difficultiesSuccesses" v-model="cyclesData[currentCycle - 1].difficultiesSuccesses" placeholder="Reflect on your actions and thoughts"></textarea>
          <label for="challengeResponse">How did you respond to challenges and difficulties during this process?</label>
          <textarea id="challengeResponse" v-model="cyclesData[currentCycle - 1].challengeResponse" placeholder="This could include mental or physical activities you used to try and overcome the issue. You may have tried to avoid, bypass, or retreat from the difficulty. Be specific and detailed. It's important to be honest with ourselves and reflect on how we truly responded, and not how we wish we would have. Skip this question if there were no difficulties."></textarea>
          <label for="why">Why do you think you acted the way you did during this experience?</label>
          <textarea id="why" v-model="cyclesData[currentCycle - 1].why" placeholder="This question challenges your metacognition (thinking about thinking). Instead of thinking about the events of what happened and how you felt during the experience, reflect on what emotions or thoughts drove you to act and feel the way you did. Rather than reflecting on &quot;what&quot;, we should reflect on &quot;why&quot;. This is different from triggers because triggers are often external."></textarea>
          <div class="buttons">
            <button @click="previousStep" :disabled="currentStep === 1">Previous Step</button>
            <button @click="nextStep">Next Step</button>
          </div>
        </div>
      </div>

      <!-- Step 3: Abstraction -->
      <div v-if="currentStep === 3" class="step-form">
        <span class="step-wrapper">
          <h2>Step 3: Abstraction</h2>
          <button @click="showHelp" class="help-button" type="button">
            <i class="fas fa-info-circle"></i> Guidelines
          </button>
        </span>
        <div class="form-section">
          <label for="abstraction">What habits, beliefs, or tendencies can you identify from the reflection that explain why you acted the way you did?</label>
          <textarea id="abstraction" v-model="cyclesData[currentCycle - 1].abstraction" placeholder="Identify any trends or tendencies"></textarea>
          <label for="similarities">Do you act or respond similarly in other parts of your life? How might this impact other areas?</label>
          <textarea id="similarities" v-model="cyclesData[currentCycle - 1].similarities" placeholder="Reflect on similar patterns in your life"></textarea>
          <div class="buttons">
            <button @click="previousStep" :disabled="currentStep === 1">Previous Step</button>
            <button @click="nextStep">Next Step</button>
          </div>
        </div>
      </div>

      <!-- Step 4: Experiment -->
      <div v-if="currentStep === 4" class="step-form">
        <span class="step-wrapper">
          <h2>Step 4: Experiment</h2>
          <button @click="showHelp" class="help-button" type="button">
            <i class="fas fa-info-circle"></i> Guidelines
          </button>
        </span>
        <div class="form-section">
          <label for="experiment">List potential solutions or actions to experiment with:</label>
          <textarea id="experiment" v-model="cyclesData[currentCycle - 1].experiment" placeholder="List some potential solutions and actions to experiment on:"></textarea>
          <div class="buttons">
            <button @click="previousStep" :disabled="currentStep === 1">Previous Step</button>
            <button class="download-button" @click="downloadPDF">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showHelpText">
      <div class="help-popup">
        <button @click="closeHelp" class="close-btn">✖</button>
        <div class="help-content">
          <h2>{{stepHelpTitle}}</h2>
          <p v-html="stepHelpContent"></p>
        </div>
      </div>
      <span class="background"></span>
    </div>
  </div>
</template>

<script>
import '../assets/styles.css';

export default {
  data() {
    return {
      currentCycle: 1,
      currentStep: 1,
      stepHelpTitle: "Help",
      stepHelpContent: "This is a help message for the current step.",
      cyclesData: [
        {
          experience: "",
          motivation: "",
          sequence: "",
          feelings: "",
          triggers: "",
          difficultiesSuccesses: "",
          challengeResponse: "",
          why: "",
          abstraction: "",
          similarities: "",
          experiment: "",
        },
      ],
      showHelpText: false
    };
  },
  mounted() {
    this.updateHelpData();
  },
  watch: {
    currentStep() {
      this.updateHelpData();
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    setStep(step) {
      this.currentStep = step;
    },
    downloadPDF() {
      // Load jsPDF
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const pageHeight = doc.internal.pageSize.height; // Get the height of the page
      const margin = 10; // Top and bottom margins
      const maxYPosition = pageHeight - margin; // Maximum usable vertical space

      // Prompt the user for a PDF file name
      const fileName = prompt("Enter the file name for the PDF:", "kolbs-reflection.pdf");
      if (!fileName) {
        alert("File name is required. PDF not downloaded.");
        return;
      }

      // Helper function to add text with dynamic spacing
      const addTextWithSpacing = (doc, text, x, y, maxWidth, lineHeight) => {
        const lines = doc.splitTextToSize(text, maxWidth); // Wrap text
        for (const line of lines) {
          if (y + lineHeight > maxYPosition) {
            doc.addPage();
            y = margin; // Reset to the top of the new page
          }
          doc.text(line, x, y); // Add each line individually
          y += lineHeight;
        }
        return y;
      };

      // Start at the top margin of the first page
      let yPosition = margin;

      // Loop through the cyclesData and add each cycle to the PDF
      this.cyclesData.forEach((cycle, index) => {
        const cycleNumber = index + 1; // To display "Cycle 1", "Cycle 2", etc.

        // Check if adding the header would exceed the page, add a new page if necessary
        if (yPosition + 10 > maxYPosition) {
          doc.addPage();
          yPosition = margin; // Reset to the top of the new page
        }
        // Title 1: Cycle header
        doc.setFontSize(16);
        doc.setFont("Helvetica", "bold");
        doc.text(`Cycle ${cycleNumber}`, 10, yPosition);
        yPosition += 10;

        // Title 2: Experience & Motivation
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text(`1. Experience & Motivation:`, 10, yPosition);
        yPosition += 6;
        doc.setFont("Helvetica", "normal");
        yPosition = addTextWithSpacing(doc, cycle.experience, 10, yPosition, 180, 6);
        yPosition = addTextWithSpacing(doc, cycle.motivation, 10, yPosition, 180, 6);

        // Title 3: Reflection
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        yPosition += 10; // Add space before the next section
        if (yPosition > maxYPosition) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(`2. Reflection:`, 10, yPosition);
        yPosition += 6;
        doc.setFont("Helvetica", "normal");
        yPosition = addTextWithSpacing(doc, cycle.sequence, 10, yPosition, 180, 6);
        yPosition = addTextWithSpacing(doc, cycle.feelings, 10, yPosition, 180, 6);
        yPosition = addTextWithSpacing(doc, cycle.triggers, 10, yPosition, 180, 6);
        yPosition = addTextWithSpacing(doc, cycle.difficultiesSuccesses, 10, yPosition, 180, 6);
        yPosition = addTextWithSpacing(doc, cycle.challengeResponse, 10, yPosition, 180, 6);
        yPosition = addTextWithSpacing(doc, cycle.why, 10, yPosition, 180, 6);

        // Title 4: Abstraction
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        yPosition += 10; // Add space before the next section
        if (yPosition > maxYPosition) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(`3. Abstraction:`, 10, yPosition);
        yPosition += 6;
        doc.setFont("Helvetica", "normal");
        yPosition = addTextWithSpacing(doc, cycle.abstraction, 10, yPosition, 180, 6);
        yPosition = addTextWithSpacing(doc, cycle.similarities, 10, yPosition, 180, 6);

        // Title 5: Experiment
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        yPosition += 10; // Add space before the next section
        if (yPosition > maxYPosition) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(`4. Experiment:`, 10, yPosition);
        yPosition += 6;
        doc.setFont("Helvetica", "normal");
        yPosition = addTextWithSpacing(doc, cycle.experiment, 10, yPosition, 180, 6);
      });

      // Download the generated PDF with the user-specified file name
      doc.save(fileName);
    },
    saveCycle() {
      // Prompt the user for a file name
      const fileName = prompt("Enter the file name:", "kolbs-reflection.json");
      
      // If the user cancels the prompt, exit the function
      if (!fileName) return;

      // Prepare the data
      const data = JSON.stringify(this.cyclesData);
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      
      // Create a temporary download link
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;  // Use the user-defined file name
      link.click();

      // Clean up the URL object after use
      URL.revokeObjectURL(url);
    },
    uploadCycle() {
      // Create an input element to allow the user to upload a file
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";  // Restrict to JSON files

      // Set up a listener for when the user selects a file
      input.addEventListener("change", (event) => {
        const file = event.target.files[0];  // Get the selected file

        if (file) {
          const reader = new FileReader();

          // Set up the reader to handle the file once it's loaded
          reader.onload = (e) => {
            try {
              // Parse the JSON data from the file
              const fileData = JSON.parse(e.target.result);
              
              // Assuming 'this.cyclesData' is where the data should go
              this.cyclesData = fileData;

              // Optionally, notify the user that the file has been uploaded and read
              alert("File uploaded and data loaded successfully.");
            } catch (error) {
              alert("There was an error reading the file.");
            }
          };

          // Read the file as text (since it's a JSON file)
          reader.readAsText(file);
        }
      });

      // Trigger the file input dialog
      input.click();
    },
    showHelp() {
      this.showHelpText = true; // Show help text
      console.log("Help button clicked");
    },
    closeHelp() {
      this.showHelpText = false; // Hide help text
    },
    goToLeftmostPage() {
      this.currentCycle = 1;
    },
    goToPreviousPage() {
      if (this.currentCycle > 1) {
        this.currentCycle--;
        this.currentStep = 4;
      }
    },
    goToNextPage() {
      if (this.currentCycle < this.cyclesData.length) {
        this.currentCycle++;
        this.currentStep = 1;
      }
    },
    goToRightmostPage() {
      this.currentCycle = this.cyclesData.length;
    },
    updateHelpData() {
      if (this.currentStep === 1) {
        this.stepHelpTitle = "Guidelines for experience";
        this.stepHelpContent = `
         <div>
          <br><p><strong>Process-focused:</strong> Avoid reflecting on outcomes (e.g., test results) as this is not a process. Focus on the problematic part of the result, such as the process leading to the result or your reaction to it.</p>
          <br><p><strong>Specific:</strong> Avoid reflecting on many events and activities, as this will make it difficult to produce a targeted and focused reflection. To reflect on multiple skills and experiences, complete multiple separate cycles to keep each cycle focused.</p>
          <br><p><strong>Recent:</strong> Reflecting on experiences that happened too long ago makes it easier to forget important parts of the process and increases the chances of error.</p>
          <br><p><strong>Concise:</strong> The experience is usually only one sentence, as we will elaborate on it in the next steps.</p>
        </div>`;
      } else if (this.currentStep === 2) {
        this.stepHelpTitle = "Guidelines for reflection";
        this.stepHelpContent = `
        <div>
          <br><p><strong>Be Honest: </strong>Reflect truthfully about your experience without judgment.
          <br><br><p><strong>Focus on Details: </strong>Pay attention to specific moments or feelings that stood out.
          <br><br><p><strong>Practice Self-Awareness: </strong>Try to increase your awareness during the experience for better reflection later.
          <br><br><p><strong>Keep It Simple: </strong>Start with short, focused reflections if Kolb’s takes too long. You can expand as you improve.
          <br><br><p><strong>Take Your Time: </strong>Don’t rush through the steps; quality reflection is key for deeper insights.
        </div>
      `;
      } else if (this.currentStep === 3) {
        this.stepHelpTitle = "Guidelines for abstraction";
        this.stepHelpContent = `<div>
        <br><p>Your abstraction should be an analysis and evaluation of your reflection. You are examining your reflection for clues that help you understand the root causes for your actions and processes. This translates to your improvements being made at a root cause level, rather than a symptom level.</p>
        <br><p>If you struggle to find trends and patterns in your reflection and find yourself theorizing why things happened based on ideas that are not supported by your reflection, it may be because:</p>
        <div>
          <br><p><strong>Your reflection is too brief or too superficial:</strong> If there aren't enough "data points," you won’t be able to find any trends. The solution is to go back to the reflection and add more information where you feel it would help you to understand your processes and behaviors better.</p>
          <br><p><strong>Your self-awareness is still not high enough:</strong> If you struggle to add more information to your reflection, keep it in mind next time you have a similar experience. Your self-awareness should continue to deepen very quickly. Avoid making theories on root causes based on unsupported ideas, as this can massively increase the chance of error due to the strong effect that cognitive biases have on the brain.</p>
          <br><p><strong>You are not used to analyzing your reflections:</strong> If this is the case, do your best, and you will quickly improve!</p>
        </div>
      </div>`;
      } else if (this.currentStep === 4) {
        this.stepHelpTitle = "Guidelines for experiment";
        this.stepHelpContent = `<br>Keep your experiments <strong>concise, specific, and actionable</strong>. Avoid vague statements of intention. Imagine waking up tomorrow and seeing this list. You want to have a clear idea of exactly what you need to do to immediately act on your experiments.
          <br><br><strong>Less than 3 experiments</strong> is ideal to improve your chances of success and make efficient progress with each cycle. More than 4 experiments is highly unadvised.`;
      }
    },
    addCycle() {
      this.cyclesData.push({
        experience: "",
        motivation: "",
        sequence: "",
        feelings: "",
        triggers: "",
        difficultiesSuccesses: "",
        challengeResponse: "",
        why: "",
        abstraction: "",
        similarities: "",
        experiment: "",
      });
      alert("One more cycle added.");
    },
    resetCycle() {
      this.currentStep = 1;
      this.currentCycle = 1;
      this.cyclesData = [
        {
          experience: "",
          motivation: "",
          sequence: "",
          feelings: "",
          why: "",
          abstraction: "",
          similarities: "",
          experiment: "",
        },
      ];
      alert("Kolb's cycle reset.");
    },
  },
};
</script>

<style>
/* Apply the font family globally */
* {
  font-family: 'Carlito', sans-serif;
}
</style>

<style scoped>
.kolbs-reflection {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #ffffff;
  margin-bottom: 20px;
}
/* Default styles for the cycle container */
.kolbs-cycle {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 800px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.cycle-step {
  text-align: center;
  padding: 15px;
  margin: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  border-radius: 8px;
  opacity: 0.7; /* Slight transparency for inactive steps */
}

/* Icon and label styling */
.cycle-step i {
  font-size: 40px;
  display: block;
  margin-bottom: 8px;
  color: #000000;
}

.cycle-step .cycle-label {
  font-size: 16px;
  color: black;
  display: block;
}

/* Inactive step colors (with slight transparency) */
.step-1 {
  background-color: rgba(255, 99, 71, 0.7); /* Tomato with transparency */
}

.step-2 {
  background-color: rgba(60, 179, 113, 0.7); /* Medium sea green with transparency */
}

.step-3 {
  background-color: rgba(70, 130, 180, 0.7); /* Steel blue with transparency */
}

.step-4 {
  background-color: rgba(255, 165, 0, 0.7); /* Orange with transparency */
}

/* Active step colors (without transparency and with highlight) */
.cycle-step.active.step-1 {
  background-color: #ff6347; /* Solid tomato color */
  opacity: 1; /* No transparency */
}

.cycle-step.active.step-2 {
  background-color: #3cb371; /* Solid medium sea green */
  opacity: 1;
}

.cycle-step.active.step-3 {
  background-color: #4682b4; /* Solid steel blue */
  opacity: 1;
}

.cycle-step.active.step-4 {
  background-color: #ffa500; /* Solid orange */
  opacity: 1;
}

/* Completed step colors (solid color, no transparency) */
.cycle-step.completed.step-1 {
  background-color: #ff6347; /* Solid tomato color */
  opacity: 1;
}

.cycle-step.completed.step-2 {
  background-color: #3cb371; /* Solid medium sea green */
  opacity: 1;
}

.cycle-step.completed.step-3 {
  background-color: #4682b4; /* Solid steel blue */
  opacity: 1;
}

.cycle-step.completed.step-4 {
  background-color: #ffa500; /* Solid orange */
  opacity: 1;
}

/* Arrow styles */
.cycle-arrow {
  font-size: 24px;
  margin: 0 15px;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.cycle-arrow.active {
  opacity: 1;
}

/* Hover effect for steps */
.cycle-step:hover {
  opacity: 1;
  transform: scale(1.05); /* Slight zoom effect on hover */
  transition: transform 0.3s ease;
}

/* Arrow styles */
.cycle-arrow {
  font-size: 24px;
  margin: 0 15px;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.cycle-arrow.active {
  opacity: 1;
}

/* Hover Effect */
.cycle-step:hover {
  opacity: 1;
  transform: scale(1.05); /* Slight zoom effect on hover */
  transition: transform 0.3s ease;
}

.cycle-arrow {
  width: 30px;
  height: 30px;
  background: transparent;
  margin: 0 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.cycle-arrow i {
  font-size: 20px; /* Set the size of the arrow */
  color: #868686; /* Change the color to match your theme */
  transition: transform 0.3s ease; /* Add smooth transition for hover effects */
}

.cycle-arrow.active i {
  color: #f9e3a3;
  transform: translateX(5px); /* Add movement effect when active */
}

.cycle-label {
  display: block;
  font-size: 14px;
  margin-top: 0;
}

.step-form {
  width: 100%;
  max-width: 720px;
}

.form-section {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

button {
  background-color: #eec550;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #f9e3a3;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button:disabled {
  background-color: #9b9176;
  cursor: not-allowed;
}

.required {
  color: red;
}

/* Help button styling - align it to the right of the label */
.help-button {
  padding: 5px;
  border: none;
  background-color: #eec550;
  color: black;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  transform: translateY(-50%); /* Adjust to perfectly center vertically */
}

.help-button:hover {
  background-color: #f9e3a3;
}

.help-popup button {
  background-color: #eec550;
  color: black;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}

.help-popup button:hover {
  background-color: #f9e3a3;
}

.help-button i {
  font-size: 18px; /* Icon size */
}

/* Styling for help popup/modal */
.help-popup {
  position: fixed; /* Change from absolute to fixed for centering */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the modal */
  background-color: #203E5F;
  border: 1px solid #F9E3A3;
  border-radius: 8px;
  padding: 15px;
  width: 500px; /* Slightly wider for better readability */
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  color: white;
  display: block; /* No need for 'active' class here, as it's handled by v-if */
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black overlay */
  z-index: 5;
}

.help-popup .help-content {
  margin: 10px;
  font-size: 14px;
}

/*End of popups*/

.step-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.icon-wrapper {
  text-align: center; /* Centers the icon and label */
}

.icon-wrapper i {
  font-size: 40px; /* Adjust size of the icon */
  display: block; /* Ensures the icon is displayed on its own line */
}

.icon-wrapper .cycle-label {
  display: block; /* Makes the label appear on a new line */
  font-size: 16px; /* Smaller size for the subtitle */
  color: #000000; /* Light color for the subtitle */
  margin-top: 8px; /* Adds spacing between the icon and the label */
}

.page-indicator {
  font-size: 20px;
  font-weight: bold;
}

.header-buttons button {
  margin-left: 10px;
  background-color: #eec550;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  padding: 10px 20px;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.page-indicator-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding-left: 85px;
}

.page-indicator {
  font-size: 24px;
  font-weight: bold;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 52px;
}

.extreme-left {
  background-color: #eec550;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.previous {
  background-color: #eec550;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.center {
  margin-top: 15px;
  background-color: #e9e5be;
  color: black;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  border-radius: 4px;
  height: 35px;
  cursor: default;
}

.next {
  background-color: #eec550;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.extreme-right {
  background-color: #eec550;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.step-content {
  width: 100%;
  max-width: 760px;
  padding: 20px;
  background-color: #203E5F;
  border-radius: 15px;
  display: flex;
  justify-content: center;
}

textarea {
  min-height: 60px;
  height: 80px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #19324d;
  color: white;
  resize: vertical;
  transition: border-color 0.3s;
}

textarea:focus {
  border-color: #eec550;
  background-color: #19324d;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  font-size: 18px;
  color: #ccc;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s, color 0.3s;
}

.close-btn:hover {
  color: #1a2634;
  background-color: #ccc;
}

.download-button {
  background-color: #ee9c50;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.download-button:hover {
  background-color: #f9e3a3;
}

</style>
