import "./Table.scss";

export const Table = ({ tdata }) => (
  <table className="Table">
    <thead>
      <tr>
        {Object.keys(tdata[0]).map((key, i) => {
          return <th key={i}>{key}</th>;
        })}
      </tr>
    </thead>
    <tbody>
      {tdata.map((item, i) => {
        return (
          <tr key={i}>
            {Object.values(item).map((value, i) => {
              return <td key={i}>{value}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
);
