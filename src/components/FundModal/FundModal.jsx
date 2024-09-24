import React, { useRef, useState } from 'react'
import './FundModal.css'
import { QRCodeSVG } from 'qrcode.react';
import { GoDownload } from 'react-icons/go';
import { PiPrinterThin } from 'react-icons/pi';
import { BiCopy } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { IoCheckmarkDoneOutline, IoCloseOutline } from 'react-icons/io5';
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const FundModal = ({setToggles}) => {
  const {id} = useParams()


  
  // const Nav = useNavigate()
  const [link, setLink] = useState(`https://kindraiseweb.vercel.app/fundraising-page/${id}`);
  const qrRef = useRef();
  const [num, setNum] = useState();
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
  const [show, setShow] = useState(false)

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
    // <div className='fundModalBody'>
    //   <div className='fundModalWrapper'>
    //     <div className='fundModalHeader'>
    //       <span onClick={()=>setToggles(false)}>
    //         X
    //       </span>
    //     </div>
    //     <div className="codeHolder" ref={qrRef}>
    //         <QRCodeSVG value={link} size={140}/>
    //       </div>
    //       <button className="codeDbBtn" onClick={handleDownload}><GoDownload />Download</button>
    //       {/* <button className="codeDbBtn" ><PiPrinterThin />Print</button> */}
    //     <div>
    //     <div className="inputLinkBox">
    //           <input
    //             type="text"
    //             value={link}
    //             readOnly
    //             className="linkInput"
    //           />
    //           <div onClick={copyToClipboard}><BiCopy size={25} cursor="pointer"/></div>
    //         </div>
    //     </div>
    //   </div>
    //   <Toaster/>
    // </div>
    <div className='shareModalBody'>
      <div className='shareModalWrapper'>
        <div className='shareModalHead'>
          <h3>Share: Your sharing matters!</h3>
          <div onClick={()=>setToggles(false)}><IoCloseOutline size={30} cursor="pointer"/></div>
        </div>
        <div className='shareModalTextBox'>Did you know that fundraiser shared across multiple channels <span>raise as much as 6.5x more funds?</span>  It is thanks to you that this fundraiser has a chance to be successful!</div>
        <div className='shareOnSocialsBox'>
          <div className='shareOnSocialsText'>Share on socials</div>
          <div className='shareOnSocialsIcons'>
            <a href="https://www.facebook.com">
          <FaFacebook size={45} cursor="pointer" color='#1877F2' />
            </a>
            <a href="https://www.instagram.com">
          <FaInstagram size={45} cursor="pointer" color='#BC3081 cursor="pointer"'/>
            </a>
            <a href="https://www.twitter.com">
          <FaTwitter size={45} cursor="pointer" color='#1DA1F2'/>
            </a>
            <a href="https://www.linkedin.com">
          <FaLinkedin size={45} cursor="pointer" color='#0A66C2'/>
            </a>
          </div>
        </div>
          <div className='shareOnMessangerBox'>
            <div className='shareOnMessangerText'>Share on messenger</div>
            <div className='shareOnMessangerIcon'>
              <a href="https://www.facebook.com">
              <FaFacebookMessenger size={45} color='#007FFF'/>
              </a>
              <a href="https://www.whatsapp.com">
              <RiWhatsappFill size={45} color='#67C15E'/>
              </a>
            </div>
          </div>
          <div className='campaignUrlBox'>
            <span>
              Campaign URL
            </span>
            <div className='campaignBoxInputHolder'>
              <input type="text" value={link}/>
              <button onClick={copyToClipboard}>copy</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FundModal