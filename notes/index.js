const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs
    .command('add', 'Add a note', {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		},
		body: {
			describe: 'Body of note',
			demand: true,
			alias: 'b'
		}
	})
	.command('remove', 'Remove a note', {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		}
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		}
	})
	.help()
	.argv;

const command = argv._[0];

if (command === 'add') {
	const note = notes.add(argv.title, argv.body);
	if (note) {
		console.log('Note has been successfully added!!!');
		notes.logNote(note);
	} else {
		console.log(`Note with ${argv.title} already exists.`);
	}
} else if (command === 'remove') {
	const noteRemovedSuccess = notes.remove(argv.title);
	if (noteRemovedSuccess) {
		console.log(`Note with title ${argv.title} successfully removed`);
	} else {
		console.log(`Note with title ${argv.title} not found`);
	}
} else if (command === 'list') {
    notes.list();
} else if (command === 'read') {
	const note = notes.read(argv.title);
	if (note) {
		console.log('Note found!!!');
		notes.logNote(note);
	} else {
		console.log(`Note with title ${argv.title} not found`);
	}
} else {
	console.log("Command not recognised!!!");
}
