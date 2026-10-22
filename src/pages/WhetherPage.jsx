import { useLocation } from "react-router";

const WhetherPage = () => {

  const { state } = useLocation();

  return (
    <div>
      Whether Page
    </div>
  );

};

export default WhetherPage;