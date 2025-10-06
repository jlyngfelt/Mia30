# Mia30 - Birthday Party RSVP Application 🎉

A web application for managing RSVPs and distrubating information to Mia's 30th birthday party in Jämtland, Sweden. The app allows guests to RSVP to the party and provides administrators with the ability to manage all registrations. Only avalible on mobile.

## ✨ Features

### For Guests
- **Landing Page** - Party information and quick navigation
- **Information Page** - Detailed information about location, time, and practical details
- **RSVP Form** - Simple form to register for the party
  - Name
  - Additional information (allergies/special requests)
  - Number of attendees

### For Administrators
- **Admin Panel** - Password-protected view to see all registrations
- **Manage Registrations** - View and delete RSVPs
- **Overview** - Total count of registered attendees

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | Frontend framework |
| Vite | 7.1.2 | Build tool & dev server |
| React Router DOM | 7.9.1 | Client-side routing |
| Supabase | 2.57.4 | Backend & database |


## 📁 Project Structure

```
mia30-app/
├── public/
│   ├── images/              # Images and assets
│   └── vite.svg
├── src/
│   ├── auth/                # Authentication & admin
│   │   ├── AdminPanel/
│   │   │   ├── AdminPanel.jsx
│   │   │   └── AdminPanel.css
│   │   └── adminLogin/
│   │       ├── AdminLogin.jsx
│   │       └── AdminLogin.css
│   ├── components/
│   │   ├── buttons/         # Button components
│   │   ├── form/            # RSVP form
│   │   ├── information/     # Information page
│   │   ├── infoContainer/   # Reusable info container
│   │   ├── menu/            # Navigation menu
│   │   └── start/           # Landing page
│   ├── data/
│   │   └── data.jsx         # Supabase configuration
│   ├── App.jsx              # Main component with routing
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── .env                     # Environment variables (not in repo)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

The application features a unique design with:

- **Gradient Background** - Apricot to light blue gradient
- **Mountain Landscape** - Fixed background image at the bottom
- **Animated GIF** - Party animation on the landing page
- **Responsive Menu** - Hamburger menu for mobile devices
- **Color-Coded Sections** - Different colors for information sections
- **Custom Typography** - Instrument Serif for headings, Roboto for body text


## 🤝 Private Use

This is a private project for personal use. Therefore the authentictaion to the adminpanel is not safe.

---

**Built with ❤️ for Mia's 30th birthday celebration**
