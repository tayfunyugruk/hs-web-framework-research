import { h } from "preact";
import { useState, useEffect } from 'preact/hooks';

export default function App(props) {
  const [testValue, setTestValue] = useState("None")
  useEffect(() => {
    setTimeout(() => {
      setTestValue("Tayfun")
    }, 2000);
  }, []);
  console.log("props.collections", props.collections);
  return (
    <div>
      <h1 style={{ color: props.color }}>Hello, {testValue}!</h1>
      <p>Collection size: {props.collectionSize}</p>
      {props.collections.map(collection => {
        return <div key={collection.handle}>{collection.id} - {collection.handle}</div>
      })}
    </div>
  );
}
