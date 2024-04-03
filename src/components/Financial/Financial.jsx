import { iconsImgs } from "../../utils/images";

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          Budget wisely, save for emergencies, pay off debt, invest early,
          educate yourself, ensure insurance coverage, and plan for the long
          term to achieve financial stability and security. Iste, vitae.....
        </p>
      </div>
    </div>
  );
};

export default Financial;
