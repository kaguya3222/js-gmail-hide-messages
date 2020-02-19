const gmailTables = document.querySelectorAll("table");
const mailTable = gmailTables[6]; // Getting table of messages.

for (let i = 0; i < mailTable.rows.length; i++) {
	if ((i + 1) % 3 === 0)  mailTable.rows[i].style.display = "none";
}