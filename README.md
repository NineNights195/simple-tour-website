# TripTour

A Thailand travel tour website with a light-blue theme. Browse tours by region, view full tour details, and complete a booking — all from a static front-end backed by a PHP/MySQL login system.
I deploy on GitHub Pages: [Visit my website](https://ninenights195.github.io/simple-tour-website/).  
_Note: The login feature requires a PHP backend and database, so it is not functional on GitHub Pages. All other features work as expected._

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, services slider, full tour listing with search & filter |
| Tours | `tours.html` | All tours with category chips and live search |
| Booking | `booking.html` | Multi-step booking form with live price summary and success screen |
| Contact | `contact.html` | Contact form and office information |
| Login | `login.html` | Username/password login — requires XAMPP (see below) |
| Register | `register.html` | Registration form with client-side validation |

---

## Quick Start (browse-only)

All pages except login work by opening the HTML files directly in a browser, or by serving them locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## Login Page — XAMPP Setup

The login page (`login.html`) submits credentials to `login.php`, which connects to a MySQL database. A plain file-open or Python server will not execute PHP. **XAMPP is required** for the login to function.

### 1. Install XAMPP

Download and install XAMPP from [https://www.apachefriends.org](https://www.apachefriends.org) (available for Windows, macOS, Linux).

### 2. Copy the project into the XAMPP web root

| OS | Web root path |
|----|---------------|
| Windows | `C:\xampp\htdocs\triptour\` |
| macOS | `/Applications/XAMPP/htdocs/triptour/` |
| Linux | `/opt/lampp/htdocs/triptour/` |

Copy all project files into that folder.

### 3. Start Apache and MySQL

Open the **XAMPP Control Panel** and click **Start** for both **Apache** and **MySQL**.

### 4. Create the database

Open your browser and go to `http://localhost/phpmyadmin`, then run the following SQL:

```sql
CREATE DATABASE tour;

USE tour;

CREATE TABLE users (
  id       INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Insert a test user (plain-text password for demo only)
INSERT INTO users (username, password) VALUES ('admin', 'admin123');
```

### 5. Open the site

Visit `http://localhost/triptour/index.html` in your browser.  
Log in at `http://localhost/triptour/login.html` using:

- **Username:** `admin`
- **Password:** `admin123`

A successful login redirects to `tours.html`. Invalid credentials show an alert and return to the login page.

### Database connection settings

The connection is configured at the top of `login.php`:

```php
$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '';       // XAMPP default is no password
$dbName = 'tour';
```

Change these values if your XAMPP MySQL uses a different username or password.

---

## Tour Data

All tour content is stored in the `TOURS` array inside `script.js`. To add a new tour, append an object to that array with the fields: `id`, `title`, `location`, `category`, `duration`, `groupSize`, `rating`, `reviews`, `price`, `image`, `description`, `fullDescription`, and `highlights`.

The `category` value must match one of the `data-cat` attributes on the chip buttons in `index.html` and `tours.html`.

---

Made by [Claude Code](https://claude.ai/code): claude-sonnet-4-6
