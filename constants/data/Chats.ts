export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Mustapha',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
	}, {
		id: 'u2',
		name: 'Gtan',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Gtan!',
		createdAt: '2022-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Mustapha',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2022-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Gtan',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2022-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Gtan',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2022-09-30T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Mustapha',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2022-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Mustapha',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2022-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Gtan',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2022-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Mustapha',
		},
	},{
		id: 'm8',
		content: 'You must work hard get success to change life',
		createdAt: '2022-10-01T05:44:00.000Z',
		user: {
			id: 'u1',
			name: 'Mustapha',
		},
	}, {
		id: 'm9',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2022-10-01T05:51:00.000Z',
		user: {
			id: 'u2',
			name: 'Gtan',
		},
	}]
}

