// Sample data for counselors
const counselors = [
  { id: 1, name: 'Mr. Gilbert Andoh', specialty: 'Counselling Psychologist', imagePath: '../pictures/man 1.png' },
  { id: 2, name: 'Mrs. Jane Smith', specialty: 'Clinical Psychologist - Counsellor', imagePath: '../pictures/woman 1.png' },
  { id: 3, name: 'Mrs. Emily Hackman', specialty: 'Clinical Psychologist - Counsellor', imagePath: '../pictures/woman 2.png' },
  { id: 4, name: 'Mr Andrews Johnson', specialty: 'Counselling Psychologist', imagePath: 'counselor.jpg' },
  { id: 5, name: 'Mrs. Joana Afriyie', specialty: 'Counselling Psychologist', imagePath: '../pictures/woman 3.png' },
 
];

// Function to render counselor cards
function renderCounselors(filteredCounselors = counselors) {
  const counselorCards = document.getElementById('counselorCards');
  counselorCards.innerHTML = ''; // Clear previous cards

  if (filteredCounselors.length === 0) {
    document.getElementById('noResults').style.display = 'block';
  } else {
    document.getElementById('noResults').style.display = 'none';
    filteredCounselors.forEach(counselor => {
      const card = document.createElement('div');
      card.classList.add('counselor-card');
      card.innerHTML = `
        <img src="${counselor.imagePath}" alt="${counselor.name}" class="counselor-image"/>
        <div class="counselor-info">
          <h3>${counselor.name}</h3>
          <p>${counselor.specialty}</p>
          <a href="../counselorDetails/counselorDetails.html?id=${counselor.id}" class="view-details-button">View Details</a>
        </div>
      `;
      counselorCards.appendChild(card);
    });
  }
}

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredCounselors = counselors.filter(counselor =>
    counselor.name.toLowerCase().includes(searchValue) ||
    counselor.specialty.toLowerCase().includes(searchValue)
  );
  renderCounselors(filteredCounselors);
});

// Scrolling functions
function scroll_left() {
  document.getElementById('counselorCards').scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
  document.getElementById('counselorCards').scrollBy({ left: 200, behavior: 'smooth' });
}

// Show the modal when the page loads
window.onload = function() {
  var modal = document.getElementById("signupModal");
  modal.style.display = "block";
};

// Close the modal
function closeModal() {
  var modal = document.getElementById("signupModal");
  modal.style.display = "none";
}
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Initialize the page with all counselors
renderCounselors();
