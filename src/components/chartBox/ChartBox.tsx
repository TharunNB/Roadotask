import "./chartBox.scss";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
      </div>
      <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
      </span>
    </div>
  );
};

export default ChartBox;
