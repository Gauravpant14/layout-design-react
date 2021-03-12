
function Banner() {
  return (
    <div class="banner">
      <div class="bannerHead">
        <h3>OUR LAPTOPS</h3>
        <p>
          {" "}
          dolor sit amet consectetur adipisicing elit. Harum assumenda pariatur
          quos autem maxime voluptatem vitae animi vero distinctio aut!
        </p>
      </div>
      <div class="bannerCard">
        <div class="card1">
          <div class="cardImg">
            <img
              src={require('../../Images/laptop1.jpg').default}
              alt=""
              srcset=""
            ></img>
          </div>
          <div class="cardInfo">
            <h4> Low Range</h4>
            <p>Buy Laptop in Your Budget</p>
          </div>
        </div>

        <div class="card2">
          <div class="cardImg">
            <img src={require('../../Images/laptop2.jpg').default} alt="" srcset=""></img>
          </div>
          <div class="cardInfo">
            <h4> Mid Range</h4>
            <p>Buy Laptop in Your Budget</p>
          </div>
        </div>

        <div class="card3">
          <div class="cardImg">
          <img src={require('../../Images/laptop3.jpg').default} alt="" srcset=""></img>
          </div>
          <div class="cardInfo">
            <h4> High Range</h4>
            <p>Buy Laptop in Your Budget</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
