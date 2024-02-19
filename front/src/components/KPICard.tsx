import useUserInfo from "../hooks/useUser";
import ChartData from "../utils/ChartData";

function KPICard(props) {
  const queryUserInfo = useUserInfo();

  //TODO: USE MEMO
  let data = [];
  let cardData = {};
  if (queryUserInfo.data !== undefined) {
    data = ChartData.formatKPIData(queryUserInfo.data.data);
    switch (props.type) {
      case "calories":
        cardData = data.calories;
        break;
      case "proteines":
        cardData = data.proteines;
        break;
      case "glucides":
        cardData = data.glucides;
        break;
      case "lipides":
        cardData = data.lipides;
        break;
    }
  }

  if (queryUserInfo.isLoading) {
    return <></>;
  }
  if (queryUserInfo.isError) {
    return <></>;
  }

  return (
    <div className="flex items-center justify-start gap-3 p-5 bg-gray-100 rounded w-100">
      <img src={cardData.icon} className="w-[50px]" />
      <div className="w-100">
        <div className="font-bold">
          {cardData.value}
          {cardData.unit}
        </div>
        <div className="text-[12px] font-semibold text-gray-500">
          {cardData.type}
        </div>
      </div>
    </div>
  );
}

export default KPICard;
