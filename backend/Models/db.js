const mongoose = require('mongoose')
main().then(() => {
    console.log('Connected to the database of ECOMART');
})
.catch(err => console.log('Failed to connect to the database of ECOMART', err));

async function main() {
await mongoose.connect('mongodb://localhost:27017/ECOMART', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
}