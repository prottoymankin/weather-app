import { FaRegCheckCircle } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { BsLightbulb, BsLightningCharge } from "react-icons/bs";

const FeatureCards = () => {

  const cards = [
    { icon: <BsLightningCharge />, title: "Instant Weather", text: "Live conditions for any city" },
    { icon: <BsLightbulb />, title: "Smart Tips", text: "A suggestion for your day" },
    { icon: <FaRegCheckCircle />, title: "No Signup", text: "Free and always available" }
  ];

  return (

    <div className="gap-4 grid sm:grid-cols-3 max-w-2xl w-full">
      {
        cards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))
      }
    </div>

  );

};

export default FeatureCards;