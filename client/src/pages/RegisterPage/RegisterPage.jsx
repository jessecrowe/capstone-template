 import React,{useState} from "react";
import{Container,Row,Col,InputGroup,Form,Button}from "react-bootstrap";
import {useNavigate}from "react-router-dom";
import "./RegisterPage.scss";
// // import { useProvideAuth } from "../../hooks/useAuth";
// // import { AvatarPicker, LandingHeader, LoadingSpinner } from "../../components";
// // import { setAuthToken } from "../../utils/api.utils";


const intialState={
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    imgs:"",
    isSubmitting: false,
    errorMessage:null,

};
const imgs=["/"];

const RegisterPage = ()=>{
    const [data,setData] =useState(intialState);
    const auth =useProvideAuth();
    let navigate = useNavigate();



const [profileImage, setProfileImage]=useState(getRandomProfileUrl())
function getRandomProfileUrl(){
    // generates random pic in img
    let img = imgs[Math.floor(Math.random() * imgs.length)];
    return img
}
const handleInputChange = event =>{
    setData({
        ...data,
        [event.target.name]:event.target.value,
    });
};

const  handleSignup = async (e)=>{
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

if (
    form.checkValidity()=== false ||
    data.password !== data.confirmPassword
)
setData({
    ...data,
    isSubmitting: false,
    errorMessage:"Passwords do not match",
});

    setData({
        ...data,
        isSubmitting:true,
        errorMessage: null,
    });
    try{
        const res = await auth.signup(
            data.username,
            data.email,
            data.password,
            data.confirmPassword,
            profileImage,
        );
        setData({
            ...data,
            isSubmitting: false,
            errorMessage: null,
          });
          setAuthToken(res.token);
          navigate("/");
        } catch (error) {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: error ? error.message || error.statusText : null,
          });
        }
      };
    
        
    return(
    <div style ={{ overflow:"auto", height: "100vh"}}>
        <LandingHeader/>
        <Container className="mb-5">
            <Row className="pt-5 justify-content-center">
                <Form
                noValidate
                validated
                style={{width:"350px"}}
                onSubmit={handleSignup}
                >
                <h3 className="mb-3">Welcome!</h3>

                <Form.Group controlId="username-register">
                  <Form.Label>UserName</Form.Label>
                  <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={data.username}
                  onChange={handleInputChange}
                  />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="email-register">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    value={data.email}
                    onChange={handleInputChange}
                    />
                    </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="inputConfirmPasswordRegister">Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    required
                    id="inputPasswordRegiste"
                    value={data.password}
                    onChange={handleInputChange}
                    />
                        </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="inputConfirmPasswordRegister">ConfirmPassword</Form.Label>
                    <Form.Control
                    type="password"
                    name="confirmPassword"
                    required
                    id="inputConfirmPasswordRegister"
                    value={data.confirmPassword}
                    onChange={handleInputChange}
                    pattern={data.password}
                    />
                    </Form.Group>
                    {data.errorMessage && (
                        <span className="form-error text-warning">
                            {data.errorMessage}
                        </span>
                    )}
                    <Row className="mr-0">
                        <Col>
                        Already Registered?
                        <Button
                        as="a"
                        variant="link"
                        onClick={()=>navigate("/login")}
                        >
                            Login
                        </Button>
                        </Col>
                        <Button type="submit" disabled={data.isSubmitting}>
                {data.isSubmitting ? <LoadingSpinner /> : "Sign up"}
              </Button>
//             </Row>
//             <AvatarPicker 
            avatarOptions= {imgs} 
            selectedAvatar={profileImage} 
            setSelectedAvatar={setProfileImage} 
            />

          </Form>
        </Row>
      </Container>
    </div>
  );
                    };
                                        
                    
export default RegisterPage;
