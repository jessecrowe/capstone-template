import React, { useState, useEffect } from "react";
import { Container, Row,Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../utils/api.utils.js";
import { Post, LoadingSpinner } from "../";
import { useProvideAuth } from "../../hooks/useAuth";
import SearchBar from "../SearchBar";
import axios from "axios";


const Feed = () => {
  const {
    state: { user },
  } = useProvideAuth();
  const [posts, setPosts] = useState(null);
  const [postLoading, setPostLoading] = useState(true);
  const [postError, setPostError] = useState(false);
  const [keywords, setKeywords] = useState("");

  const [data, setData] = useState({
    
    postText: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostSubmit = async (e) => {
    const form = (e).currentTarget;
    (e).preventDefault();
    if (!form.checkValidity()) {
      toast.error("Post text is required");
      setValidated(false);
      return;
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

   api.post("/posts", {
      text: data.postText,
      author: user.username,
    })
    
  .then(
        (res) => {
          setData({
            postText: "",
            isSubmitting: false,
            errorMessage: null,
          });
          setPosts((prevPosts) => [
            {
              ...res.data,
              author: {
                username: user.username,
                profile_image: `/ ${user.profile_image}`
              }
              },
            
            ...prevPosts,
          ]);
          setValidated(false);
        },
        (error) => {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: error.message,
          });
        }
      );
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const allPosts = await api.get("/posts");
        console.log(allPosts);
        setPosts(allPosts.data);
        setPostLoading(false);
      } catch (err) {
        console.error(err.message);
        setPostLoading(false);
        setPostError(true);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <Container className="pt-3 pb-3 clearfix">
        <h4>Share a Snip</h4>
        <Form noValidate validated={validated} onSubmit={handlePostSubmit}>
          <Form.Control
            as="textarea"
            rows={3}
            maxLength="120"
            name="postText"
            placeholder="What's on your mind?"
            aria-describedby="post-form"
            size="lg"
            required
            value={data.postText}
            onChange={handleInputChange}
          />

          {data.errorMessage && (
            <span className="form-error">{data.errorMessage}</span>
          )}
          <Button
            className="float-right mt-3"
            type="submit"
            disabled={data.isSubmitting}
          >
            {data.isSubmitting ? <LoadingSpinner /> : "Post"}
          </Button>
        </Form>
      </Container>

      {!postLoading ? (
        <Container className="pt-3 pb-3">
          <Row className="d-flex-align-items=center">
            <Col as="h6">Recent Snips</Col>
            <Col>
              <SearchBar keywords={keywords} setKeywords={setKeywords}/>
            </Col>
          </Row>

          {postError && "Error fetching posts"}
          {posts &&
            posts
              .filter((post) => post.text.toLowerCase().includes(keywords.toLowerCase())
              )

              .map((post) => <Post key={post._id} post={post} />)}
        </Container>
      ) : (
        <LoadingSpinner full />
      )}
    </>
  );
};

export default Feed;
