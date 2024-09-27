const mongoose = require('mongoose')
main().then(() => {
    console.log('Connected to the database of ecomart2');
})
.catch(err => console.log('Failed to connect to the database of ecomart2', err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/ecomart2', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
}