import React,{useContext} from 'react'


import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Mark from '../components/mark'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/f-a-q'
import Footer from '../components/footer'
import './home.css'


const Home = (props) => {
  
 
  return (

  
    <div className="home-container">
      <Helmet>
        <title>Tinada V1</title>
        <meta property="og:title" content="Tinada V1" />
      </Helmet>
      <section className="home-section">
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  <span className="home-text">Connect.</span>
                  <br></br>
                  <span>Participate.</span>
                  <br></br>
                  <span>Experience more,</span>
                  <br></br>
                  <span>Together </span>
                  <br></br>
                </h1>
                <span className="home-caption">
                  Find your activity partner and join the revolution - our app
                  is the perfect way to meet new people, share new experiences,
                  and have fun together!
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text08">Log In</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text09">View features</span>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image01 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image02 avatar"
                />
              </div>
              <label className="home-caption1">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image03">
            <img
              alt="image"
              src="/playground_assets/heroimage-700w.png"
              className="home-image04"
            />
          </div>
          <div className="home-image05">
            <img
              alt="image"
              src="/playground_assets/heroimage-700w.png"
              className="home-image06"
            />
          </div>
        </div>
      </section>
      <section className="home-section01">
        <h2 className="home-text10">Sports, Arts, Food, and more</h2>
        <div className="home-features"></div>
        <div className="home-note">
          <div className="home-content1">
            <main className="home-main1">
              <h2 className="home-heading01">
                Accessing this Medicare benefit is easy
              </h2>
              <p className="home-paragraph">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </span>
                <br></br>
                <br></br>
                <span>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae.
                </span>
                <br></br>
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text16">Explore more -&gt;</p>
            </div>
          </div>
          <div className="home-image07">
            <img
              alt="image"
              src="/playground_assets/group%201490-1200w.png"
              className="home-image08"
            />
          </div>
        </div>
      </section>
      <section className="home-section02">
        <header className="home-header01">
          <h2 className="home-text17">Why do you need a mobile medical app?</h2>
          <span className="home-text18">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </span>
        </header>
        <section className="home-note1">
          <div className="home-image09">
            <img
              alt="image"
              src="/playground_assets/group%201428-1200w.png"
              className="home-image10"
            />
          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption2">
                <span className="home-section03 section-head">
                  Tempor incididunt
                </span>
              </div>
              <div className="home-heading02">
                <h2 className="home-heading03 section-heading">
                  We provide compassionate care from start to finish.
                </h2>
                <p className="home-paragraph1 section-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </p>
              </div>
            </div>
            <div className="home-get-started2 button">
              <span className="home-text19">Get started</span>
            </div>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image11">
            <img
              alt="image"
              src="/playground_assets/group%201449-1200w.png"
              className="home-image12"
            />
          </div>
          <div className="home-content3">
            <main className="home-main3">
              <header className="home-caption3">
                <span className="home-section04 section-head">
                  Tempor incididunt
                </span>
              </header>
              <main className="home-heading04">
                <header className="home-header02">
                  <h2 className="home-heading05 section-heading">
                    Great care, wherever you are
                  </h2>
                  <p className="home-paragraph2 section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </header>
                <div className="home-checkmarks">
                  <Mark></Mark>
                  <Mark Label="Quis nostrud exercitation ullamco"></Mark>
                  <Mark Label="Reprehenderit qui in ea voluptate velit"></Mark>
                </div>
              </main>
            </main>
            <div className="home-get-started3 button">
              <span className="home-text20">Get started</span>
            </div>
          </div>
        </section>
      </section>
      <section className="home-section05">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header03">
            <header className="home-left1">
              <span className="home-section06 section-head">Pricing</span>
              <h2 className="section-heading home-heading06">
                Start small, think big
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph3 section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <div className="home-switch">
              <div className="home-switch1 switch">
                <label className="home-text21">Monthly</label>
              </div>
              <div className="home-switch2 switch">
                <label className="home-text22">Yearly</label>
              </div>
            </div>
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header04">
                    <label className="home-name">Basic</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">$9</h1>
                      <span className="home-duration">/mo</span>
                    </div>
                  </div>
                  <p className="home-description">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home-buy-details">
                  <div className="home-buy button">
                    <span className="home-text23">
                      <span>Start Basic</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features1">
                    <span className="home-heading07">You will get</span>
                    <div className="home-list">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header05">
                    <label className="home-name1">Professional</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">$15</h1>
                      <span className="home-duration1">/mo</span>
                    </div>
                  </div>
                  <p className="home-description1">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-buy1 button">
                    <span className="home-text26">
                      <span>Start Professional</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features2">
                    <span className="home-heading08">You will get</span>
                    <div className="home-list1">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header06">
                    <label className="home-name2">Enterprise</label>
                    <div className="home-pricing3">
                      <span className="home-price2">$99</span>
                      <span className="home-duration2">/mo</span>
                    </div>
                  </div>
                  <p className="home-description2">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home-buy-details2">
                  <div className="home-buy2 button">
                    <span className="home-text29">
                      <span>Start Enterprise</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features3">
                    <span className="home-heading09">You will get</span>
                    <div className="home-list2">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text32">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text35">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section07">
        <header className="home-header07">
          <header className="home-left2">
            <h2 className="home-heading10 section-heading">
              What users say about us
            </h2>
          </header>
          <div className="home-right1">
            <p className="home-paragraph4 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="home-cards">
          <div className="home-container1">
            <Review rootClassName="review-root-class-name"></Review>
            <Review
              Quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container2">
            <Review
              Quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container3">
            <Review
              Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              Quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text36">View more</p>
        </div>
      </section>
      <section className="home-section08">
        <header className="home-header08">
          <span className="home-section09 section-head">Articles about us</span>
          <h2 className="home-heading11 section-heading">
            We’re the app on everyone’s lips
          </h2>
        </header>
        <main className="home-cards1">
          <Article rootClassName="article-root-class-name"></Article>
          <Article
            Header="techeu"
            SpecialHeader="eu"
            rootClassName="article-root-class-name"
          ></Article>
          <Article
            Header="sifted/"
            rootClassName="article-root-class-name"
          ></Article>
        </main>
      </section>
      <section className="home-section10">
        <header className="home-header09">
          <h2 className="home-heading12 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="f-a-q-root-class-name"></FAQ>
        </main>
      </section>
      <section className="home-section11">
        <main className="home-content4">
          <header className="home-header10">
            <h2 className="home-heading13 section-heading">
              Stop searching online for medications and use Planical app!
            </h2>
            <div className="home-buttons1">
              <div className="home-i-o-s button">
                <img
                  alt="image"
                  src="/playground_assets/apple-200w.png"
                  className="home-icon"
                />
                <span className="home-text37">Download for iOS</span>
              </div>
              <div className="home-android button">
                <img
                  alt="image"
                  src="/playground_assets/android-200h.png"
                  className="home-icon1"
                />
                <span className="home-text38">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/playground_assets/group%201505-1200w.png"
            className="home-image13"
          />
        </main>
      </section>
      <Footer rootClassName="footer-root-class-name"></Footer>

    </div>
  )
}

export default Home
