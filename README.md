
# <img src="public/images/logo2.png" alt="logo" width="300"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c1/512.gif" alt="🏁" width="32" height="32">
### Your Gateway to Unique Stays: Experience Travel Differently!

Nestquest is a full-stack web application inspired by Airbnb that allows users to sign up, log in, and explore unique accommodations worldwide. Users can list their properties, add reviews, and view precise locations on a map. The platform is built using modern web technologies like Node.js, Express.js, MongoDB, and integrates with Cloudinary for image storage and Mapbox for map functionality.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](CONTRIBUTING.md)

## Demo

Check out the live demo: [NestQuest Demo](https://nest-quest-isga.onrender.com/)

## User Manual
- Check this for [User Manual](USERMANUAL.md)

## Code of Conduct
- [Code of Conduct](CODE_OF_CONDUCT.md)

## Features

- **User Authentication**: Secure sign up and log in using Passport.js.
- **Listings Management**: Users can add, edit, and delete their property listings.
- **Reviews System**: Users can leave reviews and rate properties they have visited.
- **Map Integration**: Precise location plotting for each listing using Mapbox SDK for forward geocoding.
- **Image Storage**: Images are stored and managed securely with Cloudinary.
- **Responsive Design**: Fully responsive design using Bootstrap for seamless experience across devices.

## Tech Stack

- **Front-End**: HTML, CSS, Bootstrap, EJS
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Cloud Storage**: Cloudinary
- **Map Integration**: Mapbox SDK
- **Authentication**: Passport.js

## Dependencies

The following dependencies are used in this project:

```json
{
  "@mapbox/mapbox-sdk": "^0.16.0",
  "cloudinary": "^1.21.0",
  "connect-flash": "^0.1.1",
  "connect-mongo": "^5.1.0",
  "dotenv": "^16.4.5",
  "ejs": "^3.1.10",
  "ejs-mate": "^4.0.0",
  "express": "^4.19.2",
  "express-session": "^1.18.0",
  "joi": "^17.13.3",
  "method-override": "^3.0.0",
  "mongoose": "^8.5.2",
  "multer": "^1.4.5-lts.1",
  "multer-storage-cloudinary": "^4.0.0",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0",
  "passport-local-mongoose": "^8.0.0"

}
```

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/nestquest.git
    cd nestquest
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add your credentials:
    ```
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_KEY=your_cloudinary_key
    CLOUDINARY_SECRET=your_cloudinary_secret
    MAP_TOKEN=Your Mapbox Token
    ATLASDB_URL=Mongo Atlas URL
    MONGO_PASSWORD=Mongo Atlas Cluster Password
    SECRET=Your Secrete for the Session management
    PORT=Your Port Number
    ```

4. **Run the application**
    ```bash
    node app.js
    ```

5. **Visit the app**
   Open your browser and go to `http://localhost:<port number>`.


## Usage

- **Sign Up / Log In**: Users can create an account or log in to an existing one.
- **Explore Listings**: Browse through available property listings.
- **Add New Listing**: Add your property with detailed information and images.
- **View & Edit Listings**: Edit or remove your listings.
- **Leave Reviews**: Share your experience by leaving reviews on properties.


## Folder Structure

```
nestquest/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   ├── users.js
├── models/
│   ├── listing.js
│   ├── review.js
│   ├── user.js
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
├── routes/
│   ├── index.js
│   ├── listings.js
│   ├── reviews.js
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── reviews/
├── app.js
├── .env
├── package.json
└── README.md
```


## Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue to discuss what you would like to change.

## Creators

- **Suvadip Sana** - *Full Stack Developer* - [Linked IN](https://www.linkedin.com/in/suvadip-sana-b07a14243/)

## License 📜 

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

---

<div align="center">
  <p> 
    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.gif" alt="🌟" width="36" height="36" style="vertical-align:middle;">
    <strong style="font-size:1.5rem; vertical-align:middle;">If you find this project helpful, please consider giving it a star!</strong>
    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.gif" alt="🌟" width="36" height="36" style="vertical-align:middle;">
  </p>
</div>

---

<div align="center">
    <a href="#top">
        <img src="https://img.shields.io/badge/Back%20to%20Top-000000?style=for-the-badge&logo=github&logoColor=white" alt="Back to Top">
    </a>
</div>
