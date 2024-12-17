import awsIcon from "../../assets/img/aws.png";

const AWSIcon = ({ size = 18, className = "" }) => (
  <img
    src={awsIcon}
    alt="AWS Icon"
    width={size}
    height={size}
    className={className}
  />
);

export default AWSIcon;