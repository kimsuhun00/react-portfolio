// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk3k4ZR0xqQcu0zjzzpoXFOfVuONnG60s",
  authDomain: "github-a9a0b.firebaseapp.com",
  databaseURL: "https://github-a9a0b-default-rtdb.firebaseio.com",
  projectId: "github-a9a0b",
  storageBucket: "github-a9a0b.appspot.com",
  messagingSenderId: "868957033818",
  appId: "1:868957033818:web:d8830a5bbd30a3430b4f63",
  measurementId: "G-NBHWGTMJG3"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 이 값을 사용합니다.
export default firestore;