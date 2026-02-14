# Log Parser Project Frontend

This project is the frontend implementation for the Log Parsing project, built using **React** and **TypeScript**. The frontend provides an interface for users to upload log files, view parsed data in a table format, and reset the form to upload another file. 

## Features
- Allows users to upload log files (.txt or .log).
- Parses the logs and displays data in a scrollable, formatted table.
- Includes a reset button to clear the current data and upload a new file.
- Sort by column and search/filter functionality.
- Modern, responsive, and accessible UI.

  <img width="777" height="624" alt="Screenshot 2026-02-13 at 3 54 57 PM" src="https://github.com/user-attachments/assets/c2e3d074-5e8d-4dea-9b7f-e826917269ff" />

  <img width="781" height="528" alt="Screenshot 2026-02-13 at 3 57 28 PM" src="https://github.com/user-attachments/assets/9b640912-fdaa-438b-af9a-14dfc9fd1440" />

## Technologies Used
- **React + TypeScript**: Frontend library and type safety for a robust UI.
- **Axios**: HTTP client for making API requests to the backend server.
- **CSS**: Custom styling for the components to provide a consistent look and feel.

## Prerequisites
- **Node.js** and **npm** installed

## Setup and Installation
1. **Clone the Repository**:
   ```sh
   git clone git@github.com:fengzhu92/LogParserUI.git
   cd LogParserUI
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
- `src/components/FileUploader.tsx`: Component for handling log file upload and parsing the content.
- `src/components/DataTable.tsx`: Component for displaying the parsed data in a paginated, searchable, and sortable table.
- `src/components/Button.css`: CSS file for styling the buttons.
- `src/components/DataTable.css`: CSS file for styling the data tables.
- `src/App.tsx`: Main app component and layout.
- `src/index.tsx`: Entry point for the React app.
- `src/index.css`: Global styles.
- `public/demo/`: Contains sample `.txt` files for testing and demo purposes.

## API Endpoints
This frontend interacts with the backend API to upload log files and get parsed data:
- **POST /api/logs/host-summary**: Upload log file and receive host access summaries.
- **POST /api/resource-summary**: Upload log file for resource access summaries.

## Usage
1. **Upload a Log File**:
   - Click on the "Choose File" button to select a `.txt` or `.log` file from your computer.
   - Click on "Parse Log" to send the file to the backend and display the parsed data.

2. **View Parsed Data**:
   - Once the file is uploaded, the parsed log information will be displayed in a paginated, searchable, and sortable table.
   - The table includes columns like host, accessCount, uri, successfulAccessCount.

3. **Reset the Data**:
   - Click the "Reset" button to clear the current data and prepare the form for a new file upload.

4. **Demo/Test Files**:
   - You can use the sample `.txt` files in `public/demo/` for testing and demonstration.

---

For any questions or issues, please open an issue on the repository or contact the maintainer.

