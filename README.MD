# 🎨 Valid Image Generator

The **Valid Image Generator** is a web-based application designed to dynamically generate random image URLs sourced from the Pointer Pointer website. Its primary function is to verify the availability of these images, ensuring that each generated URL points to a valid and accessible image.

## ✨ Key Features

- **🔀 Random URL Generation**: The application uses a random number generation algorithm to create image URLs with 1 to 3 digit IDs, providing a diverse set of potential images.
  
- **✅ Robust Validation**: Before returning any image URL, the application checks the response from the server to verify its validity. Only URLs that successfully point to actual images are provided to the user.
  
- **⚡ Express API Integration**: Built on Node.js and Express, the application features a simple and efficient API that allows users to request new image URLs effortlessly.
  
- **🛠️ Error Handling**: The generator handles errors gracefully, providing helpful logging for troubleshooting while continuously attempting to find valid URLs until successful.

- **💡 Usage Scenarios**: Ideal for developers looking for a quick way to source random images for testing or creative projects, the Valid Image Generator makes the process straightforward and reliable.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GeorgienDev/Valid-Image-Generator.git
   ```

2. Navigate to the project directory:
    ```bash
    cd Valid-Image-Generator
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the server by running:
    ```bash
    npm start
    ```
2. Open your web browser and navigate to ```http://localhost:5000/``` to generate and view valid image URLs.


## Live Demo
You can view **Image Generator** live at: [Valid Image Generator API Live Demo](https://image-generator-cjso.onrender.com/)
