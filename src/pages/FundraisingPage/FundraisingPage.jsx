import React, { useEffect, useState } from "react";
import "./FundraisingPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Modal from "../../pages/Modal/Modal";
import { BsArrowDownShort } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allCampaigns } from "../../global/slice";
import Icon from "../../assets/Icon.svg";
import Tree from "../../assets/Tree.svg";
import Loading from "../../components/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";
import FundModal from "../../components/FundModal/FundModal";
import { MdQrCodeScanner } from "react-icons/md";
import { QRCodeSVG } from "qrcode.react";

const FundraisingPage = () => {
  const { id } = useParams();
  console.log(id, "id");
  const Nav = useNavigate();

  const [campaign, setCampaign] = useState(null);
  const [pay, setPay] = useState(false);
  const [oneData, setOneData] = useState(null);
  const [amount, setAmount] = useState(0);
  const [bank, setBank] = useState("");
  const [name, setName] = useState("" || "anonymous");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [datas, setDatas] = useState(null);
  const [toggles, setToggles] = useState(false);
  const [show, setShow] = useState(false);

  const payment = {
    amount: amount,
    // bank,
    name,
    email,
    message,
  };

  console.log(payment);

  const dispatch = useDispatch();
  const main = useSelector((state) => state.kindraise.allCampaigns);

  const get = () => {
    const url = "https://kindraise.onrender.com/api/v1/getallcampaigns";
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setOneData(res?.data?.allCampaigns);
        console.log(oneData, "one");
        const nae = res?.data?.allCampaigns.filter((data) => data.ev == id);
        console.log(nae);
        console.log(nae[0], "nae");
        setDatas(nae[0]);
        console.log(datas);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const [link, setLink] = useState(`https://kindraiseweb.vercel.app/fundraising-page/${id}`);

  const send = () => {
    // get()
    const api = `https://kindraise.onrender.com/api/v1/donate/${datas?.id}`;
    axios
      .post(api, payment)
      .then((res) => {
        console.log(res);
        // toast.success('payment received')
        setPay(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message)
      });
  };
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const debouncedSendUserDetails = debounce(send, 300); // 300ms delay

  function payKorapay() {
    window.Korapay.initialize({
      key: import.meta.env.VITE_Public_Key,
      reference: `kindraiser_${Date.now()}`,
      amount: Number(amount),
      currency: "NGN",
      customer: {
        name: name,
        email: email,
      },
      onClose: function () {},
      onSuccess: function (data) {
        debouncedSendUserDetails();
        setToggles(false);
        setTimeout(() => {
          location.reload();
        }, 2000);
      },
      onFailed: function (data) {},
    });
  }

  useEffect(() => {
    get();
  }, []);

  const donor = [
    { name: "Anonymous", date: "02/01/2024", amount: "10,000" },
    { name: "Chidi Benson", date: "02/01/2024", amount: "20,000" },
    { name: "Jack Samuel", date: "02/01/2024", amount: "2,000" },
    { name: "Lucy Eze", date: "02/01/2024", amount: "15,000" },
  ];

  const current = datas ? datas.currentAmount : 0;
  const goal = datas ? datas.goalAmount : 0;
  const percentage = goal ? (current / goal) * 100 : 0;

  return (
    <>
      <Toaster />
      <div className="fundRaiseBody">
        {toggles ? <FundModal setToggles={setToggles} id={id} /> : null}
        {loading ? <Loading /> : null}
        {pay && (
          <Modal
            payKorapay={payKorapay}
            datas={datas}
            setMessage={setMessage}
            setEmail={setEmail}
            setName={setName}
            setBank={setBank}
            setAmount={setAmount}
            setPay={setPay}
          />
        )}
        <Header />
        <div className="fundRaiseTitleBox">
          <h2>{loading ? "..." : <>{datas?.title}</>}</h2>
          <div>{loading ? "..." : <>{datas?.subtitle}</>}</div>
        </div>
        <div className="fundMainContentBox">
          <div className="fundMainContentWrapper">
            <div className="fundContentBox">
              <div className="fundContentInBox">
                <img src={datas?.profilePic} alt="pic" />
              </div>
              {/* <div className="donateBox mediaWeb">
                <div className="bonateInBox">
                  <button
                    className="fundRaiseDonateBtn"
                    onClick={() => setPay(true)}
                  >
                    Donate
                  </button>
                  <button
                    className="fundRaiseShareBtn"
                    onClick={(e) => setToggles(true)}
                  >
                    Share with friends
                  </button>
                </div>
              </div> */}
              <div className="donateBoxMedia">
                <div className="bonateInBox">
                  <button
                    className="fundRaiseDonateBtn"
                    onClick={() => setPay(true)}
                  >
                    Donate
                  </button>
                  <button
                    className="fundRaiseShareBtn"
                    onClick={(e) => setToggles(true)}
                  >
                    Share with friends
                  </button>
                </div>
                <div className="xtraPrintBox">
                  <div onClick={()=>setShow(!show)}><MdQrCodeScanner /> QR code</div>
                  {
                    show?<QRCodeSVG value={link} size={140}/>:null
                  }
                  {/* <div>hello</div> */}
                </div>
              </div>
              <div className="fundRaiseTrackBox">
                <div className="fundRaiseTrackMoney">
                  <h2>
                    ₦
                    {loading ? (
                      "..."
                    ) : (
                      <>{datas?.totalRaised?.toLocaleString()}</>
                    )}
                  </h2>
                  <div>raised of ₦{datas?.Goal?.toLocaleString()} goal</div>
                </div>
                <div className="trackBox">
                  <div className="progress-container">
                    {/* <div
                      className="progress-bar"
                      style={{ width: `${(datas?.totalRaised / datas?.Goal) * 100}%` }}
                    ></div> */}
                    <progress
                      value={datas?.totalRaised}
                      max={datas?.Goal}
                      className="progress-bar"
                    ></progress>
                  </div>
                </div>
                <div className="fundRaiseNoDonor">
                  {loading ? "..." : <>{datas?.supporters}</>} Donors
                </div>
              </div>
              <div className="fundRaiseOrgName">
                <div className="fundRaiseOrgCard">
                  <div className="orgImg">
                    {loading ? "..." : <>{datas?.npo?.organizationName[0]}</>}
                  </div>
                  <div>
                    <div className="fundRaiseOgBy">Organized by</div>
                    <div className="fundOrgName">
                      {loading ? "..." : <>{datas?.npo?.organizationName}</>}
                    </div>
                  </div>
                </div>
                <div className="fundRaiseOrgVerified">
                  {loading?.verified && "verified"}
                </div>
              </div>
              <div className="fundRaiseStoryBox">
                <h2>Story</h2>
                <div className="fundRaiseStory">
                  {loading ? "..." : <>{datas?.story}</> || "No story proided"}
                </div>
                <div className="showMoreStories">
                  {/* show more <BsArrowDownShort /> */}
                </div>
              </div>
              <div className="fundRaiseDonorBox">
                <h2>Donors</h2>
                <div className="fundDonorWrapper">
                  {donor.map((e, index) => (
                    <div key={index} className="fundDonor">
                      <div className="fundRaiseNameBox">
                        <div className="fundRaiseIconBox">
                          <img src={Icon} alt="" />
                        </div>
                        <div className="fundRaiseName">
                          <div className="fundRaiseUserName">{e.name}</div>
                          <div className="fundRaiseUserdate">{e.date}</div>
                        </div>
                      </div>
                      <div className="fundRaiseAmountBox">₦{e.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="fundRaiseSeeAll">
                  {/* <span>See All</span> */}
                </div>
              </div>
              <div className="fundRaiseUpdateBox">
                <h2>Update</h2>
                <div>No updates for this campaign yet.</div>
              </div>
            </div>
            <div className="donateBox">
              <div className="bonateInBox">
                <button
                  className="fundRaiseDonateBtn"
                  onClick={() => setPay(true)}
                >
                  Donate
                </button>
                <button
                  className="fundRaiseShareBtn"
                  onClick={(e) => setToggles(true)}
                >
                  Share with friends
                </button>
              </div>
              <div className="xtraPrintBox">
                  <div onClick={()=>setShow(!show)}><MdQrCodeScanner /> QR code</div>
                  {
                    show?<QRCodeSVG value={link} size={140}/>:null
                  }
                  {/* <div>hello</div> */}
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FundraisingPage;
