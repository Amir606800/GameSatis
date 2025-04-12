import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StreamerContext = createContext(null);

export const StreamerProvider = ({ children }) => {
  const [streamData, setStrmData] = useState([]);
  const [searcInput, setSearchInput] = useState("");
  const [filteredStreamer, setFilteredStream] = useState(streamData);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/738b7e83-b507-4380-bae6-33a42082264b ")
      .then((res) => setStrmData(res.data.donators))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const searchResults = streamData.filter((item) =>
      item.name.toLowerCase().includes(searcInput.toLowerCase())
    );
    setFilteredStream(searchResults);
  }, [streamData, searcInput]);

  return (
    <StreamerContext.Provider
      value={{
        streamData,
        searcInput,
        setSearchInput,
        filteredStreamer,
        setFilteredStream,
      }}
    >
      {children}
    </StreamerContext.Provider>
  );
};
