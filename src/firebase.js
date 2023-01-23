import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, getDocs,getDoc, doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBk_BG5X7BHY7l9i7XBx86Get04AIoZ6ls",
    authDomain: "blog-e2130.firebaseapp.com",
    projectId: "blog-e2130",
    storageBucket: "blog-e2130.appspot.com",
    messagingSenderId: "896270716065",
    appId: "1:896270716065:web:0be0105a480dbb59b8f4e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Databse
const db = getFirestore(app);

// Add data to database
export const addData = async (title, subTitle, content) => {

    const blog = {
        title, subTitle, content, createdAt: new Date()
    }

    try {
        const docRef = await addDoc(collection(db, "blogs"), blog);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getPostData = async (id) => {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        alert('No data found!');
    }
}

export const getAllData = async () => {
    const q = query(collection(db, "blogs"));

    const querySnapshot = await getDocs(q);

    return querySnapshot;
}

export const removeData = async (remId) => {
    await deleteDoc(doc(db, "blogs", remId));
}