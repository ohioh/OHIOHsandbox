importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyDvwOYnaOJbki9oPgplmS-0PNfDloy37ck",
	authDomain: "ohioh-research.firebaseapp.com",
	databaseURL: "https://ohioh-research.firebaseio.com",
	projectId: "ohioh-research",
	storageBucket: "ohioh-research.appspot.com",
	messagingSenderId: "862626210469",
	appId: "1:862626210469:web:acc54e3b362302e110634c",
	measurementId: "G-ZQ27VXCH81"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});

