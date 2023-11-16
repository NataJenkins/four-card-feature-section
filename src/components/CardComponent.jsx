import PropTypes from "prop-types";
import Supervisor from "../assets/icon-supervisor.svg";
import TeamBuilder from "../assets/icon-team-builder.svg";
import Karma from "../assets/icon-karma.svg";
import Calculator from "../assets/icon-calculator.svg";
import "./CardComponent.scss";

export default function CardComponent({ title, description, color }) {
    const getImg = (image) => {
        switch (image) {
            case "Supervisor":
                return Supervisor;

            case "Team Builder":
                return TeamBuilder;

            case "Karma":
                return Karma;

            case "Calculator":
                return Calculator;

            default:
                break;
        }
    };
    return (
        <div
            className={`card ${title.toLowerCase()}`}
            style={{ borderTop: `4px solid ${color}` }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={getImg(title)} alt="" />
        </div>
    );
}

CardComponent.propTypes = {
    color: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
};
