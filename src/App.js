import React from "react";
import RecentDonations from "./Components/RecentDonations"
import Progress from './Components/Progress'
import DonationForm from './Components/DonationForm'
import TopBar from "./Components/TopBar"

import "./App.css";

let total = 0
let goal = 1000

const donations = [
  {
    amount: 251,
    caption: "do you luv me",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here take a break from work",
    id: 2,
    name: "John",
  },
  {
    amount: 20,
    caption: "lol",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 110,
    caption: "",
    id: 4,
    name: "Emily",
  },
  {
    amount: 30,
    caption: "Go to miami",
    id: 5,
    name: "Sam",
  },
];

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />

        <div className="container">
          <div className="row">
          <div>
              <RecentDonations donations={donations} key={donations}/>
            </div>
            

            <div className="col-8">
            <Progress goal={goal} total={total} />
              <hr/>

              <DonationForm/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
