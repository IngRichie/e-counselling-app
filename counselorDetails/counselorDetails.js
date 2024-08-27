// Sample data for counselors (could be fetched from an API or server)
const counselors = [
    { id: 1, name: 'John Doe', specialty: 'Anxiety', imagePath: '../counselorSession/counselor.jpg', experience: 5, language: 'English', bio: 'John specializes in treating anxiety through CBT and mindfulness techniques.' },
    { id: 2, name: 'Jane Smith', specialty: 'Depression', imagePath: '../counselorSession/counselor.jpg', experience: 8, language: 'English', bio: 'Jane has extensive experience in managing depression with a focus on personalized therapy.' },
    { id: 3, name: 'Emily Johnson', specialty: 'Stress Management', imagePath: '../counselorSession/counselor.jpg', experience: 4, language: 'English', bio: 'Emily helps individuals manage stress with a combination of therapy and lifestyle changes.' },
    // Add more counselors as needed
  ];
  
  function getCounselorById(id) {
    return counselors.find(counselor => counselor.id === parseInt(id, 10));
  }
  
  function loadCounselorDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const counselorId = urlParams.get('id');
    const counselor = getCounselorById(counselorId);
  
    if (counselor) {
      document.getElementById('counselorImage').src = counselor.imagePath;
      document.getElementById('experienceYears').textContent = counselor.experience;
      document.getElementById('language').textContent = counselor.language;
      document.getElementById('name').textContent = counselor.name;
      document.getElementById('position').textContent = counselor.specialty;
      document.getElementById('bio-content').textContent = counselor.bio;
    } else {
      document.getElementById('container').innerHTML = '<p>Counselor not found</p>';
    }
  }
  
  // Load counselor details when the page loads
  window.onload = loadCounselorDetails;
  