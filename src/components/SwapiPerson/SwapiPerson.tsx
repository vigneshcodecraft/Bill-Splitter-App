import React, { useEffect, useState } from "react";
import styles from "./SwapiPerson.module.css";

export interface SwapiPersonProps {
  // Define your props here
  id: number;
}
interface Person {
  name: string;
}

async function fetchPerson(id: number) {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const jsonObj = await response.json();
  return jsonObj;
}

export const SwapiPerson = ({ id }: SwapiPersonProps) => {
  const [personInfo, setPerson] = useState<Person>({ name: "Real Person" });

  useEffect(() => {
    async function fetchPersonId() {
      const personObj = await fetchPerson(id);
      setPerson(personObj);
    }
    fetchPersonId();
  }, [id]);

  return <div className={styles.container}>{personInfo.name}</div>;
};

export default SwapiPerson;
