# Log Parser Project Frontend

This project is the frontend implementation for the Log Parsing project, built using **React**. The frontend provides an interface for users to upload log files, view parsed data in a table format, and reset the form to upload another file. 

## Features
- Allows users to upload log files (.txt or .log).
- Parses the logs and displays data in a scrollable, formatted table.
- Includes a reset button to clear the current data and upload a new file.
- Includes sort by column

  ![image](https://github.com/user-attachments/assets/dfa5147c-7612-4e4b-a48d-1d2da7a04880)


## Technologies Used
- **React**: Frontend library used to build a responsive user interface.
- **Axios**: HTTP client for making API requests to the backend server.
- **CSS**: Custom styling for the components to provide a consistent look and feel.

## Prerequisites
- **Node.js** and **npm** installed

## Setup and Installation
1. **Clone the Repository**:
   ```sh
   git clone git@github.com:fengzhu92/LogParserUI.git
   cd log-file-parser-ui
   ```

2. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```sh
   npm install
   ```

3. **Run the Development Server**:
   To start the development server, run:
   ```sh
   npm start
   ```
   The application will be available at `http://localhost:3000` by default.

## Project Structure
- *src/components/FileUploader.js*: Component for handling log file upload and parse the content.
- *src/components/DataTable.js*: Component for displaying the parsed data in a paginated table.
- *src/components/Button.css*: CSS file for styling the buttons.
- *src/components/DataTable.css*: CSS file for styling the data tables.
- *App.js*: Defines the App
- *index.js*
- *index.css*

## API Endpoints
This frontend interacts with the backend API to upload log files and get parsed data:
- **POST /api/logs/host-summary**: Upload log file and receive host access summaries.
- **POST /api/resource-summary**: Upload log file for resource access summaries.

## Usage
1. **Upload a Log File**:
   - Click on the "Choose File" button to select a `.txt` or `.log` file from your computer.
   - Click on "Parse Log" to send the file to the backend and display the parsed data.

2. **View Parsed Data**:
   - Once the file is uploaded, the parsed log information will be displayed in a paginated table.
   - The table includes columns like host, accessCount, uri, successfulAccessCount.

3. **Reset the Data**:
   - Click the "Reset" button to clear the current data and prepare the form for a new file upload.

