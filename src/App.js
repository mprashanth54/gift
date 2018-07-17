import React, { Component } from 'react';
import pic from "./assets/neha.jpg"

class App extends Component {
  render() {
    return (

      <div className="jumbotron" style={{
        backgroundImage: "url(assets/images/beach.jpg)",
        backgroundSize: "cover",
        paddingLeft: "120px",
        paddingRight: "120px"
      }}>
        <div className="row">

          <div className="col-md-4">
            <div className="card card-cascade wider">
              <div className="view overlay">
                <img className="card-img-top" src="assets/images/neha-1.jpeg" alt="Card image cap" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body text-center">

                <h4 className="card-title"><strong>Pheonix</strong></h4>
                <h5 className="blue-text pb-2"><strong>Luxe, Zara, Food</strong></h5>
                <p className="card-text">In short, this is your second home. You know this place like the back of your hand. This is also the place where you get the best popcorn.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-cascade wider">
              <div className="view overlay">
                <img className="card-img-top" src="assets/images/srm-copy.jpeg" alt="Card image cap" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body text-center">

                <h4 className="card-title"><strong>SRM</strong></h4>
                <h5 className="pink-text pb-2"><strong>College, Research Paper, Graduation</strong></h5>
                <p className="card-text">There are too many things you can say but the best moment is publishing our paper <strong className="pink-text">(Woohoo!)</strong>. The revisions, fixes, all nighters... phew!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-cascade wider">
              <div className="view overlay">
                <img className="card-img-top" src="assets/images/hindu.jpeg" alt="Card image cap" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body text-center">

                <h4 className="card-title"><strong>The Book Fairy</strong></h4>
                <h5 className="indigo-text pb-2"><strong>Dude! We're in the paper</strong></h5>
                <p className="card-text">Thank you <strong className="indigo-text">#TheHindu</strong> for the special feature. Our start to the year couldn't have gotten any better. <strong className="indigo-text">#OneDayModelling</strong> day</p>
              </div>
            </div>
          </div>

        </div>
      </div>


    );
  }
}

export default App;
