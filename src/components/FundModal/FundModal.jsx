import React, { useRef, useState } from 'react'
import './FundModal.css'
import { QRCodeSVG } from 'qrcode.react';
import { GoDownload } from 'react-icons/go';
import { PiPrinterThin } from 'react-icons/pi';
import { BiCopy } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const FundModal = ({setToggles}) => {
  const {id} = useParams()


  // const Nav = useNavigate()
  const [link, setLink] = useState(`https://kindraiseweb.vercel.app/fundraising-page/${id}`);
  const qrRef = useRef();
  const [num, setNum] = useState();
  const handleDownload = () => {  
    // Get the SVG of the QR code  
    const svg = qrRef.current.querySelector("svg");  
    const serializer = new XMLSerializer();  
    const source = serializer.serializeToString(svg);  
    const encodedData = encodeURIComponent(source);  
    
    // Create a download link  
    const link = document.createElement("a");  
    link.href = `data:image/svg+xml;charset=utf-8,${encodedData}`;  
    link.download = "qrcode.svg";  
    link.click();  
  }; 

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  
  // const handleDownload = () => {  
  //   // Get the SVG of the QR code  
  //   const svg = qrRef.current.querySelector("svg");  
  //   const serializer = new XMLSerializer();  
  //   const source = serializer.serializeToString(svg);  
  //   const encodedData = encodeURIComponent(source);  
    
  //   // Create a download link  
  //   const link = document.createElement("a");  
  //   link.href = `data:image/svg+xml;charset=utf-8,${encodedData}`;  
  //   link.download = "qrcode.svg";  
  //   link.click();  
  // };  
  return (
    <div className='fundModalBody'>
      <div className='fundModalWrapper'>
        <div className='fundModalHeader'>
          <span onClick={()=>setToggles(false)}>
            X
          </span>
        </div>
        <div className="codeHolder" ref={qrRef}>
            <QRCodeSVG value={link} size={140}/>
          </div>
          <button className="codeDbBtn" onClick={handleDownload}><GoDownload />Download</button>
          {/* <button className="codeDbBtn" ><PiPrinterThin />Print</button> */}
        <div>
        <div className="inputLinkBox">
              <input
                type="text"
                value={link}
                readOnly
                className="linkInput"
              />
              <div onClick={copyToClipboard}><BiCopy size={25} cursor="pointer"/></div>
            </div>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default FundModal