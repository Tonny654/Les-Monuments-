const monuments = {
    eiffel: {
      name: "Tour Eiffel",
      description: "La Tour Eiffel est un symbole de la France, située à Paris.",
      city: "Paris",
      coordinates: { x: 320, y: 220 }
    },
    "notre-dame": {
      name: "Notre-Dame de Paris",
      description: "La cathédrale Notre-Dame de Paris est un chef-d'œuvre de l'architecture gothique, située sur l'île de la Cité.",
      city: "Paris",
      coordinates: { x: 310, y: 210 }
    },
    "mont-saint-michel": {
      name: "Mont-Saint-Michel",
      description: "Le Mont-Saint-Michel est une île rocheuse de Normandie avec une abbaye médiévale.",
      city: "Normandie",
      coordinates: { x: 100, y: 150 }
    },
    versailles: {
      name: "Château de Versailles",
      description: "Le Château de Versailles est un palais royal situé à Versailles, connu pour ses jardins et son architecture.",
      city: "Versailles",
      coordinates: { x: 310, y: 180 }
    },
    pantheon: {
      name: "Panthéon de Paris",
      description: "Le Panthéon est un monument parisien, anciennement une église, devenu le lieu de sépulture de personnalités françaises.",
      city: "Paris",
      coordinates: { x: 305, y: 205 }
    }
  };
  
  document.querySelectorAll('.monument').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const monument = monuments[id];
      const infoContent = document.getElementById('info-content');
      const infoSection = document.getElementById('info-section');
      const marker = document.getElementById('marker');
  
      infoContent.innerHTML = `
        <h2>${monument.name}</h2>
        <p>${monument.description}</p>
        <p><strong>Ville :</strong> ${monument.city}</p>
      `;
  
      marker.style.left = monument.coordinates.x + 'px';
      marker.style.top = monument.coordinates.y + 'px';
  
      infoSection.classList.add('visible');
      infoSection.classList.remove('hidden');
    });
  });
  