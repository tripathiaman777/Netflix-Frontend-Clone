import React from 'react'
import { tabLabels } from './constant';
import { Link } from 'react-router-dom'
import "./Tabs.css";
const Tabs = ({activeTabName,onClickTab}) => {
      const {CANCEL_AT_ANYTIME,PICK_YOUR_PRICE,WATCH_ANYWHERE}=tabLabels;


      const renderTabTitle=(tabTitle,isActive,icon,id)=>(
            <div
            
             onClick={()=>onClickTab(tabTitle)}      
            id={id} className={`tab-item ${isActive && "tab-border"}`}>
            <i className={icon} ></i>

            <p>{tabTitle}</p>

            </div>
           
      )
  return (
        <>
        <section className='tabs'>
        <div className='container'>
        {renderTabTitle(
              CANCEL_AT_ANYTIME,
              activeTabName===CANCEL_AT_ANYTIME,
              "fas fa-door-open fa-3x",
              "tab-1"
         
        )}
        {renderTabTitle(
              WATCH_ANYWHERE,
              activeTabName===WATCH_ANYWHERE,
              "fas fa-tablet-alt fa-3x",
              "tab-2"
         
        )}
        {renderTabTitle(
              PICK_YOUR_PRICE,
              activeTabName===PICK_YOUR_PRICE,
              "fas fa-tags fa-3x",
              "tab-3"
         
        )}

        </div>  
        </section>
        {activeTabName===CANCEL_AT_ANYTIME&&(
              <section className='tab-content'>
              <div className='container'>
              <div id='tab-1-content' className={`tab-content-item  ${
                    activeTabName===CANCEL_AT_ANYTIME && "show"
                  }`}>
            
              
              <div className='tab-1-content-inner'>
              <div>
              <p className='text-lg'>
              if you decide Netflix isn't for you - no problem . Cancel at any time
              </p>
              <Link to="/netflix-show" className='btn btn-lg'>Watch For 30 days</Link>
              </div>
              <img src='https://d11fuji4mn7bm2.cloudfront.net/media/data/Netflix/Netflix-revamp/stream-img-1.jpg' alt='logo'/>
              </div>
              </div> 
              </div>
              </section>
        )}


              {activeTabName===WATCH_ANYWHERE && (
                    <section className='tab-content'>
                    <div className='container'>
                    <div id='tab-2-content' className={`tab-content-item  ${
                        activeTabName===WATCH_ANYWHERE && "show"
                      }`}>


                      <div className='tab-2-content-top'>
                      <p className='text-lg'>
                      Watch TV shows and movies anytime ,anywhere - personalised for you.
                      </p>
                      <Link to="/netflix-show" className='btn btn-lg'>Watch For 30 days</Link>
                      </div>
                      <div className='tab-2-content-bottom'>
                      <div>
                      <img src='https://i.ibb.co/gDhnwWn/tab-content-2-3.png' alt='logo'/>
                      <p className='text-md'>Watch on your TV</p>
                      <p className='text-dark'>
                      Smart TVs , PlayStation ,xbox ,chromecast ,Apple TV , Blu-ray players ad more
                      </p>
                      </div>
                      
                      
                  
                   
                   
                    <div>
                    <img src='https://i.ibb.co/gDhnwWn/tab-content-2-3.png' alt='logo'/>

                    <p className='text-md'>
                    Watch instantly or download for later</p>
                    <p className='text-dark'>Available on phone and tablet , whatever you go .</p>
                    
                    </div>
                    <div>
                    <img src='https://i.ibb.co/gDhnwWn/tab-content-2-3.png' alt='logo'/>

                    <p className='text-md'>
                    Use any computer</p>
                    <p className='text-dark'>Watch right on Netflix.com.</p>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
              )}


              {activeTabName===PICK_YOUR_PRICE && (
                    <section className='tab-content'>
                     <div className='container'>
                  <div id='tab-3-content' className={`tab-content-item  ${
                      activeTabName===PICK_YOUR_PRICE &&  "show"
                    }`}>

                     <div className='text-center'>
                     <p className='text-lg'>
                     choose one plan and watch everything on Netflix
                     </p>
                     <Link to="/netflix-show" className='btn btn-lg'>Watch For 30 days</Link>
                     </div>
                     <table className='table'>
                     <thead>
                     <tr>
                     <th></th>
                     <th>Basic</th>
                     <th>Standard</th>
                     <th>Premium</th>
                     
                     
                     </tr>
                     </thead> 
                      
                     <tbody>
                     
                     <tr>
                      <td>Monthly price after free month ends on 4/19/2022</td>
                      <td>$6.99</td>
                      <td>$11.99</td>
                      <td>$15.99</td>
                      </tr>
                      <tr>
                         <td > HD Available</td>
                         <td>
                         <i className='fas fa-times'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         </tr>

                         <tr>
                         <td > Ultra Available</td>
                         <td>
                         <i className='fas fa-times'></i>
                         </td>
                         <td>
                         <i className='fas fa-times'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         </tr>

                         <tr>
                         <td > Screen you con watch on at the same time</td>
                         <td>1 </td>
                         <td>2 </td>
                         <td>4 </td>
                         </tr>
                         <tr>
                         <td>Watch on you laptop ,TV ,phone and tablet</td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         </tr>

                         <tr>
                         <td>Unlimited movies and TV shows</td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         </tr>
                         

                         <tr>
                         <td>Cancel anytime</td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         </tr>

                         <tr>
                         <td>First month free</td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         <td>
                         <i className='fas fa-check'></i>
                         </td>
                         </tr>

                     </tbody>
                     </table>
                    </div>
                    </div>
                    </section>
              )}
        
        </>
  )
}

export default Tabs;