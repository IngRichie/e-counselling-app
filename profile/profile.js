// Import Firebase services from firebase.js
import { db, auth } from '../firebase';

// Function to get user data
function getUserData(uid) {
    db.collection('students').doc(uid).get().then(doc => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('profileName').textContent = data.fullName || 'Full Name';
            document.getElementById('profileEmail').textContent = data.email || 'user@example.com';
            document.getElementById('profileUsername').textContent = data.username || 'username';
            document.getElementById('profileAddress').textContent = data.address || '123 Main St, City, Country';
            document.getElementById('profilePicture').src = data.profilePicture || '../pictures/students.jpg';
        } else {
            console.log('No such document!');
        }
    }).catch(error => {
        console.log('Error getting document:', error);
    });
}

// Monitor auth state and get user data
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, use the uid to fetch their document
        const uid = user.uid;
        getUserData(uid);
    } else {
        // User is signed out
        console.log('User is not signed in.');
    }
});
