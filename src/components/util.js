import {v4 as uuidv4 }  from 'uuid'

const chillHop = () => {
    return (
        [
            {
                name: "Cascade",
                artist: "Knowmadic",
                cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
                id: uuidv4(),
                active: true,
                audio: "https://mp3.chillhop.com/serve.php/?mp3=13091"
            },
            {
                name: "Sunrise Hike",
                artist: "Ruck P",
                cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
                id: uuidv4(),
                active: false,
                audio: "https://mp3.chillhop.com/serve.php/?mp3=12133"
            }
        ]
    );
};

export default chillHop;