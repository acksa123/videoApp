const videosData = [
    {
        title: "Mr Bean",
        description: "Food SHOPPING With Bean! | Mr Bean Cartoon Season 1",
        category: "cartoon",
        url: "https://www.youtube.com/embed/RyP5iLAaAac"
      },
      {
        title: "KFC Style Popcorn Chicken",
        description: "Homemade KFC Style Popcorn Chicken | Juicy Popcorn chicken",
        category: "food",
        url: "https://www.youtube.com/embed/gqOTOLldgs4" 
      },
      {
        title: " Snacks Recipe",
        description: "6 Mouthwatering Snacks Recipe",
        category: "cartoon",
        url:"https://www.youtube.com/embed/njAWJHGqsPs"
      },
      {
        title: " Money Heist ",
        description: "Money Heist - Part 2 | Official Trailer | Netflix",
        category: "series",
        url:"https://www.youtube.com/embed/ZAXA1DV4dtI" 
      },
      
      {
        title: " TEDx Talks",
        description: "A well educated mind vs a well formed mind: Dr. Shashi Tharoor at TEDxGateway 2013",
        category: "Motivational speech",
        url:"https://www.youtube.com/embed/kcW4ABcY3zI" 
      },
      {
        title: " MS Dhoni ",
        description: "MS Dhoni BEST FINISH IN ODI HISTORY",
        category: "Sports",
        url:"https://www.youtube.com/embed/kYeJk38rZ3o"
      },
      {
        title: " Arijit Singh ",
        description: "Arijit Singh MTV India Tour 2018 | Magical Voice | (1080p HD)",
        category: "Music",
        url:"https://www.youtube.com/embed/46TyJXgt7AM" 
      },
      {
        title: "Best Home Decor Ideas  ",
        description: "Amazing Table Lamb | Cement Pot Light | Night Lamb Ideas | Cement Hand Light | Best Home Decor Ideas",
        category: "Crafts",
        url:"https://www.youtube.com/embed/S3wdHPuJxNs" 
      },
      {
        title: "Minions ",
        description: "Minions Mini Movie 2019 - Despicable Me Animations Funny Clips",
        category: "Cartoon",
        url:"https://www.youtube.com/embed/sL3kLxsy-Lg" 
      },
      {
        title: "Cricket ",
        description: "Pandya's power seals series win for India with epic chase | Dettol T20I Series 2020",
        category: "Sports",
        url:"https://www.youtube.com/embed/dMGRTR97Ito" 
      }
  ];
  

  
 
  
  function videoTemplate(video) {
    return `
      <div class="videoPlayer">
      <iframe  class="videoLink" src="${video.url}" ></iframe
      <h2 class="video-name">${video.title} </h2>
    <h3 class="description">${video.description}</h3>

      </div>
    `;
  }
 
  
  document.getElementById("app").innerHTML = `
  
    ${videosData.map(videoTemplate).join("")}
    
  `;
  