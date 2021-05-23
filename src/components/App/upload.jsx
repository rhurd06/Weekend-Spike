import React, { useState } from 'react';

function upload() {
    const [fileInput, setFileInput] = useState('');
    const [preview, setPreview] = useState('');
    const [chosenFile, setChosenFile] = useState('');


    //handles any changes to fileInput
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        previewFile(file);
        setChosenFile(file);
        setFileInput(event.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result);
        };
    };


    //sumbits the new file
    const handleSubmitFile = (event) => {
        event.preventDefault();
        if (!chosenFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.log(`Something went wrong`);
        };
    };

    //upload the image to the DOM
    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: {'Content-Type': 'application/json'},
            });
            setFileInput('');
            setPreview('');
        }
        catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <h1>Image Upload</h1>
            <form onSubmit={handleSubmitFile}>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInput}
                />
                <button type="submit">Submit</button>
            </form>
            {preview && (
                <img src={preview}
                    alt="chosen"
                />
            )}
        </div>
    );
}//end upload

export default upload;