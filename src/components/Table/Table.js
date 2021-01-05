import "./Table.scss";

export const Table = ({ tdata }) => (
  <table className="Table">
    <thead className="Table-Header">
      <tr className="Table-Row">
        {Object.keys(tdata[0]).map((key, i) => {
          return (
            <th key={i} className="Table-Heading">
              {key}
            </th>
          );
        })}
      </tr>
    </thead>
    <tbody className="Table-Body">
      {tdata.map((item, i) => {
        return (
          <tr key={i} className="Table-Row">
            {Object.values(item).map((value, i) => {
              return (
                <td key={i} className="Table-Cell">
                  {value}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
);
