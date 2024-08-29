// // Firebase configuration
// const firebaseConfig = {
//     // Your Firebase config here
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// // Get user data from Firestore
// db.collection('students').doc('YOUR_USER_DOC_ID').get().then(doc => {
//     if (doc.exists) {
//         const data = doc.data();
//         document.getElementById('profileName').textContent = data.fullName || 'Full Name';
//         document.getElementById('profileEmail').textContent = data.email || 'user@example.com';
//         document.getElementById('profileUsername').textContent = data.username || 'username';
//         document.getElementById('profileAddress').textContent = data.address || '123 Main St, City, Country';
//         document.getElementById('profilePicture').src = data.profilePicture || '../pictures/students.jpg';
//     } else {
//         console.log('No such document!');
//     }
// }).catch(error => {
//     console.log('Error getting document:', error);
// });
