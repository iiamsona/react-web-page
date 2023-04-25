import './App.scss';
import './assets/style/style.scss'
import buy from './images/buy.png'
import girl from './images/girl.png'
import vector from './images/vector.png'
import search from './images/search.png'

function App() {
  return (
    <div className='container'>
      <div className='container-in'>
        <div className='firstPage'>
          <div className='Name'>
            <p>Name <span className='bold'>of <br /> event</span></p>
          </div>
          <div className='btnJan'>
            <div className='btn'>
              <button className='btnb'>BUY CARDS</button>
            </div>
            <div className='jan'>
              <p>JANUARY <br /><span className='bold'>1st</span></p>
            </div>
          </div>
          <div className='lorem'>
            <p>
              Lorem Ipsum will go here. Lorem <br /> Ipsum will go here. Lorem Ipsum will <br /> go here. Lorem Ipsum will go here.
            </p>
          </div>
          <div className='cards'>
            <div className='box'><p className='txt'>GALLERY <br /><span className='sub'>SUBTITLE</span></p></div>
            <div className='box'><p className='txt'>ACTIVITIES <br /><span className='sub'>SUBTITLE</span></p></div>
            <div className='box'><p className='txt'>KEYNOTES <br /><span className='sub'>SUBTITLE</span></p></div>
          </div>
        </div>
        <div className='secondPage'>
          <div className='two'>
            <p className='one'> &lt; </p>
            <p className='one'> &gt; </p>
          </div>
          <div className='girl'>
            <img className='girlimg' src={girl} alt="girl" />
          </div>
          <div className='grid'>
            <div className='color'>
              <p className='colorp'>Color
                <br />
                <span className='bold'>
                  Item Type / Name
                </span>
              </p>
            </div>
            <div className='price'>
              <p className='pricep'>
                $19.99  <br />
                <span className='pricep2'>
                  $39.99
                </span>
              </p>
            </div>
            <div className='lorem2'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                <br />
                typesetting industry. Lorem Ipsum has been the
                <br />
                industry's standard dummy text ever since the 1500s,
                <br />
                when an unknown printer took a galley of type and
                <br />
                scrambled it to make a type specimen book.
              </p>
            </div>
            <div className='sizeMedium'>
              <div className='size'>Size:</div>
              <div className='medium'>Medium</div>
              <img className='vector' src={vector} alt="vector" />
            </div>
            <div className='btn2'>
              <button className='btna'>ADD TO CART</button>
            </div>
          </div>
          <div className='grid2'>
            <div className='buy'>
              <img className='buyp' src={buy} alt="buy" />
              <br />
              <p className='bold'>GO BACK</p>
            </div>
            <div className=''>
              <p className='mens'>Mens
                <br />
                100% Cotton</p>
            </div>
          </div>
        </div>
        <div className='thirdpage'>
          <div className='head'>
            <div className='Freebie'>
              <p className='Free'> <span className='Frees'>Freebie</span> Digital Market</p>
            </div>
            <div className='search-buy'>
              <div className='serach'>
                <img className='searchs' src={search} alt="search" />
              </div>
              <div className='buy3'>
                <img className='buy3' src={buy} alt="buy" />
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='featured'>
              <p className='featuredp'>FEATURED</p>
              <p className='category'> <span className='category1'>CATEGORY 1</span></p>
              <p className='category'>CATEGORY 2</p>
              <p className='category'>CATEGORY 3</p>
              <p className='category'>CATEGORY 4</p>
              <p className='category'>CATEGORY 5</p>
            </div>
            <div className='grid3'>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
              <div className='titbox'> <p className='title-here'>TITLE HERE <br />
                <span className='categoryt'>CATEGORY</span> </p></div>
            </div>
            <div className='filter'>
              <p className='filters'>ALL</p>
              <p className='filters'> <span className='filter1'>FILTER 1</span></p>
              <p className='filters'>FILTER 2</p>
              <p className='filters'>FILTER 3</p>
              <p className='filters'>FILTER 4</p>
              <p className='filters'>FILTER 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;