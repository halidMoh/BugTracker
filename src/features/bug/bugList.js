import { useSelector } from "react-redux";
import { selectAllBugs } from "./bugSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { Col } from "reactstrap";
const bugList = () => {
  const bugs = useSelector(selectAllBugs());
  const isLoading = useSelector((state) => state.bugs.isLoading);
  const errMsg = useSelector((state) => state.bugs.errMsg);
  console.log(bugs, isLoading, errMsg);
  if (isLoading) {
    return <Error errMsg={errMsg} />;
  }
  if (bugs) {
    return (
      <Col md="5" className="m-1">
        <h4>All BUGS</h4>
        {console.log(bugList)}
      </Col>
    );
  }
  return (
    <Col md="5" className="m-1">
      There are no comments for this campsite yet.
    </Col>
  );
};

export default bugList;
