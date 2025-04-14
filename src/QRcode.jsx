import React, { useState } from 'react'

const QRcode=()=>{
    const [url, setUrl]=useState('')
    const [show,setShow]=useState(false)
    const handleSubmit= (e) =>{
        e.preventDefault()
        setShow(true)
    }
    return (
        <div className="qr-code-container">
            <form onSubmit={handleSubmit} className="qr-code-form">
                <input 
                    type="url" 
                    name="url" 
                    value={url} 
                    onChange={(e)=> setUrl(e.target.value)} 
                    placeholder='Enter Your URL to generate QR code'
                    className="qr-code-input"
                />
                <input 
                    type="submit" 
                    value="Generate QR Code"
                    className="qr-code-button"
                />
            </form>
            {
                show &&(
                    <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`}
                        className="qr-code-image"
                        alt="Generated QR Code"
                    />
                )
            }
        </div>
    )
}
export default QRcode;
