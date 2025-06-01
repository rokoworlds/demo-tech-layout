var d=Object.defineProperty;var _=(o,i,e)=>i in o?d(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e;var l=(o,i,e)=>_(o,typeof i!="symbol"?i+"":i,e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
      <header class="header" data-js-header>
        <div class="header__promo">
          <div class="header__promo-inner container">
            <a class="header__promo-link" href="/">
              <span class="icon icon--yellow-arrow">Subscribe to our Newsletter For New & latest Blogs and Resources</span>
            </a>
          </div>
        </div>
        <div class="header__body">
          <div class="header__body-inner container">
            <a
              class="header__logo logo"
              href="/"
              aria-label="Home"
              title="Home"
            >
              <img
                class="logo__image"
                src="./images/logo.svg"
                alt=""
                width="179" height="50"
              />
            </a>
            <div class="header__overlay" data-js-header-overlay>
              <nav class="header__menu">
                <ul class="header__menu-list">
                  <li class="header__menu-item">
                    <a class="header__menu-link is-active" href="./index.html">Home</a>
                  </li>
                  <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Blog</a>
                  </li>
                  <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Podcasts</a>
                  </li>
                  <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Resources</a>
                  </li>
                </ul>
              </nav>
              <a class="header__contact-us-link button button--accent" href="/">
                Contact Us
              </a>
            </div>
            <button
              class="header__burger-button burger-button visible-mobile"
              type="button"
              aria-label="Open menu"
              title="Open menu"
              data-js-header-burger-button
            >
              <span class="burger-button__line"></span>
              <span class="burger-button__line"></span>
              <span class="burger-button__line"></span>
            </button>
          </div>
        </div>
      </header>
      <main>

        <!-- HERO -->

        <section class="hero" aria-labelledby="hero-title">
          <div class="hero__main container">
            <div class="hero__body">
              <p class="hero__subtitle">Your Journey to Tomorrow Begins Here</p>
              <h1 class="hero__title" id="hero-title">Explore the Frontiers of Artificial Intelligence</h1>
              <div class="hero__description">
                <p>Welcome to the epicenter of AI innovation. FutureTech AI 
                  News is your passport to a world where machines think, learn, and reshape the future.
                   Join us on this visionary expedition into the heart of AI.</p>
              </div>
            
            </div>
            <div class="hero__metrics metrics full-vw-line full-vw-line--top full-vw-line--left">
              <dl class="metrics__list">
                <div class="metrics__item">
                  <dt class="metrics__key">Resources available</dt>
                  <dd class="metrics__value h3">300<span class="metrics__sign">+</span></dd>
                </div>
                <div class="metrics__item">
                  <dt class="metrics__key">Total Downloads</dt>
                  <dd class="metrics__value h3">12k<span class="metrics__sign">+</span></dd>
                </div>
                <div class="metrics__item">
                  <dt class="metrics__key">Active Users</dt>
                  <dd class="metrics__value h3">10k<span class="metrics__sign">+</span></dd>
                </div>
              </dl>
            </div>
            <div class="hero__resources-preview resources-preview">
              <div class="resources-preview__team team">
                <img 
                  src="./images/team/1.png" 
                  alt="" 
                  class="team__person"
                  width="60"
                  height="60"
                  loading="lazy"
                  >
                <img 
                  src="./images/team/2.png" 
                  alt="" 
                  class="team__person"
                  width="60"
                  height="60"
                  loading="lazy"
                  >
                <img 
                  src="./images/team/3.png" 
                  alt="" 
                  class="team__person"
                  width="60"
                  height="60"
                  loading="lazy"
                  >
                <img 
                  src="./images/team/4.png" 
                  alt="" 
                  class="team__person"
                  width="60"
                  height="60"
                  loading="lazy"
                  >
                </div>
                <div class="resources-preview__body">
                  <p class="resources-preview__title h5">Explore 1000+ resources</p>
                  <p class="resources-preview__subtitle">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <a 
                  href="/" 
                  class="resources-preview__button button"
                  >
                    <span class="icon icon--yellow-arrow">
                      Explore Resources
                    </span>
                </a>
            </div>
          </div>
          <div class="hero__advantages">
            <h2 class="visually-hidden">Our advantages</h2>
            <ul class="hero__advantages-list container">
              <li class="hero__advantages-item">
                <div class="advantage-card">
                  <img src="./images/advantages/icon-1.svg" alt="" class="advantage-card__image" width="50" height="50">
                  <a href="/" class="advantage-card__link">
                    <h3 class="advantage-card__title h6">Latest News Updates</h3>
                    <p class="advantage-card__subtitle">Stay Current</p>
                  </a>
                  <p class="advantage-card__details">Over 1,000 articles published monthly</p>
                </div>
              </li>
              <li class="hero__advantages-item">
                <div class="advantage-card">
                  <img src="./images/advantages/icon-2.svg" alt="" class="advantage-card__image" width="50" height="50">
                  <a href="/" class="advantage-card__link">
                    <h3 class="advantage-card__title h6">Expert Contributors</h3>
                    <p class="advantage-card__subtitle">Trusted Insights</p>
                  </a>
                  <p class="advantage-card__details">50+ renowned AI experts on our team</p>
                </div>
              </li>
              <li class="hero__advantages-item">
                <div class="advantage-card">
                  <img src="./images/advantages/icon-3.svg" alt="" class="advantage-card__image" width="50" height="50">
                  <a href="/" class="advantage-card__link">
                    <h3 class="advantage-card__title h6">Global Readership</h3>
                    <p class="advantage-card__subtitle">Worldwide Impact</p>
                  </a>
                  <p class="advantage-card__details">2 million monthly readers</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- FEAUTERS -->

        <section class="section" aria-labelledby="features-title">
          <header class="section__header">
            <div class="section__header-inner container">
              <div class="section__header-info">
                <p class="section__subtitle tag">Unlock the Power of</p>
                <h2 class="section__title" id="features-title">FutureTech Features</h2>
              </div>
            </div>
          </header>
          <div class="section__body">
            <ul class="list">
              <li class="list__item">
                <div class="card container">
                  <div class="card__preview">
                    <div class="card__preview-main">
                      <img src="./images/features/1.svg" alt="" class="card__preview-icon" width="80" height="80">
                      <div class="card__preview-info">
                        <h3 class="card__preview-title">Future Technology Blog</h3>
                        <div class="card__preview-description">Stay informed with our blog section dedicated to future technology.</div>

                      </div>
                    </div>
                    <div class="card__preview-extra"></div>
                  </div>
                  <div class="card__body">
                    <div class="card__grid card__grid--2-cols">
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Quantity</h4>
                        <p class="card__cell-description">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                      </div>
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Variety</h4>
                        <p class="card__cell-description">Articles cover fields like AI, robotics, biotechnology, and more.</p>
                      </div>
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Frequency</h4>
                        <p class="card__cell-description">Fresh content added daily to keep you up to date.</p>
                      </div>
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Authoritative</h4>
                        <p class="card__cell-description">Written by our team of tech experts and industry professionals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list__item">
                <div class="card container">
                  <div class="card__preview">
                    <div class="card__preview-main">
                      <img src="./images/features/2.svg" alt="" class="card__preview-icon" width="80" height="80">
                      <div class="card__preview-info">
                        <h3 class="card__preview-title">Research Insights Blogs</h3>
                        <div class="card__preview-description">Dive deep into future technology concepts with our research section.</div>

                      </div>
                    </div>
                    <div class="card__preview-extra"></div>
                  </div>
                  <div class="card__body">
                    <div class="card__grid card__grid--2-cols">
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Depth</h4>
                        <p class="card__cell-description">500+ research articles for in-depth understanding.</p>
                      </div>
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Graphics</h4>
                        <p class="card__cell-description">Visual aids and infographics to enhance comprehension.</p>
                      </div>
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Trends</h4>
                        <p class="card__cell-description">Explore emerging trends in future technology research.</p>
                      </div>
                      <div class="card__cell tile">
                        <h4 class="card__cell-title h5">Contributors</h4>
                        <p class="card__cell-description">Contributions from tech researchers and academics.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- BLOGS TITLE -->

        <section class="section" aria-labelledby="blog-title">

          <!-- BLOGS: header -->

          <header class="section__header">
            <div class="section__header-inner container">
              <div class="section__header-info">
                <p class="section__subtitle tag">A Knowledge Treasure Trove</p>
                <h2 class="section__title" id="blog-title">Explore FutureTech's In-Depth Blog Posts</h2>
              </div>
              <a href="/" class="section__link button">
                <span class="icon icon--yellow-arrow">View All Blogs</span>
              </a>
            </div>
          </header>

           <!-- BLOGS : tabs panel -->

          <div class="section__body tabs" data-js-tabs>
            <h3 class="visually-hidden" id="blog-category-title"> Blog category</h3>
            <header class="tabs__header">
              <div 
                class="tabs__buttons container" 
                role="tablist" 
                aria-labelledby="blog-category-title"
                >
                <button 
                  class="tabs__button is-active" 
                  id="tab-1"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-1"
                  data-js-tabs-button
                  aria-selected="true"
                  >
                  All
                </button>
                <button 
                  class="tabs__button" 
                  id="tab-2"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-2"
                  data-js-tabs-button
                  aria-selected="false"
                  tabindex="-1"
                  >
                  Quantum Computing
                </button>
                <button 
                  class="tabs__button" 
                  id="tab-3"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-3"
                  data-js-tabs-button
                  aria-selected="false"
                  tabindex="-1"
                  >
                  AI Ethics
                </button>
                <button 
                  class="tabs__button" 
                  id="tab-4"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-4"
                  data-js-tabs-button
                  aria-selected="false"
                  tabindex="-1"
                  >
                  Space Exploration
                </button>
                <button 
                  class="tabs__button" 
                  id="tab-5"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-5"
                  data-js-tabs-button
                  aria-selected="false"
                  tabindex="-1"
                  >
                  Biotechnology
                </button>
                <button 
                  class="tabs__button" 
                  id="tab-6"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel-6"
                  data-js-tabs-button
                  aria-selected="false"
                  tabindex="-1"
                  >
                  Renewable Energy
                </button>
              </div>
            </header>

             <!-- BLOGS: tabs body -->

            <div class="tabs__body">
              <div 
                class="tabs__content is-active" 
                id="tabpanel-1"
                aria-labelledby="tab-1"
                tabindex="0"
                data-js-tabs-content
                >

                <!-- BLOGS: list of blogs -->

                <ul class="list">
                  <li class="list__item">
                    <article class="blog-card container">
                      <div class="blog-card__autor person-card">
                        <img src="./images/blog/1.png" alt="" class="person-card__image" width="80" height="80" loading="lazy">
                        <div class="person-card__body">
                          <p class="person-card__name">John Techson</p>
                          <p class="person-card__department">Quantum Computing</p>
                        </div>
                      </div>
                      <div class="blog-card__body">
                        <time datetime="" class="blog-card__date" datetime="2023-10-15">October 15, 2023</time>
                        <div class="blog-card__info">
                          <h4 class="blog-card__title">The Quantum Leap in Computing</h4>
                          <div class="blog-card__description">
                            <p>Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                          </div>
                        </div>
                        <div class="blog-card__actions blog-actions">
                          <ul class="blog-actions__list">
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button is-active" 
                                type="button"
                                aria-label="dislike"
                                title="Dislike"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.70414 17.9255L9.6987 17.9226L9.67982 17.9124C9.66375 17.9037 9.64076 17.8911 9.61131 17.8746C9.55243 17.8418 9.4677 17.7937 9.3608 17.7308C9.14708 17.605 8.84431 17.4199 8.48212 17.1791C7.75895 16.6984 6.79268 15.9917 5.82383 15.0886C3.90651 13.3013 1.875 10.6459 1.875 7.375C1.875 4.93495 3.928 3 6.40625 3C7.86365 3 9.1686 3.66591 10 4.70966C10.8314 3.66591 12.1363 3 13.5938 3C16.072 3 18.125 4.93495 18.125 7.375C18.125 10.6459 16.0935 13.3013 14.1762 15.0886C13.2073 15.9917 12.241 16.6984 11.5179 17.1791C11.1557 17.4199 10.8529 17.605 10.6392 17.7308C10.5323 17.7937 10.4476 17.8418 10.3887 17.8746C10.3592 17.8911 10.3363 17.9037 10.3202 17.9124L10.3013 17.9226L10.2959 17.9255L10.2936 17.9268C10.1103 18.0241 9.88974 18.0241 9.70644 17.9268L9.70414 17.9255Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round"/>
                                  </svg>
                                </span>
                                <span>24.5k</span>
                              </button>
                            </li>
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button" 
                                type="button"
                                aria-label="Comments"
                                title="Comments"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.07167 16.4906C7.95564 16.9235 8.94952 17.1666 10.0002 17.1666C13.6821 17.1666 16.6668 14.1819 16.6668 10.4999C16.6668 6.81802 13.6821 3.83325 10.0002 3.83325C6.31827 3.83325 3.3335 6.81802 3.3335 10.4999C3.3335 11.8667 3.7448 13.1374 4.45038 14.195M7.07167 16.4906L3.3335 17.1666L4.45038 14.195M7.07167 16.4906L7.07709 16.4897M4.45038 14.195L4.45144 14.1922" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                    
                                </span>
                                <span>17</span>
                              </button>
                            </li>
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button" 
                                type="button"
                                aria-label="Share"
                                title="Share"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.36554 12.1345L3.47679 9.91238C2.80399 9.60656 2.83269 8.64126 3.52248 8.37595L15.7501 3.67301C16.4241 3.4138 17.0863 4.07599 16.8271 4.74995L12.1241 16.9776C11.8588 17.6674 10.8935 17.6961 10.5877 17.0233L8.36554 12.1345ZM8.36554 12.1345L12.0195 8.48071" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <span>20</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="/" class="blog-card__link button">
                        <span class="icon icon--yellow-arrow">View Blog</span>
                      </a>
                    </article>
                  </li>
                  <li class="list__item">
                    <article class="blog-card container">
                      <div class="blog-card__autor person-card">
                        <img src="./images/blog/2.png" alt="" class="person-card__image" width="80" height="80" loading="lazy">
                        <div class="person-card__body">
                          <p class="person-card__name">Sarah Ethicist</p>
                          <p class="person-card__department">AI Ethics</p>
                        </div>
                      </div>
                      <div class="blog-card__body">
                        <time datetime="" class="blog-card__date" datetime="2023-11-05">November 5, 2023</time>
                        <div class="blog-card__info">
                          <h4 class="blog-card__title">The Ethical Dilemmas of AI</h4>
                          <div class="blog-card__description">
                            <p>A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.</p>
                          </div>
                        </div>
                        <div class="blog-card__actions blog-actions">
                          <ul class="blog-actions__list">
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button" 
                                type="button"
                                aria-label="Like"
                                title="Like"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.70414 17.9255L9.6987 17.9226L9.67982 17.9124C9.66375 17.9037 9.64076 17.8911 9.61131 17.8746C9.55243 17.8418 9.4677 17.7937 9.3608 17.7308C9.14708 17.605 8.84431 17.4199 8.48212 17.1791C7.75895 16.6984 6.79268 15.9917 5.82383 15.0886C3.90651 13.3013 1.875 10.6459 1.875 7.375C1.875 4.93495 3.928 3 6.40625 3C7.86365 3 9.1686 3.66591 10 4.70966C10.8314 3.66591 12.1363 3 13.5938 3C16.072 3 18.125 4.93495 18.125 7.375C18.125 10.6459 16.0935 13.3013 14.1762 15.0886C13.2073 15.9917 12.241 16.6984 11.5179 17.1791C11.1557 17.4199 10.8529 17.605 10.6392 17.7308C10.5323 17.7937 10.4476 17.8418 10.3887 17.8746C10.3592 17.8911 10.3363 17.9037 10.3202 17.9124L10.3013 17.9226L10.2959 17.9255L10.2936 17.9268C10.1103 18.0241 9.88974 18.0241 9.70644 17.9268L9.70414 17.9255Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round"/>
                                  </svg>
                                </span>
                                <span>32k</span>
                              </button>
                            </li>
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button" 
                                type="button"
                                aria-label="Comments"
                                title="Comments"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.07167 16.4906C7.95564 16.9235 8.94952 17.1666 10.0002 17.1666C13.6821 17.1666 16.6668 14.1819 16.6668 10.4999C16.6668 6.81802 13.6821 3.83325 10.0002 3.83325C6.31827 3.83325 3.3335 6.81802 3.3335 10.4999C3.3335 11.8667 3.7448 13.1374 4.45038 14.195M7.07167 16.4906L3.3335 17.1666L4.45038 14.195M7.07167 16.4906L7.07709 16.4897M4.45038 14.195L4.45144 14.1922" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                    
                                </span>
                                <span>50</span>
                              </button>
                            </li>
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button" 
                                type="button"
                                aria-label="Share"
                                title="Share"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.36554 12.1345L3.47679 9.91238C2.80399 9.60656 2.83269 8.64126 3.52248 8.37595L15.7501 3.67301C16.4241 3.4138 17.0863 4.07599 16.8271 4.74995L12.1241 16.9776C11.8588 17.6674 10.8935 17.6961 10.5877 17.0233L8.36554 12.1345ZM8.36554 12.1345L12.0195 8.48071" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <span>11</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="/" class="blog-card__link button">
                        <span class="icon icon--yellow-arrow">View Blog</span>
                      </a>
                    </article>
                  </li>
                  <li class="list__item">
                    <article class="blog-card container">
                      <div class="blog-card__autor person-card">
                        <img src="./images/blog/3.png" alt="" class="person-card__image" width="80" height="80" loading="lazy">
                        <div class="person-card__body">
                          <p class="person-card__name">Astronomer X</p>
                          <p class="person-card__department">Space Exploration</p>
                        </div>
                      </div>
                      <div class="blog-card__body">
                        <time datetime="" class="blog-card__date" datetime="2024-12-10">December 10, 2023</time>
                        <div class="blog-card__info">
                          <h4 class="blog-card__title">The Mars Colonization Challenge</h4>
                          <div class="blog-card__description">
                            <p>Exploring the technical and logistical challenges of human colonization on Mars.</p>
                          </div>
                        </div>
                        <div class="blog-card__actions blog-actions">
                          <ul class="blog-actions__list">
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button is-active" 
                                type="button"
                                aria-label="dislike"
                                title="dislike"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.70414 17.9255L9.6987 17.9226L9.67982 17.9124C9.66375 17.9037 9.64076 17.8911 9.61131 17.8746C9.55243 17.8418 9.4677 17.7937 9.3608 17.7308C9.14708 17.605 8.84431 17.4199 8.48212 17.1791C7.75895 16.6984 6.79268 15.9917 5.82383 15.0886C3.90651 13.3013 1.875 10.6459 1.875 7.375C1.875 4.93495 3.928 3 6.40625 3C7.86365 3 9.1686 3.66591 10 4.70966C10.8314 3.66591 12.1363 3 13.5938 3C16.072 3 18.125 4.93495 18.125 7.375C18.125 10.6459 16.0935 13.3013 14.1762 15.0886C13.2073 15.9917 12.241 16.6984 11.5179 17.1791C11.1557 17.4199 10.8529 17.605 10.6392 17.7308C10.5323 17.7937 10.4476 17.8418 10.3887 17.8746C10.3592 17.8911 10.3363 17.9037 10.3202 17.9124L10.3013 17.9226L10.2959 17.9255L10.2936 17.9268C10.1103 18.0241 9.88974 18.0241 9.70644 17.9268L9.70414 17.9255Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round"/>
                                  </svg>
                                </span>
                                <span>20k</span>
                              </button>
                            </li>
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button" 
                                type="button"
                                aria-label="Comments"
                                title="Comments"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.07167 16.4906C7.95564 16.9235 8.94952 17.1666 10.0002 17.1666C13.6821 17.1666 16.6668 14.1819 16.6668 10.4999C16.6668 6.81802 13.6821 3.83325 10.0002 3.83325C6.31827 3.83325 3.3335 6.81802 3.3335 10.4999C3.3335 11.8667 3.7448 13.1374 4.45038 14.195M7.07167 16.4906L3.3335 17.1666L4.45038 14.195M7.07167 16.4906L7.07709 16.4897M4.45038 14.195L4.45144 14.1922" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                    
                                </span>
                                <span>23</span>
                              </button>
                            </li>
                            <li class="blog-actions__item">
                              <button 
                                class="blog-actions__button" 
                                type="button"
                                aria-label="Share"
                                title="Share"
                                >
                                <span class="blog-actions__icon-wrapper">
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.36554 12.1345L3.47679 9.91238C2.80399 9.60656 2.83269 8.64126 3.52248 8.37595L15.7501 3.67301C16.4241 3.4138 17.0863 4.07599 16.8271 4.74995L12.1241 16.9776C11.8588 17.6674 10.8935 17.6961 10.5877 17.0233L8.36554 12.1345ZM8.36554 12.1345L12.0195 8.48071" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <span>19</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="/" class="blog-card__link button">
                        <span class="icon icon--yellow-arrow">View Blog</span>
                      </a>
                    </article>
                  </li>
                </ul>
              </div>
              <div 
                class="tabs__content" 
                id="tabpanel-2"
                aria-labelledby="tab-2"
                tabindex="0"
                data-js-tabs-content
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque possimus nihil velit suscipit fugit cum molestias animi eligendi doloremque.
              </div>
              <div 
                class="tabs__content" 
                id="tabpanel-3"
                aria-labelledby="tab-3"
                tabindex="0"
                data-js-tabs-content
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque possimus nihil velit suscipit fugit cum molestias animi eligendi doloremque.
              </div>
              <div 
                class="tabs__content" 
                id="tabpanel-4"
                aria-labelledby="tab-4"
                tabindex="0"
                data-js-tabs-content
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque possimus nihil velit suscipit fugit cum molestias animi eligendi doloremque.
              </div>
              <div 
                class="tabs__content" 
                id="tabpanel-5"
                aria-labelledby="tab-5"
                tabindex="0"
                data-js-tabs-content
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque possimus nihil velit suscipit fugit cum molestias animi eligendi doloremque.
              </div>
              <div 
                class="tabs__content" 
                id="tabpanel-6"
                aria-labelledby="tab-6"
                tabindex="0"
                data-js-tabs-content
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque possimus nihil velit suscipit fugit cum molestias animi eligendi doloremque.
              </div>
            </div>

          </div>
        </section>

      </main>
      <footer class="footer">
        <div class="footer__inner container">
          <div class="footer__body">
            <nav class="footer__menu">
              <div class="footer__menu-column">
                <a href="/" class="footer__menu-main-link h6">Home</a>
                <ul class="footer__menu-list">
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Features</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Blogs</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Resources</a>
                    <span class="badge">New</span>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Testimonials</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Constact Us</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Newsletter </a>
                  </li>
                </ul>
              </div>
              <div class="footer__menu-column">
                <a href="/" class="footer__menu-main-link h6">News</a>
                <ul class="footer__menu-list">
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Trending Stories</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Featured Videos</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Technology</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Health</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Politics</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Environment</a>
                  </li>
                </ul>
              </div>
              <div class="footer__menu-column">
                <a href="/" class="footer__menu-main-link h6">Blog</a>
                <ul class="footer__menu-list">
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Quantum Computing</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">AI Ethics</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Space Exploration</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Biotechnology</a>
                    <span class="badge">New</span>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Renewable Energy</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">Biohacking</a>
                  </li>
                </ul>
              </div>
              <div class="footer__menu-column">
                <a href="/" class="footer__menu-main-link h6">Podcasts</a>
                <ul class="footer__menu-list">
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">AI Revolution</a>
                    <span class="badge">New</span>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">TechTalk AI</a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link">AI Conversations</a>
                  </li>
                </ul>
              </div>
              <div class="footer__menu-column">
                <a href="/" class="footer__menu-main-link h6">Resources</a>
                <ul class="footer__menu-list">
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link button">
                      <span class="icon icon--yellow-arrow">
                        Whitepapers
                      </span>
                    </a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link button">
                      <span class="icon icon--yellow-arrow">
                        Ebooks
                      </span>
                    </a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link button">
                      <span class="icon icon--yellow-arrow">
                        Reports
                      </span>
                    </a>
                  </li>
                  <li class="footer__menu-item">
                    <a href="" class="footer__menu-link button">
                      <span class="icon icon--yellow-arrow">
                        Research Papers
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="footer__extra">
            <div class="footer__extra-menu">
              <ul class="footer__extra-menu-list">
                <li class="footer__extra-menu-item">
                  <a href="/" class="footer__extra-menu-link">Terms & Conditions</a>
                </li>
                <li class="footer__extra-menu-item">
                  <a href="/" class="footer__extra-menu-link">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="footer__soc1als soc1als">
              <ul class="soc1als__list">
                <li class="soc1als__item">
                  <a 
                  href="/" 
                  class="soc1als__link" 
                  target="_blank"
                  aria-label="Medium"
                  title="Medium"
                  >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5374 12.2281C13.5374 15.9988 10.5069 19.0556 6.76883 19.0556C3.03073 19.0556 0 15.9981 0 12.2281C0 8.45806 3.0305 5.40039 6.76883 5.40039C10.5072 5.40039 13.5374 8.45737 13.5374 12.2281Z" fill="white"/>
                    <path d="M20.9627 12.2285C20.9627 15.7778 19.4474 18.6563 17.5783 18.6563C15.7091 18.6563 14.1938 15.7778 14.1938 12.2285C14.1938 8.67922 15.7089 5.80078 17.578 5.80078C19.4472 5.80078 20.9625 8.67829 20.9625 12.2285" fill="white"/>
                    <path d="M24 12.228C24 15.4073 23.4672 17.9862 22.8097 17.9862C22.1522 17.9862 21.6196 15.408 21.6196 12.228C21.6196 9.04797 22.1525 6.46973 22.8097 6.46973C23.467 6.46973 24 9.04774 24 12.228Z" fill="white"/>
                  </svg>
                  </a>
                </li>
                <li class="soc1als__item">
                  <a 
                  href="/" 
                  class="soc1als__link" 
                  target="_blank"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8647 1.59961H3.13554C2.72832 1.59961 2.33777 1.76138 2.04982 2.04933C1.76187 2.33728 1.6001 2.72783 1.6001 3.13505V20.8642C1.6001 21.2714 1.76187 21.6619 2.04982 21.9499C2.33777 22.2378 2.72832 22.3996 3.13554 22.3996H20.8647C21.2719 22.3996 21.6624 22.2378 21.9504 21.9499C22.2383 21.6619 22.4001 21.2714 22.4001 20.8642V3.13505C22.4001 2.72783 22.2383 2.33728 21.9504 2.04933C21.6624 1.76138 21.2719 1.59961 20.8647 1.59961ZM7.79965 19.3186H4.67243V9.38516H7.79965V19.3186ZM6.23388 8.00861C5.87915 8.00661 5.53296 7.89958 5.239 7.70102C4.94504 7.50246 4.71649 7.22127 4.58219 6.89294C4.44789 6.56461 4.41386 6.20386 4.48439 5.8562C4.55492 5.50855 4.72686 5.18958 4.9785 4.93955C5.23014 4.68952 5.5502 4.51964 5.8983 4.45134C6.2464 4.38304 6.60693 4.41939 6.93439 4.5558C7.26185 4.6922 7.54156 4.92255 7.73823 5.21778C7.9349 5.51301 8.03971 5.85988 8.03943 6.21461C8.04278 6.45211 7.99827 6.68784 7.90857 6.90777C7.81887 7.1277 7.68582 7.32732 7.51733 7.49473C7.34884 7.66215 7.14837 7.79392 6.92787 7.88221C6.70736 7.97049 6.47134 8.01348 6.23388 8.00861ZM19.3263 19.3273H16.2005V13.9005C16.2005 12.3001 15.5202 11.8061 14.642 11.8061C13.7147 11.8061 12.8047 12.5052 12.8047 13.9409V19.3273H9.67743V9.39239H12.6848V10.7689H12.7252C13.0271 10.1579 14.0844 9.11361 15.6979 9.11361C17.4428 9.11361 19.3278 10.1493 19.3278 13.1826L19.3263 19.3273Z" fill="white"/>
                  </svg>
                  </a>
                </li>
              </ul>
            </div>
            <p class="footer__copyright">
              © 2025 FutureTech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  </div>
`;setupCounter(document.querySelector("#counter"));class u{constructor(){l(this,"selectors",{root:"[data-js-header]",overlay:"[data-js-header-overlay",burgerButton:"[data-js-header-burger-button]"});l(this,"stateClasses",{isActive:"is-active",isLock:"is-lock"});l(this,"onBurgerButtonClick",()=>{this.burgerButtonElement.classList.toggle(this.stateClasses.isActive),this.overlayElement.classList.toggle(this.stateClasses.isActive),document.documentElement.classList.toggle(this.stateClasses.isLock)});this.rootElement=document.querySelector(this.selectors.root),this.overlayElement=this.rootElement.querySelector(this.selectors.overlay),this.burgerButtonElement=this.rootElement.querySelector(this.selectors.burgerButton),this.bindEvents()}bindEvents(){this.burgerButtonElement.addEventListener("click",this.onBurgerButtonClick)}}class r{constructor(){if(this.constructor===r)throw new Error("Невозможно создать экземпляр абстрактного класса BaseComponent!")}getProxyState(i){return new Proxy(i,{get:(e,a)=>e[a],set:(e,a,s)=>{const t=e[a];return e[a]=s,s!==t&&this.updateUI(),!0}})}updateUI(){throw new Error("Необходимо реализовать метод updateUI!")}}const c="[data-js-tabs]";class h extends r{constructor(e){super();l(this,"selectors",{root:c,button:"[data-js-tabs-button]",content:"[data-js-tabs-content]"});l(this,"stateClasses",{isActive:"is-active"});l(this,"stateAttributes",{ariaSelected:"aria-selected",tabIndex:"tabindex"});l(this,"previousTab",()=>{const e=this.state.activeTabIndex===0?this.limitTabsIndex:this.state.activeTabIndex-1;this.activateTab(e)});l(this,"nextTab",()=>{const e=this.state.activeTabIndex===this.limitTabsIndex?0:this.state.activeTabIndex+1;this.activateTab(e)});l(this,"firstTab",()=>{this.activateTab(0)});l(this,"lastTab",()=>{this.activateTab(this.limitTabsIndex)});l(this,"onKeyDown",e=>{const{code:a,metaKey:s}=e,t={ArrowLeft:this.previousTab,ArrowRight:this.nextTab,Home:this.firstTab,End:this.lastTab}[a];if(s&&a==="ArrowLeft"){this.firstTab();return}if(s&&a==="ArrowRight"){this.lastTab();return}t==null||t()});this.rootElement=e,this.buttonElements=this.rootElement.querySelectorAll(this.selectors.button),this.contentElements=this.rootElement.querySelectorAll(this.selectors.content),this.state=this.getProxyState({activeTabIndex:[...this.buttonElements].findIndex(a=>a.classList.contains(this.stateClasses.isActive))}),this.limitTabsIndex=this.buttonElements.length-1,this.bindEvents()}updateUI(){const{activeTabIndex:e}=this.state;this.buttonElements.forEach((a,s)=>{const t=s===e;a.classList.toggle(this.stateClasses.isActive,t),a.setAttribute(this.stateAttributes.ariaSelected,t.toString()),a.setAttribute(this.stateAttributes.tabIndex,t?"0":"-1")}),this.contentElements.forEach((a,s)=>{const t=s===e;a.classList.toggle(this.stateClasses.isActive,t)})}activateTab(e){this.state.activeTabIndex=e,this.buttonElements[e].focus()}onButtonClick(e){this.state.activeTabIndex=e}bindEvents(){this.buttonElements.forEach((e,a)=>{e.addEventListener("click",()=>this.onButtonClick(a))}),this.rootElement.addEventListener("keydown",this.onKeyDown)}}class m{constructor(){this.init()}init(){document.querySelectorAll(c).forEach(i=>{new h(i)})}}new u;new m;
