import { useState } from "react"

export const QRCode = () => {

    const [image, setImage] = useState();
    const [load, setLoad] = useState(false);
    const [qrData, setQrData] = useState("");
    const [qrSize, setQrSize] = useState(150);
    

    async function generateQR() {
        setLoad(true);
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImage(url);
        } catch (error) {
            console.error("Error generating QR Code ", error);
        } finally {
            setLoad(false);
        }

    }

    function downloadQR() {
        fetch(image)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }).catch((error) =>{
                console.error("Error downloading QR code ", error);
            });
    }

  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {load && <p>Loading...</p>}
        {image && <img src={image} alt="qr image" className="QRImage" />}
        <div>
        <label htmlFor="dataInput" className="input-label">
            Data for QR Code:
        </label>
        <input type="text" value={qrData} id="dataInput" placeholder="Enter data for QR code" onChange={(e) => setQrData(e.target.value)} />
        <label htmlFor="sizeInput" className="input-label">
            Image size (e.g., 150):
        </label>
        <input type="text" value={qrSize} id="sizeInput" placeholder="Enter data for image size" onChange={(e) => setQrSize(e.target.value)}/>
        <button className="generate" disabled = {load} onClick={generateQR}>Generate QR Code</button>
        <button className="download" onClick={downloadQR}>Download QR Code</button>
    </div>
    </div>
  )
}
