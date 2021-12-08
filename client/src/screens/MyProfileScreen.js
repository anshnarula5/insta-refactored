import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import ProfileDetail from "../components/ProfileDetail";
import { getMyDetails, getUserDetails } from "../redux/actions/usersAction";

const MyProfileScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {userInfo, loading, error} = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (!userInfo) {
      navigate("/auth")
    }
  }, [userInfo,loading])
  return (
    <>
      {loading ? (
        "...LOADING"
      ) : (
        <div className="d-flex flex-column">
          <div className = "row">
          <div className = "col-md-8 offset-md-2">
            <div className="row">
              <div className="col-4 text-center mt-3">
                <img
                  src={userInfo.profileImage}
                  className = "img-fluid"
                  style={{
                    width: "10rem",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </div>
              <div className="col-8 col-sm-8 mt-3 d-flex flex-column">
                <div className="d-flex align-items-center">
                  <h4 className="d-inline mx-2">{userInfo.username}</h4>
                  <Link
                    className="btn btn-outline-dark btn-sm mx-2"
                    to="/profile/edit"
                  >
                    Edit profile
                  </Link>
                  <p className="d-inline fs-5 mx-2">
                    <i className="fas fa-cog"></i>
                  </p>
                </div>
                <div className="my-3 d-flex">
                  <p className="d-inline mx-2 d-flex flex-column text-center">
                    <strong>{userInfo.posts.length}</strong> <small>posts</small>
                  </p>
                  <p className="d-inline mx-2  d-flex flex-column text-center">
                    <strong>{userInfo.followers.length}</strong> <small>followers</small>
                  </p>
                  <p className="d-inline  mx-2  d-flex flex-column text-center">
                    <strong>{userInfo.following.length}</strong> <small>following</small>
                  </p>
                </div>
                <div>
                  <p className = "mx-3">
                    <strong>{userInfo.fullname}</strong>
                    <p>{userInfo.bio}</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <hr className="" />
          POSTS
        </div>
      )}
    </>
  );
};

export default MyProfileScreen;
