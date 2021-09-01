import firebase from "../firebase";

// const db = firebase.ref("/tutorials");


       // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyBcH9bj8Bm5vSZPbaBnBy-FS9IaGA_iI1M",
            authDomain: "fire-base-demo-0811.firebaseapp.com",
            databaseURL: "https://fire-base-demo-0811-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "fire-base-demo-0811",
            storageBucket: "fire-base-demo-0811.appspot.com",
            messagingSenderId: "236106228674",
            appId: "1:236106228674:web:0682d496d91782c16fac5b",
            measurementId: "G-K3QBQV5GH0"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);  
        const db = firebase.database(); 


class TutorialDataService {
  getAll() {
    return db;
  }

  create(tutorial) {
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();
