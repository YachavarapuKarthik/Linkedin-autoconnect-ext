# LinkedIn Auto Connect extension by karthik yacharapu

### Objective
This extension, built using the **wxt.dev** framework and **React**, automates connection requests on LinkedIn, allowing users to easily connect with multiple suggested profiles.


![image](https://github.com/user-attachments/assets/4331accc-ec77-4f96-a3da-94a959c8f876)
### Assignment Overview
- **Target URL:** The extension works on the following LinkedIn URL:  
  [https://www.linkedin.com/mynetwork/grow/](https://www.linkedin.com/mynetwork/grow/)
  
- **UI** A floating button with the text **“Connect with All”** is added to the page.

- **Functionality:** When the **“Connect with All”** button is clicked, the extension automatically triggers a click event for all visible **Connect** buttons on the page. For example, if there are 50 suggested profiles with a Connect button, 50 connection requests will be sent.

### Additional features
- **Delay Between Requests:** A delay of **1.5 seconds** is included between each connection request to prevent LinkedIn from blocking the account. This delay can be adjusted based on user preference.

- The extension utilizes the **wxt.dev** framework.

### Installation Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-github-username>/linkedin-auto-connect.git
   cd linkedin-auto-connect
   ```

2. **Install Dependencies**
   Run the following command to install the necessary packages:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   Use the following command to start the development server:
   ```bash
   npm run dev
   ```

5. **Test the Extension**
   - Navigate to [LinkedIn My Network](https://www.linkedin.com/mynetwork/grow/).
   - Click the **“Connect with All”** button to send connection requests.

### Author
Karthik Yacharapu  
[GitHub Profile](https://github.com/YachavarapuKarthik)
