import { useState } from "react";
import { Link } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import more from "../../assets/icons/more.png";
import help from "../../assets/icons/help.png";

const StatusUpdate = ({ cardDetails }) => {
  const [additionalInfo, setAdditionalInfo] = useState(false);

  const handleClick = () => {
    setAdditionalInfo(!additionalInfo);
  };

  const statusCard = cardDetails.map((element) => {
    return (
      <div className="status__application">
        <div className="status__title-info">
          <div className="status__title__wrapper">
            <p className="status__title-text">{element.title}</p>
            <img src={more} alt="expand" onClick={handleClick} className='status__title__more'></img>
            </div>
            <Progress
              theme={{
                active: {
                  color: "#61876E",
                },
              }}
              percent={element.percentage}
            />
          <p className="status__status">Status: {element.status}</p>
          {additionalInfo && (
            <div>
              <p className="status__additional">Additional Information:</p>
              <Link
                to="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/claim-protection-inside-canada/work-study.html"
                target="_blank"
              >
                <p className="status__link">Work Permit</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className="status">
      <h2 className="status__title">STATUS UPDATE</h2>
      <div className="status__box">
        <p className="status__statement">
          Here you will find further information regarding the status of your
          application.
        </p>
      </div>
      <div className="status__options">
        {statusCard}
        <div className="status__disclaimer">
          <img className="status__disclaimer__help" src={help}></img>
          <p className="status__disclaimer__text">
            Please note that this is an estimate only and is subjected to change
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatusUpdate;
