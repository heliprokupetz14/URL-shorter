import connection from '../config/db.config.js'

connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

app.use(express.json({
    extended: false
})) 
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
