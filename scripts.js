document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const budget = document.getElementById('budget').value;
    const weather = document.getElementById('weather').value;
    const activities = document.getElementById('activities').value;

    console.log('Budget:', budget);
    console.log('Weather:', weather);
    console.log('Activities:', activities);

    const recommendations = getRecommendations(budget, weather, activities);

    console.log('Filtered Recommendations:', recommendations);
    displayRecommendations(recommendations);
});

function getRecommendations(budget, weather, activities) {
    const destinations = [
        { 
            name: 'Maldives', 
            budget: 'low', 
            weather: 'sunny', 
            activities: 'beach', 
            description: 'Beautiful beaches and luxury resorts.', 
            image: 'images/beach2.png',
            video: 'http://www.youtube.com/watch?v=R-07lW6jsDw' 
        },
        { 
            name: 'Switzerland', 
            budget: 'high', 
            weather: 'snowy', 
            activities: 'hiking', 
            description: 'Scenic mountains and winter sports.', 
            image: 'images/beach2.png',
            video: 'http://www.youtube.com/watch?v=R-07lW6jsDw' 
        },
        { 
            name: 'Thailand', 
            budget: 'medium', 
            weather: 'sunny', 
            activities: 'beach', 
            description: 'Affordable tropical paradise.', 
            image: 'images/beach1.png',
            video: 'http://www.youtube.com/watch?v=R-07lW6jsDw' 
        },
        { 
            name: 'Japan', 
            budget: 'medium', 
            weather: 'rainy', 
            activities: 'city', 
            description: 'Vibrant cities and rich culture.', 
            image: 'images/country1.png',
            video: 'http://www.youtube.com/watch?v=R-07lW6jsDw' 
        },
        { 
            name: 'Nepal', 
            budget: 'low', 
            weather: 'snowy', 
            activities: 'hiking', 
            description: 'Trekking in the Himalayas.', 
            image: 'images/temple1.png',
            video: 'http://www.youtube.com/watch?v=R-07lW6jsDw' 
        },
        { 
            name: 'Spain', 
            budget: 'low', 
            weather: 'sunny', 
            activities: 'city', 
            description: 'Historic cities and lively festivals.', 
            image: 'images/temple2.png',
            video: 'http://www.youtube.com/watch?v=R-07lW6jsDw' 
        }
    ];

    return destinations.filter(destination => 
        destination.budget === budget && 
        destination.weather === weather && 
        destination.activities === activities
    );
}

function displayRecommendations(recommendations) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (recommendations.length === 0) {
        resultsContainer.innerHTML = '<p>No recommendations found based on your preferences.</p>';
        return;
    }

    recommendations.forEach(destination => {
        const destinationDiv = document.createElement('div');
        destinationDiv.classList.add('destination');

        const image = document.createElement('img');
        image.src = destination.image;
        image.alt = destination.name;

        const name = document.createElement('h3');
        name.textContent = destination.name;

        const description = document.createElement('p');
        description.textContent = destination.description;

        const videoLink = document.createElement('a');
        videoLink.href = destination.video;
        videoLink.target = '_blank';
        videoLink.textContent = 'Watch video';

        destinationDiv.appendChild(image);
        destinationDiv.appendChild(name);
        destinationDiv.appendChild(description);
        destinationDiv.appendChild(videoLink);

        resultsContainer.appendChild(destinationDiv);
    });
}
