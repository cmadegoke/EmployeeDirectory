import React from "react";
import Wrapper from "../src/components/Title";
import Title from "../src/components/Title";
import EmployeeCard from "../src/components/EmployeeCard";
import employees from "./employee.json";

function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <EmployeeCard
        name={employees[0].name}
        title={employees[0].title}
        position={employees[0].position}
      />
       <EmployeeCard
        name={employees[1].name}
        title={employees[1].title}
        position={employees[1].position}
      />
       <EmployeeCard
        name={employees[2].name}
        title={employees[2].title}
        position={employees[2].position}
      />
       <EmployeeCard
        name={employees[3].name}
        title={employees[3].title}
        position={employees[3].position}
      />
       <EmployeeCard
        name={employees[4].name}
        title={employees[4].title}
        position={employees[4].position}
      />
       <EmployeeCard
        name={employees[5].name}
        title={employees[5].title}
        position={employees[5].position}
      />
       <EmployeeCard
        name={employees[6].name}
        title={employees[6].title}
        position={employees[6].position}
      />
      <EmployeeCard
        name={employees[7].name}
        title={employees[7].title}
        position={employees[7].position}
      />
    </Wrapper>
  );
}



export default App;
