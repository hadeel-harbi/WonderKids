import LeaderBoardImg from "../images/Leaderboard.png";
const LeaderBoard = () => {
  return (
    <>
      <div className="container rounded-5 primary-color-background text-center p-3 mt-3">
        <h3 className="marhey-regular text-light mb-2">قائمة المتصدرين</h3>
        <img src={LeaderBoardImg} width={70} alt="leader" />
        <table className="table table-striped  my-3">
          <thead>
            <tr>
              <th colSpan={3}>أعلى الدرجات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b className="marhey-bold secondary-color">1</b>
              </td>
              <td>Hadeel</td>
              <td>
                <b>84</b>
              </td>
            </tr>
            <tr>
              <td>
                <b className="marhey-bold secondary-color">2</b>
              </td>
              <td>Hadeel</td>
              <td>
                <b>84</b>
              </td>
            </tr>
            <tr>
              <td>
                <b className="marhey-bold secondary-color">3</b>
              </td>
              <td>Hadeel</td>
              <td>
                <b>84</b>
              </td>
            </tr>
            <tr>
              <td>
                <b className="marhey-bold secondary-color">4</b>
              </td>
              <td>Hadeel</td>
              <td>
                <b>84</b>
              </td>
            </tr>
            <tr>
              <td>
                <b className="marhey-bold secondary-color">5</b>
              </td>
              <td>Hadeel</td>
              <td>
                <b>54</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="space-100"></div>
      </div>
    </>
  );
};

export default LeaderBoard;
