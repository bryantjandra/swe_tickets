

# SWE Tickets

SWE Tickets is a simple, user-friendly ticket management system designed for developers to create, view, and manage support tickets efficiently. The app supports features like ticket creation, deletion, and prioritization, all powered by **Next.js** and **Supabase**.

## 🚀 Live Demo

Try it out here: [https://swetickets.netlify.app/](https://swetickets.netlify.app/)
- **Guest Email**: guest@gmail.com
- **Guest Password**: test1234

---

## 📖 Features

- **Create Tickets**: Add new tickets with a title, description, and priority level.
- **View Tickets**: View all your tickets in a clean and organized dashboard.
- **Delete Tickets**: Remove tickets you no longer need with a single click.
- **User-Specific Data**: Each ticket is tied to an authenticated user.
- **Authentication**: Secure user login and session management powered by **Supabase**.

---

## 🛠️ Tech Stack

- **Frontend**: React, Next.js (App Router)
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Netlify

---

## 🖥️ Getting Started

Follow these steps to run the project locally:

### Prerequisites

1. Node.js (v18+ recommended)
2. Supabase account with an active project

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/swe-tickets.git
   cd swe-tickets
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

4. Set up your Supabase project:
   - Create a `tickets` table with the following schema:
     ```sql
     CREATE TABLE tickets (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       body TEXT NOT NULL,
       priority VARCHAR(50) NOT NULL,
       user_email VARCHAR(255) NOT NULL
     );
     ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit the app locally at: [http://localhost:3000](http://localhost:3000)

---

## 📄 API Endpoints

### **`POST /api/tickets`**
- **Description**: Create a new ticket.
- **Body**:
  ```json
  {
    "title": "Ticket Title",
    "body": "Ticket description",
    "priority": "low"
  }
  ```
- **Response**:
  ```json
  {
    "data": {
      "id": 1,
      "title": "Ticket Title",
      "body": "Ticket description",
      "priority": "low",
      "user_email": "user@example.com"
    }
  }
  ```

### **`DELETE /api/tickets/:id`**
- **Description**: Delete a ticket by ID.
- **Response**:
  ```json
  {
    "message": "Ticket deleted successfully"
  }
  ```

---

## 🔧 Development Notes

1. **Refresh Tickets**: After creating or deleting a ticket, the dashboard automatically refreshes using Next.js's `router.refresh()`.
2. **Authentication**: Supabase manages user authentication and session cookies (`sb-access-token`).
3. **Error Handling**: API routes handle errors gracefully and log any issues in the console for debugging.

---

## 🏗️ Future Improvements

- Add ticket update functionality.
- Implement sorting and filtering options for tickets.
- Add real-time updates using Supabase subscriptions.
