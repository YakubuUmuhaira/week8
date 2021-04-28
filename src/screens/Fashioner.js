import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { FashionersContext } from "../contexts/FashionersContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";

const Fashioner = () => {
  const { loading, fashioners, getFashioners } = useContext(FashionersContext);
  useEffect(() => { 
    getFashioners();
    //eslint-disable-next-line
  }, []);
  return (
    <section>
      {loading && <Spinner animation="border" />}
      {fashioners.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>GENDER</th>
              <th>LOCATION</th>
              <th>SERVICES</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {fashioners.map((fashioner) => (
              <tr key={fashioner._id}>
                <td>{fashioner.name}</td>
                <td>{fashioner.gender}</td>
                <td>{fashioner.location}</td>
                <td>{fashioner.services}</td>
                <td>
                  <FiDelete /> <FiEdit /> <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>No Records</h1>
      )}
      ;
    </section>
  );
};
export default Fashioner;
