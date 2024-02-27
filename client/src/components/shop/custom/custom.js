import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { wishListProducts } from "./FetchApi";
const apiURL = process.env.REACT_APP_API_URL;



const Custom = (props) => {
  return (
    <Fragment>
      <div class="mt-28">
        <div className=" custom m-6">
          <h3 className="hearder-custom mr-4 ml-4" >
            Custom
          </h3>
          <div className="sub-title-custom mr-4 ml-4">
            Unleash your creativity with a variety of materials and patterns
          </div>
          <div className="content-custom m-4 md:mx-8 md:my-6 grid grid-cols-1 md:grid-cols-4 ">
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1 w-full  ">
                <option selected value="0">Choose bag style *</option>
                <option value="1">Heart shaped mesh bag</option>
                <option value="2">Heart shaped mesh bag</option>
                <option value="3">Heart shaped mesh bag</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom5.png" alt="Girl in a jacket"></img>
              </div>
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1 w-full  ">
                <option selected value="0">Choose motif *</option>
                <option value="1">Heart shaped mesh bag</option>
                <option value="2">Heart shaped mesh bag</option>
                <option value="3">Heart shaped mesh bag</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom2.png" alt="Girl in a jacket"></img>
              </div>
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1 w-full  ">
                <option selected value="0">Choose ingredients *</option>
                <option value="1">Heart shaped mesh bag</option>
                <option value="2">Heart shaped mesh bag</option>
                <option value="3">Heart shaped mesh bag</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom3.png" alt="Girl in a jacket"></img>
              </div>
            </div>
            <div className="content-custom-item rounded-lg shadow p-4 border m-1 ">
              <select className="select-curtom border rounded-lg shadow-sm mb-2 p-1  ">
                <option selected value="0">Choose ingredients to add to mix</option>
                <option value="1">Heart shaped mesh bag</option>
                <option value="2">Heart shaped mesh bag</option>
                <option value="3">Heart shaped mesh bag</option>
              </select>
              <div className="item-custom-image  ">
                <img className="fix-custom-image rounded-lg" src="./image/custom4.png" alt="Girl in a jacket"></img>
              </div>
            </div>
          </div>
          <div className="sub-title-custom mr-4 ml-4 text-center">
            <label for="formName" class="d-block">
              <i class="icon" data-feather="user"></i>
            </label>
            <input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Please enter product name..."></input>

          </div>
          <div className="sub-title-custom m-4 text-center">
            <button type="button" class="btn btn-success">Create</button>
          </div>


        </div>


      </div>

    </Fragment>
  );
};

export default Custom;
