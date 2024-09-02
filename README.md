# Quiz Application README

This JavaScript application creates an interactive quiz with multiple-choice questions. It includes functionality for displaying questions, handling user responses, and visual effects for interactions.

## Code Overview

The application consists of:
- **`question` Class**: Defines the structure of a quiz question.
- **`Questions` Array**: Contains a list of predefined quiz questions.
- **`CreateParticle` Function**: Creates a visual effect for clicks.
- **`EmitClickParticle` Function**: Displays a visual effect based on user interactions.
- **`Quiz` Function**: Manages the quiz logic, question display, and user interactions.

### `question` Class

```javascript
class question {
    constructor(question, correctAnswer, answerA, answerB, answerC, answerD) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.answers = [answerA, answerB, answerC, answerD];
    }
}
```

**Purpose**: Defines a quiz question with possible answers and the correct answer.

**Parameters**:

- `question`: The text of the quiz question.
- `correctAnswer`: The identifier of the correct answer (e.g., 'A', 'B', 'C', 'D').
- `answerA`, `answerB`, `answerC`, `answerD`: The answer choices.

### `Questions` Array

```javascript
const Questions = [
    // List of question objects
];
```
**Purpose**: Contains a list of quiz questions created using the question class.

### `CreateParticle` Function

```javascript
const CreateParticle = (x, y, emoji) => {
    const particle = document.createElement('div');
    particle.className = 'click-particle';
    particle.style.position = 'absolute';
    particle.style.left = x - 12 + 'px';
    particle.style.top = y - 12 + 'px';
    particle.innerHTML = emoji;
    return particle;
}
```

**Purpose**: Creates a visual effect element at a specific position with an emoji.

**Parameters**:

- `x:` The horizontal position of the particle.
- `y`: The vertical position of the particle.
- `emoji`: The emoji to display in the particle.

### `EmitClickParticle` Function
```javascript
const EmitClickParticle = (e, emoji) => {
    const particle = CreateParticle(e.clientX, e.clientY, emoji);
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}
```
**Purpose**: Emits a visual particle effect at the click position with a specified emoji.

**Parameters**:

- `e`: The click event.
- `emoji`: The emoji to display in the particle.

### `Quiz` Function

**Purpose**: Manages the quiz logic, updates the question display, handles user interactions, and provides visual feedback.

**Details**:

- Retrieves color variables from the document's style.
- Updates the displayed question and answer options.
- Handles click events to provide feedback and advance the quiz.
- Resets the quiz when all questions have been answered.

