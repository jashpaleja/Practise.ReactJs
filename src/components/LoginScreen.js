import { Form, Button } from "react-bootstrap";
import background from "../assets/onboarding-background-pattern/onboarding-background-pattern@3x.png";
import { Component } from "react";
import { getPhoneNo } from "../actions";
import { connect } from "react-redux";

class LoginScreen extends Component {
  phoneNumberLe = ({ target }) => {
    // console.log("Target number", target.value);
    if (!isNaN(Number(target.value)) && target.value.length < 11) {
      console.log("True");
      this.props.getPhoneNo(target.value);
    }
  };
  // check = (number, otp) => {
  //   if(number.length == 10){
  //     // getOtp
  //   }
  // }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#7CBFC0",
          textAlign: "center",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${background})`,
          paddingBottom: "80%",
        }}
      >
        <h1
          src={require("../assets/deco-logo-2/deco-logo-2@3x.png")}
          style={{
            height: 50,
            width: 100,
            height: "100%",
            width: "100%",
            paddingTop: "5%",
          }}
        >
          DECO
        </h1>
        <div style={{ paddingBottom: "8%" }} />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            display: "block",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone no.</Form.Label>
              <br />
              <Form.Control
                type="number"
                maxLength="10"
                placeholder="Phone no."
                style={{ width: 300, marginLeft: "42%" }}
                value={this.props.phoneNo}
                onChange={({ target }) => this.props.getPhoneNo(target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Otp</Form.Label>
              <br />
              <Form.Control
                type="password"
                placeholder="Otp"
                style={{ width: 300, marginLeft: "42%" }}
              />
            </Form.Group>
            <br />
            <br />
            <Button
              variant="light"
              style={{
                marginLeft: "1.5%",
                backgroundColor: "#665A88",
                borderRadius: 30,
                borderColor: "#665A88",
                color: "#ffffff",
                height: 40,
                width: 100,
              }}
              onChange={() => this.check(this.props.phoneNo)}
            >
              Submit
            </Button>{" "}
          </Form>
        </div>
      </div>
    );
  }
}

// export default LoginScreen;
function mapStateToProps(state) {
  return {
    phoneNo: state.practise.phoneNo,
    // otp: state.practise.otp,
  };
}
export default connect(mapStateToProps, {
  getPhoneNo,
  // getOtp,
})(LoginScreen);
