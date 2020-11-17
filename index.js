const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Start here */
// app.get('/', (req, res) => {
// 	res.redirect('/HomePage');
// });

const usersController = require('./controllers/users');
app.use('/users', usersController);
app.get('/', (req, res) => {
	res.redirect('/posts');
});
 const postCts=require('./controllers/posts')
 app.use('/posts',postCts)
const comCts=require('./controllers/comments')
app.use('/comments',comCts)

/* end Here */
app.use((err, req, res, next) => {
	console.log('========ERROR========');
	console.log(err);
	console.log('method:', req.method);
	console.log('body:', req.body);
	console.log('======================');
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
