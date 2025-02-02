require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// API route to serve podcast data
app.get('/api/podcasts', (req, res) => {
    const podcasts = [
        { title: "Healthcare Podcasts", url: "https://open.spotify.com/embed/playlist/1RpSCEqhwp8nt78rE4NgBl" },
        { title: "Health & Fitness Podcasts", url: "https://open.spotify.com/embed/show/5QAWGLhMbBzATD2D4lnMKM" },
        { title: "Wellness Podcasts", url: "https://open.spotify.com/embed/playlist/4FeJZhUyV8gZVjUjRj3zJl" }
    ];
    res.json(podcasts);
});

// Serve the static HTML file
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
