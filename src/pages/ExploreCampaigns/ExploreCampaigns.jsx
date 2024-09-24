import React, {useEffect} from 'react'
import Header from '../../components/Header/Header'
import MoreCampaigns from '../MoreCampaigns/MoreCampaigns'
import Footer from '../../components/Footer/Footer'


const ExploreCampaign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className='explore'>
    <Header/>
    <MoreCampaigns/>
    <Footer/>
    </div>
    </>
  )
}

export default ExploreCampaign