const dbconect = require('./dbconect')
const {dbservice} = require('./dbservice')
const {createAdmin} = require('./dbservice')
const mongoose = require('mongoose');




const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Admin } = require('mongodb');


const {use} = require("express/lib/router");
const ArtistDb = require('./models/artist');
const UserDb = require('./models/user');    
const giftDb = require('./models/gift');
const ordertDb = require('./models/order');
const theaterDb = require('./models/theater');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



router.post('/register/artist/', async (req, res) => {
    try {

        const { username, password, bio} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);


        const token = jwt.sign({ username }, 'your_secret_key');

        artistData = {
            name: username,
            password:hashedPassword,
            bio:bio,
            token: token
        }

        const newAdmin = await ArtistDb.create(artistData);


        // Отправляем токен и сообщение об успешной регистрации
        res.status(201).json({ token, message: 'Registration admin successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/register/user/', async (req, res) => {
    try {
        // Получаем данные из тела запроса
        const { username, password, mail} = req.body;

        // Хэшируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создаем JWT токен
        const token = jwt.sign({ username }, 'your_secret_key');

        driverData = {
            name: username,
            mail: mail,
            password:hashedPassword,
            token: token
        }

        const newDriver = await UserDb.create(driverData);
        // Отправляем токен и сообщение об успешной регистрации
        res.status(201).json({ token, message: newDriver });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/create/gift/', async (req, res) => {

    let parentData;
    try {
        // Получаем данные из тела запроса
            const {name, description,price, img} = req.body;

               
                parentData = {
                    name: name,
                    description: description,
                    price: price,
                    image_url:img
                }
          
            const newParent = await giftDb.create(parentData);
        
            res.status(201).json({ message: 'Registration parent successful'});
        } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
});

router.post('/create/theater/', async (req, res) => {

    try {
        // Получаем данные из тела запроса
            const {name, artists} = req.body;

               
                parentData = {
                    name: name,
                    artists: artists,
                }
          
            const newParent = await theaterDb.create(parentData);
        
            res.status(201).json({message: 'Registration parent successful'});
        } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
});

router.post('/create/gift/', async (req, res) => {

    try {
        // Получаем данные из тела запроса
            const {name, description, image_url, price} = req.body;

               
                giftData = {
                    name: name,
                    description: description,
                    image_url:image_url,
                    price:price
                }
          
            const newParent = await giftDb.create(giftData);
        
            res.status(201).json({message: 'Registration parent successful'});
        } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
});




router.post('/make/order/', async (req, res) => {

    try {
        // Получаем данные из тела запроса
            const {user_id, artist_id, gift_id} = req.body;

               
                ordertData = {
                    user_id: user_id,
                    artist_id: artist_id,
                    gift_id:gift_id
                }
          
            const newParent = await ordertDb.create(ordertData);
        
            res.status(201).json({message: 'Registration parent successful'});
        } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
});



// Роут для регистрации
router.post('/register/child/', async (req, res) => {
    try {
        // Получаем данные из тела запроса
        const { username, password,id_num, address, lg, lt} = req.body;

        // Хэшируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создаем JWT токен
        const token = jwt.sign({ username }, 'your_secret_key');

        home_data = {
            latitude: lt,
            longitude: lg,
        }
        const home = await LocationDB.create(home_data);
        // let new_home_point= null;
        // home.save()
        //     .then((home) => {
        //         // Получение идентификатора новой записи
        //         new_home_point = home.id;})

        childData = {
            full_name: username,
            password:hashedPassword,
            address: address,
            id_num:id_num,
            home_point: home,
            token: token
        }

        const newChild = await ChildDb.create(childData);
        // Отправляем токен и сообщение об успешной регистрации
        res.status(201).json({ token, message: 'Registration child successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
