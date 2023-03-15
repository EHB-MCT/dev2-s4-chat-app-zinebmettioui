"use strict";

const chat = {
	author: "yourName",
	init() {
		this.fetchMessages();
	},

	sendMessage() {},
	fetchMessages() {
		// TODO's get message
		fetch("https://dev2chat.onrender.com/messages")
			.then(function (response) {
				return response.json();
			})
			.then(function (messages) {
				console.log(messages);
				// TODO's show messages (using renderMessages)
				document.querySelector("messageContainer").innerHTML = messages[0].messages;
			});
	},

	renderMessage(message) {},
};
// TODO's messages --> HTML

chat.init();
