import AdminNavbar from "../../components/adminComponents/AdminNavbar";
import { useEffect, useRef, useState } from "react";
import AdminFooter from "../../components/adminComponents/AdminFooter";

import img1 from "../../assets/svg/undraw_online_learning_re_qw08.svg";
import img2 from "../../assets/svg/undraw_data_trends_re_2cdy.svg";
import img3 from "../../assets/svg/undraw_my_universe_803e.svg";

const AdminHome = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observer1 = createObserver(section1Ref);
    const observer2 = createObserver(section2Ref, 2);
    const observer3 = createObserver(section3Ref);

    return () => {
      if (observer1 && observer1.unobserve && section1Ref.current) {
        observer1.unobserve(section1Ref.current);
      }
      if (observer2 && observer2.unobserve && section2Ref.current) {
        observer2.unobserve(section2Ref.current);
      }
      if (observer3 && observer3.unobserve && section3Ref.current) {
        observer3.unobserve(section3Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    // Add the Chatbase script dynamically to the document head
    const chatbaseScript = document.createElement("script");
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.id = "yf6SQMOv7u4Zi9ihYrCtf";
    chatbaseScript.defer = true;
    document.head.appendChild(chatbaseScript);

    // Clean up the Chatbase script when the component unmounts
    return () => {
      document.head.removeChild(chatbaseScript);
    };
  }, []);

  const createObserver = (ref, index) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (index % 2 === 0) {
            entry.target.classList.add("slide-in-right");
          } else {
            entry.target.classList.add("slide-in-left");
          }
        } else {
          entry.target.classList.remove("slide-in-right");
          entry.target.classList.remove("slide-in-left");
        }
      });
    });

    observer.observe(ref.current);
    return observer;
  };

  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch("/user/getMentors")
      .then((response) => response.json())
      .then((data) => {
        setMentors(data);
      })
      .catch((error) => {
        console.error("Error retrieving mentors:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/user/getMentees")
      .then((response) => response.json())
      .then((data) => {
        setMentees(data);
      })
      .catch((error) => {
        console.error("Error retrieving mentees:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/admin/adminCounts")
      .then((response) => response.json())
      .then((data) => {
        setAdmins(data);
      })
      .catch((error) => {
        console.error("Error retrieving admins:", error);
      });
  }, []);

  const [pendingForms, setPendingForms] = useState([]);

  useEffect(() => {
    fetch("/incubation/getPending")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPendingForms(data.pendingIncubations);
      })
      .catch((error) => {
        console.error("Error retrieving pending forms:", error);
      });
  }, []);

  const handleAccept = (formId) => {
    // Perform accept logic, e.g., send a request to update the form status to "Approved"
    fetch(`/incubation/updateToApproved/${formId}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the UI to reflect the change (if necessary)
        // For example, you can remove the accepted form from the list
        setPendingForms((prevForms) =>
          prevForms.filter((form) => form._id !== formId)
        );
      })
      .catch((error) => {
        console.error("Error accepting form:", error);
      });
  };

  const handleReject = (formId) => {
    // Perform reject logic, e.g., send a request to update the form status to "Rejected"
    fetch(`/incubation/updateToRejected/${formId}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the UI to reflect the change (if necessary)
        // For example, you can remove the rejected form from the list
        setPendingForms((prevForms) =>
          prevForms.filter((form) => form._id !== formId)
        );
      })
      .catch((error) => {
        console.error("Error rejecting form:", error);
      });
  };

  // Counts
  const [approved, setApproved] = useState([]);
  const [pending, setPending] = useState([]);
  const [rejected, setRejected] = useState([]);

  useEffect(() => {
    fetch("/incubation/getApprovedCounts")
      .then((response) => response.json())
      .then((data) => {
        setApproved(data);
      })
      .catch((error) => {
        console.error("Error retrieving mentors:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/incubation/getPendingCounts")
      .then((response) => response.json())
      .then((data) => {
        setPending(data);
      })
      .catch((error) => {
        console.error("Error retrieving mentors:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/incubation/getRejectedCounts")
      .then((response) => response.json())
      .then((data) => {
        setRejected(data);
      })
      .catch((error) => {
        console.error("Error retrieving mentors:", error);
      });
  }, []);

  return (
    <>
      <AdminNavbar />
      {/* Hero Banner */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat text-white	">
        <div className="text-center mr-auto lg:ml-40 md:ml-20 ml-10">
          <div className="text-7xl animate-bottom">Dashboard</div>
        </div>
      </div>
      {/* Dashboard */}
      <div id="cont">
        <div className="summdrill">
          <div className="summary">
            <div className="stitle">Current Workforce</div>
            <div className="summcost">
              The people that make up the taskforce
            </div>
            <br />
            {/* <button>Back</button> */}
          </div>
          <div className="invoice">
            <div className="box margleft">
              <div className="sdesc">Mentees</div>
              <div className="stitle">{mentees}</div>
            </div>
            <div className="box">
              <div className="sdesc">Mentors</div>
              <div className="stitle">{mentors}</div>
            </div>
            <div className="box">
              <div className="sdesc">Admins</div>
              <div className="stitle">{admins}</div>
            </div>
          </div>

          <hr />
          <div className="side">
            <div className="sidetext shadow shadow1">
              <div className="stitle">Pending Approvals</div>
              <div className="sdesc">By Latest!</div>
              {pendingForms.map((form) => (
                <div className="srvdetails" key={form._id}>
                  <div className="username">{form.name}</div>
                  <span> Pending</span>
                  <button onClick={() => handleAccept(form._id)}>Accept</button>
                  <button onClick={() => handleReject(form._id)}>Reject</button>
                </div>
              ))}
            </div>

            <div className="schart">
              <div className="schartcont intitle">
                <div className="incost">
                  <span>1223.00</span>
                </div>
                <div>Total</div>
              </div>
            </div>
          </div>

          <div className="subcharts">
            <div className="inchartcont">
              <div className="stitle">Dashboard Counts</div>
              <div className="sdesc2">Group by environment</div>

              <div className="inchart sbx1">
                <div className="intitle">
                  <div className="incost">
                    <span>Approved</span>
                  </div>
                  <div>{approved}</div>
                </div>
              </div>

              <div className="inchart sbx2">
                <div className="intitle">
                  <div className="incost">
                    <span>Pending</span>
                  </div>
                  <div>{pending}</div>
                </div>
              </div>

              <div className="inchart sbx3">
                <div className="intitle">
                  <div className="incost">
                    <span>Rejected</span>
                  </div>
                  <div>{rejected}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto ml-auto leading-loose relative flex w-full justify-evenly">
          <div
            className=" countContainer bg-slate-400 z-10 rounded-full"
            ref={section1Ref}
          >
            <div className="count">
              <h4>Users Count</h4>
              <span>120</span>
            </div>
          </div>
          <div className=" countContainer bg-slate-400 z-10 rounded-full">
            <div className="count">
              <h4>Startups</h4>
              <span>230</span>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center ml-auto lg:mr-40 mr-auto leading-loose relative">
          <div className="w-full imgContainer2 bg-slate-400	absolute z-10">
            <img src={img2} className="absolute imgInside2 z-20" alt="" />
          </div>
          <div
            ref={section2Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleRight z-30 text-right"
          >
            Get in Touch with <br /> The Business Trends
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section3Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleLeft z-30 text-left"
          >
            Your Space to Shine!
          </div>
          <div className="w-full imgContainer3 bg-slate-400	absolute z-10">
            <img src={img3} className="absolute imgInside3 z-20" alt="" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <AdminFooter />
    </>
  );
};

export default AdminHome;
