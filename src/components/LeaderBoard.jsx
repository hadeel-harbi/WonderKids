import LeaderBoardImg from "../images/Leaderboard.png";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const leaderBoardList = useSelector((state) => state.leaderBoard);
  const SortedLeaderList = leaderBoardList.sort((a, b) => b.score - a.score);

  return (
    <>
      <div className="container rounded-5 primary-color-background text-center p-3 mt-3">
        <h3 className="marhey-regular text-light mb-2">قائمة المتصدرين</h3>
        <img src={LeaderBoardImg} width={70} alt="leader" />
        <table className="table table-striped  my-4">
          <thead>
            <tr>
              <th colSpan={3}>أعلى الدرجات</th>
            </tr>
          </thead>
          <tbody>
            {SortedLeaderList.slice(0, 5).map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <b className="marhey-bold secondary-color">{index + 1}</b>
                  </td>
                  <td>{item.username}</td>
                  <td>
                    <b>{item.score}</b>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="space-100"></div>
      </div>
    </>
  );
};

export default LeaderBoard;
