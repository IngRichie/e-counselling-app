// Sample data for counselors (could be fetched from an API or server)
const counselors = [
  {
      id: 1,
      name: 'Mr. Gilbert Andoh',
      specialty: 'Counseling Psychologist',
      imagePath: '../pictures/man 1.png',
      experience: 10,
      language: 'English, Twi',
      bio: 'Mr. Gilbert Andoh is a seasoned Counseling Psychologist with over 10 years of experience in helping individuals navigate life\'s challenges. He specializes in Cognitive Behavioral Therapy (CBT) and mindfulness techniques to address anxiety, depression, and other psychological concerns. His empathetic approach and deep understanding of human behavior have made him a trusted figure in the mental health community. Gilbert is fluent in English and Twi, allowing him to connect with a diverse range of clients.'
  },
  {
      id: 2,
      name: 'Mrs. Jane Smith',
      specialty: 'Clinical Psychologist - Counselor',
      imagePath: '../pictures/woman 1.png',
      experience: 12,
      language: 'English',
      bio: 'Mrs. Jane Smith is a highly experienced Clinical Psychologist with a focus on depression and mood disorders. With over 12 years in the field, she has developed a comprehensive approach that combines traditional psychotherapy with modern techniques such as Acceptance and Commitment Therapy (ACT) and Dialectical Behavior Therapy (DBT). Jane’s compassionate nature and commitment to her clients’ well-being make her a sought-after counselor for those dealing with complex mental health issues.'
  },
  {
      id: 3,
      name: 'Mrs. Emily Hackman',
      specialty: 'Clinical Psychologist - Counselor',
      imagePath: '../pictures/woman 2.png',
      experience: 7,
      language: 'English, Fante',
      bio: 'Mrs. Emily Hackman is a Clinical Psychologist with a passion for stress management and mental wellness. With 7 years of experience, Emily has helped countless clients achieve balance in their lives through a combination of therapeutic techniques, including mindfulness, relaxation training, and behavioral modification. Her approach is holistic, considering both the mental and physical aspects of stress. Emily is fluent in English and Fante, making her accessible to a broad client base.'
  },
  {
      id: 4,
      name: 'Mr. Andrews Johnson',
      specialty: 'Counseling Psychologist',
      imagePath: 'counselor.jpg',
      experience: 9,
      language: 'English',
      bio: 'Mr. Andrews Johnson is an experienced Counseling Psychologist known for his work in cognitive-behavioral therapy and family counseling. With 9 years of dedicated service, he has guided numerous individuals and families through challenging times, helping them build stronger relationships and develop healthier coping mechanisms. Andrews believes in a collaborative approach to therapy, empowering his clients to take an active role in their mental health journey.'
  },
  {
      id: 5,
      name: 'Mrs. Joana Afriyie',
      specialty: 'Counseling Psychologist',
      imagePath: '../pictures/woman 3.png',
      experience: 6,
      language: 'English, Akan',
      bio: 'Mrs. Joana Afriyie is a Counseling Psychologist with a focus on personal development and life coaching. Over her 6 years of practice, Joana has worked with clients from various backgrounds, helping them overcome personal obstacles and achieve their life goals. Her sessions often integrate techniques from positive psychology and motivational interviewing, tailored to the unique needs of each client. Joana is fluent in English and Akan, providing her services to a wide-ranging audience.'
  }
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
  