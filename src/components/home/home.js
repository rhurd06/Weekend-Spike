import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';

function home() {
    const [image, setImage] = useState();

    //loads the image if there's an image to be loaded
    //otherwise, sends an error
    const loadImage = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImage(data);
        }
        catch (error) {
            console.log(error);
        }
    }; //end loadImage

    //on page load
    useEffect(() => {
        loadImage();
    }, []);

    return(
        <div>
            <h1> Gallery </h1>
            <div>
                {image && image.map((image, i) => {
                    <Image
                        key={i}
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                    />
                })}
            </div>
        </div>
    );
}//end home

export default home;