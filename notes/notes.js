const fs = require('fs');

const fetchNotes = () => {
	try {
		const allNotes = fs.readFileSync('notes-data.json');
		const allNotesParsed = JSON.parse(allNotes);
		return allNotesParsed;
	} catch (e) {
		return [];
	}
}

const writeNotes = (allNotes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(allNotes));
};

const logNote = (note) => {
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

const add = (title, body) => {
	const allNotes = fetchNotes();
	const note = {
		title,
		body
	};
	const duplicateNotes = allNotes.filter((note) => note.title === title); // note with title same as current title. If there is a duplicate already there, we should not add it

	if (duplicateNotes.length === 0) {
		allNotes.push(note);
		writeNotes(allNotes);
		return note;
	}
}

const remove = (title) => {
	const allNotes = fetchNotes();
	const filteredNotes = allNotes.filter((note) => note.title !== title);

	if (filteredNotes.length === (allNotes.length - 1)) {
		writeNotes(filteredNotes);
		return true;
	}
	return false;
}

const read = (title) => {
	const allNotes = fetchNotes();
	const filteredNote = allNotes.filter((note) => note.title === title);
	if (filteredNote.length === 1) {
		return filteredNote[0];
	}
}

const list = () => {
	const allNotes = fetchNotes();
	console.log(`Total Notes: ${allNotes.length}`);
	allNotes.forEach((note) => {
        logNote(note);
	});
}

module.exports = {
	add,
	remove,
	read,
	list,
	logNote
};
