import Button from "react-bootstrap/Button";
function Card(){
    return(
        <div className="col-lg-4">
        <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/id/0/367/267"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
         
          <Button href="#">button</Button>
        </div>
      </div>
      
        </div>
    )
}
export default Card