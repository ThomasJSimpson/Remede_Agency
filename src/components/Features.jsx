import FeaturesItem from "./FeaturesItem";
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";

export default function Features() {
  const featureChat = {
    src: chatIcon,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  };
  const featureMoney = {
    src: moneyIcon,
    alt: "Money Icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  };
  const featureSecurity = {
    src: securityIcon,
    alt: "Security Icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  };
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeaturesItem data={featureChat} />
      <FeaturesItem data={featureMoney} />
      <FeaturesItem data={featureSecurity} />
    </section>
  );
}
